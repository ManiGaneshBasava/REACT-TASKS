import React, { useContext } from 'react'
import { context } from '../Data'

function Age({each}) {

    const {element,setElement}=useContext(context)


    const { label,name,type}=each
    const {required,min,max}=each.validate


    const handelChange=(e)=>{
        setElement({...element,[e.target.name]:e.target.value})
    }


    return (
        <div>
            <label htmlFor="birthday">{label}</label>
            <input onChange={handelChange} required={required} min={min} max={max} type={type} id="birthday" name={name} />
        </div>

    )
}

export default Age