import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAuth } from './auth'
import { logined } from './redux/Action'



function Login() {

  const [loginData, setLoginData] = useState([])
  const state = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, login } = useAuth()

  const submitHandlar = (e) => {
    e.preventDefault();
    console.log(state);

    if (state.data.some((element) => element.email === loginData.email && loginData.password === element.password)) {
      navigate('/home')
      alert("login successful")
      login(loginData.email)
      dispatch(logined(true))
    } else {
      alert('Invalid email or password')
    }

    if (user) {
      return (<Navigate to='/home' />)
    }
    else if (!user) {
      navigate('/login')
    }


  }

  return (
    <div>
      <form onSubmit={submitHandlar}>
        <div >{console.log(loginData)}
          <label>Email Id </label>
          <input type="email" name="email" onChange={(e) => {

            setLoginData({ ...loginData, [e.target.name]: e.target.value })

          }} required />
        </div>
        <div >
          <label>Password </label>
          <input type="password" onChange={(e) => {

            setLoginData({ ...loginData, [e.target.name]: e.target.value })

          }} name="password" required />
        </div>
        <div >
          <button type='submit' >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login