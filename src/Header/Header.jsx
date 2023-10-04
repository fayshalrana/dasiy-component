import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import UserProvider, { UserContext } from '../Provider/UserProvider'
import toast from 'react-hot-toast'

const Header = () => {
  const {user, logOut} = useContext(UserContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      toast.success("Log out successful.")
    })
    .catch(error =>{
      toast.error("Log out faild..!")
    })
  }
  return (
    <div className="navbar bg-purple-500">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link className='text-white' to="/">Home</Link></li>
          <li>
            <Link className='text-white' to="/login">Login</Link>
          </li>
          <li><Link className='text-white' to="/register">Register</Link></li>
          
          <li><Link className='text-white' to="/profile">Profile</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-white normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link className='text-white' to="/">Home</Link></li>
          <li>
            <Link className='text-white' to="/login">Login</Link>
          </li>
          <li><Link className='text-white' to="/register">Register</Link></li>
          <li><Link className='text-white' to="/profile">Profile</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ? <Link onClick={handleLogOut} className='btn'>Log out</Link> :
        <Link to="/login"  className='btn'>Login</Link> 
        
      }
     
    </div>
  </div>
  )
}

export default Header
