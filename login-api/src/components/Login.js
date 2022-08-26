import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('https://api.thewallscript.com/restful/login', {
            email, password
        }).then((res) =>
            console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={loginHandler}>
                <label>
                    User Name
                </label><br />
                <input type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} ></input><br />
                <label>
                    Password:-
                </label><br />
                <input type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}></input><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login