import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'


export const Navbar = () => {

  const {user} = useAuth()


  return (
    <nav>
        <button><NavLink to="/home">Home</NavLink></button>
        {
        !user&&<button><NavLink to="signup">SignUp</NavLink></button>      
        }

        {
        !user&& <button><NavLink to="/login">LogIn</NavLink></button>
        }  
    </nav>
  )
}
