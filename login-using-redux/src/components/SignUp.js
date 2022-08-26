import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SetData } from './redux/Action'

function SignUp() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputData, setInputData] = useState([])
  const state = useSelector(state => state)

  const submitHandlar = (e) => {
    e.preventDefault();
    console.log(inputData);
    console.log(state);

    const emailData = state.data.find(element => element.email === inputData.email)

    console.log(emailData);

    if (emailData) {
      alert('email already exists')
    } else {
      dispatch(SetData(inputData))
      navigate("/login")
    }
  }

  return (
    <div>
      <form onSubmit={submitHandlar}>
        <div>{console.log(state.data)}
          <label className="label">Name</label>
          <input name='name' onChange={(e) =>
            setInputData({ ...inputData, [e.target.name]: e.target.value })} type="text" required />
        </div>
        <div>
          <label className="label">Email</label>
          <input name='email' type="email" onChange={(e) =>
            setInputData({ ...inputData, [e.target.name]: e.target.value })} required />
        </div>
        <div>
          <label className="label">Password</label>
          <input name='password' onChange={(e) =>
            setInputData({ ...inputData, [e.target.name]: e.target.value })} type="password" required />
        </div>
        <div>
          <button type='submit' >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp