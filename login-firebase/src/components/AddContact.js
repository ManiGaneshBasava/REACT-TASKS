import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Services from '../services/services'

function AddContact() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            mobile,
            address
        }
        console.log(newContact);
        await Services.addContact(newContact)
        navigate("/home")
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Mobile Number</span>
                    <input type="text" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required /><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Address</span>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required /><br />
                </div>

                <button className='btn btn-success' type="submit">Submit</button>
            
            </form>
        </div>
    )
}

export default AddContact