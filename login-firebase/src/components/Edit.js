import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import services from '../services/services';

function Edit() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state.id);


    const editHandler = async () => {
        console.log("edit");
        try {
            const editData = await services.getContact(location.state.id)
            console.log(editData);
            setName(editData.data().name);
            setEmail(editData.data().email);
            setMobile(editData.data().mobile);
            setAddress(editData.data().address)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (location.state.id !== undefined && location.state.id !== "") {
            editHandler();
        }
    }, [location])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateData = {
            name,
            email,
            mobile,
            address
        }
        try {
            await services.updateContact(location.state.id, updateData)
            navigate("/home")
        } catch (err) {
            console.log(err);
        }
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

export default Edit