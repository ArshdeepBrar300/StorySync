import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
import { Logo } from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  return !loading
    ? (<div className='w-full flex flex-wrap content- bg-white'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>

        <Footer />


      </div>
    </div>)
    : <div className='h-screen flex items-center justify-center flex-col '>
      <Logo height='100px' />
      <h2>Welcome</h2>
    </div>


}

export default App
