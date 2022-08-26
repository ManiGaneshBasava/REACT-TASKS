import React, { useState } from 'react'
import axios from 'axios'

export default function Registration() {

    const [name, setName] = useState("")
    const [user_name, setUser_Name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    const saveHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(user_name);
        console.log(email);
        console.log(typeof (password));
        console.log(typeof (confPassword));

        const userData = { name, user_name, email, password }

        const userInfo = {
            method: 'POST',
            userData
        }

        if (password === confPassword) {

            axios('https://api.thewallscript.com/restful/signup', userInfo)
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err.message);
                })
        } else {
            alert("mismatch password")
        }
    }

    return (
        <div>{console.log(password === confPassword ? 'hello' : 'hi')}
            <form onSubmit={saveHandler}>
                <label>
                    Name:-
                </label><br />
                <input type='text' name='name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required></input><br />
                <label>
                    User Name:-
                </label><br />
                <input type='text' name='username' placeholder='Enter Your User Name' onChange={(e) => setUser_Name(e.target.value)} required></input><br />
                <label>
                    Email:-
                </label><br />
                <input type='text' name='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required></input><br />
                <label>
                    Password:-
                </label><br />
                <input type='password' name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required></input><br />
                <label>
                    Confirm password:-
                </label><br />
                <input type='password' name='confPassword' placeholder='Enter Confirm Password' onChange={(e) => setConfPassword(e.target.value)} required></input><br />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}