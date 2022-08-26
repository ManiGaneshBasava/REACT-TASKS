import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function NotMatch() {

  const state = useSelector(state=>state)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!state.isLogin){
      navigate('/login')
    }
  })


  return (
    <div>
        <h1>path not match</h1>
    </div>
  )
}

export default NotMatch