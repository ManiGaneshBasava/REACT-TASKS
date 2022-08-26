import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
  const auth = useAuth()
    const navigate=useNavigate()

    const handelLogout=()=>{
        auth.logout()
        navigate("/")
    }
  return (
    <div>
        welcome {auth.user}
        <button onClick={handelLogout}>logout</button>
    </div>
  )
}

export default Profile