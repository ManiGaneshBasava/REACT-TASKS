import React, { useEffect, useState } from 'react'
import Services from '../services/services'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import Edit from './Edit';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/Action';

function Home() {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState();
    const dispatch = useDispatch()


    useEffect(() => {
        getContacts();
    }, [])

    const getContacts = async () => {
        const data = await Services.getAllContacts();
        setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };


    const handleAdd = () => {
        navigate("/contact")
    }

    const deleteHandeler = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this contact!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your contact has been deleted!", {
                        icon: "success",
                    });
                    Services.deleteContact(id)
                    getContacts()

                } else {
                    swal("Your your contact is safe!");
                }
            });
    }


    const handleEdit = (e) => {
        <Edit id={e} />
        console.log(typeof (e));
        console.log(e);
        navigate("/edit", { state: { id: e } })
    }


    const table = contacts?.map((each, index) => {
        return (
            <tr key={each.id}>
                <td>{index + 1}</td>
                <td>{each.name}</td>
                <td>{each.mobile}</td>
                <td>{each.email}</td>
                <td>{each.address}</td>
                <td>
                    <button className="btn btn-primary"onClick={(e) => handleEdit(each.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={(e) => deleteHandeler(each.id)}>Delete</button>
                </td>
            </tr>
        )
    })


    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(auth(false))
        alert("logout successfully")
        navigate("/login")
    }


    return (
        <div>
            <button className='btn btn-success' onClick={handleAdd}> + Add Contact</button>
            <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Monile Number</th>
                        <th>Email Id</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}

export default Home