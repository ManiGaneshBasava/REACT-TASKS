import React, {  useState } from 'react'
import { useNavigate ,Navigate} from 'react-router-dom'
import { useAuth } from './auth'


// const userData=useContext(contect)

export const Login = () => {

    const[userr,setUserr]=useState('')
    const {user,login} = useAuth()
    const navigate = useNavigate() 

    const handelLogin=( )=>{
        login(userr)
        navigate("/")
    }

    if (user) {
      return (<Navigate to={-1}/>
      )
   }

  return (

    <div>
        <input typ="text" onChange={(e)=>setUserr(e.target.value)}/>
        <button onClick={handelLogin}>Login</button>  
    </div>
  )
} 