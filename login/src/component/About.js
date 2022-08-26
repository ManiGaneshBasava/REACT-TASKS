import React from 'react'
import { useAuth } from './auth'

export const About = () => {
    const {login,user}=useAuth()
  return (
    <div>
        {user?`Hollo ${user} how are you!!!   
        currently you have no details available
        `:`pleace Login` }
    </div>
  )
}
