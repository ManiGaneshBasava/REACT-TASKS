import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Services from '../services/services'


function SignUp() {

    const [fName, setFname] = useState();
    const [lName, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            fName,
            lName,
            email,
            password
        }

        await Services.addUsers(newUser)
        alert("Account created successfully")
        navigate("/login")

    }


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">First Name</span>
                    <input className="form-control" type="text" onChange={(e) => setFname(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Last Name</span>
                    <input className="form-control" type="text" onChange={(e) => setLname(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
                </div>


                <button className='btn btn-success' type="submit">Submit</button><br />

                You have an account? <Link to="/login">Log In</Link>

            </form>
        </div>
    )
}

export default SignUp