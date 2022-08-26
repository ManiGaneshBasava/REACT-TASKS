import React from 'react'
import { useDispatch } from 'react-redux';
import { logined } from './redux/Action';

function Home() {

  const dispatch = useDispatch();
 
  const logout =()=>{
    dispatch(logined(false))
  }
  
  return (
    <div> 
      hi 
      <button type='button' onClick={logout}>logout</button>
    </div>
  )
}

export default Home