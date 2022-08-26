import React, { createContext, useContext, useState } from 'react'

export const context = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <context.Provider value={{ user, login, logout }}>
            {children}
        </context.Provider>
    )
}

export const useAuth = () => {
    return useContext(context)
}