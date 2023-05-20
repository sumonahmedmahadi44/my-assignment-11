import React, {  useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user,loggedOut} = useContext(AuthContext);

    
    const loggedOutuser =()=>{
        loggedOut()
        .then()
        .catch(error => console.error(error))
    }

    
    
    return (
        <div className=' bg-pink-200 rounded-2xl p-3'>
      <div className=''>
          <div className=' flex text-stone-100 items-center justify-between'>
              {/* Logo Section */}
              <Link to='/' className='inline-flex items-center'>
                  <img className='w-16 h-16 rounded-3xl p-1 mr-2' src="https://i.ibb.co/WftRC9n/yusuf-onuk-db5-Eg-Eev-AAQ-unsplash.jpg" alt="" />
                  <span className='ml-2  text-cyan-700 text-3xl font-bold  '>
                      Unique Car Toys
                  </span>
              </Link>

              {/* Nav Items Section */}
              <ul className='items-center hidden space-x-8 lg:flex'>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          Home
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/allToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          AllToys
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/myToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          MyToys
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/addToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          AddToys
                      </NavLink>
                  </li>



                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/blog'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          Blog
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      {user ?
                          <button onClick={loggedOutuser} className='btn btn-primary'>Logout</button>
                          :
                          <NavLink
                              to='/login'
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                          >
                              Login
                          </NavLink>

                      }
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      {user ?
                          <img title={user.displayName} className='w-10 rounded-full h-12 w-12' src={user.photoURL} alt="" /> : ''

                      }
                  </li>
              </ul>
              {/* Mobile Navbar Section */}
              <div className='lg:hidden'>
                  {/* Dropdown Open Button */}
                  <button
                      aria-label='Open Menu'
                      title='Open Menu'
                      onClick={() => setIsOpen(true)}
                  >
                      <Bars3BottomRightIcon className='w-5 text-gray-600' />
                  </button>
                  {isOpen && (
                      <div className='absolute top-0 left-0 w-full z-10'>
                          <div className='p-5 bg-white border rounded shadow-sm'>
                              {/* Logo & Button section */}
                              <div className='flex items-center justify-between mb-4'>
                                  <div>
                                  <Link to='/' className='inline-flex items-center'>
                  <img className='w-16 h-16 rounded-3xl p-1 mr-2' src="https://i.ibb.co/WftRC9n/yusuf-onuk-db5-Eg-Eev-AAQ-unsplash.jpg" alt="" />
                  <span className='ml-2  text-cyan-700 text-3xl font-bold  '>
                      Unique Car Toys
                  </span>
              </Link>
                                  </div>
                                  {/* Dropdown menu close button */}
                                  <div>
                                      <button
                                          aria-label='Close Menu'
                                          title='Close Menu'
                                          onClick={() => setIsOpen(false)}
                                      >
                                          <XMarkIcon className='w-5 text-gray-600' />
                                      </button>
                                  </div>
                              </div>
                              {/* Mobile Nav Items Section */}
                              <nav>
                                  <ul className='space-y-4'>

                                      <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                                          <Link
                                              to='/'
                                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                          >
                                              Home
                                          </Link>
                                      </li>
                                      <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/allToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          AllToys
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/myToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          MyToys
                      </NavLink>
                  </li>
                  <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      <NavLink
                          to='/addToys'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          AddToys
                      </NavLink>
                  </li>

                                      <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                                          
                                      </li>

                                      <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                                          <Link
                                              to='/blog'
                                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                          >
                                              Blog
                                          </Link>
                                      </li>
                                      <li className='text-black  hover:bg-white hover:p-1 hover:rounded-md font-b'>
                      {user ?
                          <button 
                          onClick={loggedOutuser} className='btn btn-primary'>Logout</button>
                          :
                          <NavLink
                              to='/login'
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                          >
                              Login
                          </NavLink>

                      }
                  </li>
                                      <li className=''>
                                          {user ?
                                              <img title={user.displayName} className='w-10 rounded' src={user.photoURL} alt="" /> : ''

                                          }
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      </div>

  </div>
    );
};

export default Navbar;