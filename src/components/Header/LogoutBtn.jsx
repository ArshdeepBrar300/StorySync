import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
// import Loader from '../Loader'
function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const logoutHandler = async () => {
    setLoading(true)
    await authService.logout()
    dispatch(logout())

    setLoading(false)
  }
  return (
    <button className='inlien-block px-5 my-2 py-2 duration-200 hover:bg-gray-500 hover:text-white rounded-full' onClick={logoutHandler}>{loading ? 'Logging out...' : 'Logout'}</button>
  )
}

export default LogoutBtn