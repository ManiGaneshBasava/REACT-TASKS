import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../redux/Action';
import Services from '../services/services'


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        const data = await Services.getAllUsers()
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(users);
        if (users.some((element) => element.email === email && element.password === password)) {
            console.log("success");
            dispatch(auth(true))
            navigate("/home")
        } else {
            alert("invalid username or password")
            console.log("check");
        }

    }



    return (
        <div className='form'>{console.log(users)}
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
                </div>

                <button className='btn btn-success' type="submit">Submit</button><br />
                Don't have an account? <Link to="/">Sign up</Link>
            </form>
        </div>
    )
}

export default Login