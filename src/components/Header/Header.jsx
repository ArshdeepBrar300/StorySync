import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth?.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    // {
    //   name: "All Posts",
    //   slug: "/all-posts",
    //   active: authStatus,
    // },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='py-1 shadow bg-gray-300'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 p-0 m-0'>
            <Link to='/'>
              <span className="flex justify-between w-full ">
                <Logo height='50px' />
                <div className='flex justify-center text-center items-center ml-2 text-2xl text-black font-thin'><h1>Story<span className='text-gray-500'>Sync</span></h1></div>

              </span>

            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-5 my-2 py-2 duration-200 hover:bg-gray-500 hover:text-white rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header