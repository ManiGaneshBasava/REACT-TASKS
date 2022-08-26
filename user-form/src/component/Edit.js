import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Edit() {
    const locator = useLocation()
    const navigation = useNavigate()
    const [localData,setLocalData] = useState(JSON.parse(localStorage.getItem('data'))) 
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    })
    const locatorData = locator.state

    console.log(locatorData);
    useEffect(() => {
        setData(locatorData)
        // setLocalData(
        //     localData.filter((each)=>each.name!==locatorData.name)
        //     // localData.filter((each)=>each.name!==e.name)
        // )
    }, [])


    useEffect(()=>{
        setLocalData(
            localData.filter((each)=>each.name!==locatorData.name)
            // localData.filter((each)=>each.name!==e.name)
        )
        localStorage.setItem('data', JSON.stringify(localData))

    },[localData])



    const handelClick = (e) => {
        setData((pre) => ({
            ...pre, [e.target.name]: e.target.value
        }))
    }

    const submitHandlar = (e) => {
        e.preventDefault()
        setLocalData([...localData,data])
        console.log(data);
        console.log(localData)
        // localStorage.setItem('data', JSON.stringify(localData))
    }



    return (
        <div>
            <form class="btn btn-outline-primary" onSubmit={submitHandlar}>
                <label>name:
                    <input type='text' name='name' value={data.name} onChange={handelClick} />
                </label><br />
                <label>age:
                    <input type='text' name='age' value={data.age} onChange={handelClick} />
                </label><br />
                <label>email:
                    <input type='text' name='email' value={data.email} onChange={handelClick} />
                </label><br />
                <label>password:
                    <input type='text' name='password' value={data.password} onChange={handelClick} />
                </label><br />
                <label>confirm password:
                    <input type='text' name='confPass' value={data.confPass} onChange={handelClick} />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
            <button  onClick={() => navigation(-1)} >home page</button>
        </div>
    )
}

export default Edit