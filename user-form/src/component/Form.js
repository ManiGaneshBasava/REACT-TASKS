import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {

    const navigation = useNavigate()

    const [localData, setLocalData] = useState(() => (JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []))
    const [data, setData] = useState()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLocalData([...localData, data])
        alert(`Hello ${data.name} your account created successfully`)

}

const removeHandlar = (e) => {
    setLocalData(
        localData.filter((each) => each.name !== e.name)
    )
    alert(`Hello ${e.name} your account removed successfully`)
}


useEffect(() => {
    localStorage.setItem('data', JSON.stringify(localData))
}, [localData])

var i = 1
const tableData = localData.map((each) =>
    <tr>
        <td>{i++}</td>
        <td>{each.name}</td>
        <td>
            <button class="btn btn-outline-warning" onClick={() => { navigation('edit', { state: each }) }}>Edit</button>
            <button class="btn btn-outline-success" onClick={() => { navigation('details', { state: each }) }}>details</button>
            <button class="btn btn-outline-danger" onClick={() => { removeHandlar(each) }}>Remove</button>
        </td>
    </tr>
)

return (
    <div>{console.log(data)}{console.log(localData)}
        <form class="btn btn-outline-primary" onSubmit={handleSubmit}>
            <label >
                Name:
            </label>
            <input class="input-group mb-3" required type="text" name='name' onChange={handleChange} /><br />
            <label >
                Age:
            </label>
            <input class="input-group mb-3" required type="number" name='age' onChange={handleChange} /><br />
            <label>
                Email:
            </label>
            <input class="input-group mb-3" required type="email" name='email' onChange={handleChange} /><br />
            <label>
                Password:
            </label>
            <input class="input-group mb-3" required type="password" name='password' onChange={handleChange} /><br />
            <label>
                Confirm Password:
            </label>
            <input class="input-group mb-3" required type="password" name='confPass' onChange={handleChange} /><br />
            <input class="btn btn-success" type="submit" value="Submit" />
        </form>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    </div>
)}

export default Form