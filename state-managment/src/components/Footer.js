import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {

    const state = useSelector(state=>state)
    
  return (
    <div class='footer text-white' >
      {state.arr.length} nav activated
    </div>
  )
}

export default Footer