import React, { useContext } from 'react'
import { context } from '../Data';

function Select({ each }) {

    const{element,setElement}=useContext(context)

    console.log(each.enum);
    const { lable, name,type } = each
    const { required } = each.validate

    const handelChange=(e)=>{
        setElement({...element,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <label htmlFor="sel1" className="form-label">{lable}</label>
            <select onChange={handelChange} required={required} name={name} type={type} className="form-select" id="sel1" >
                <option value='' disabled selected>Select Country</option>
            {each.enum.map((each)=>{return(<option value={each} key={each}>{each}</option>)})}    
            </select>
        </div>

    )
}

export default Select