import React from 'react'
import {  useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export  const  PrivateRoutes =(props)=> {
    const state = useSelector(state=>state)
    return (
        <>
            {state.isLogin ? <Outlet  /> : <Navigate to="/login" />}
        </>
    )
}

export  const LoggedInRoute=()=> {
    const state = useSelector(state=>state)
    return (
        <>
            {!state.isLogin ? <Outlet  /> : <Navigate to="/home" />}
        </>
    )
}
