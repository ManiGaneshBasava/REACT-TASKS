import React, { useContext } from 'react'
import { context } from '../Data'

function Radio({ each }) {

    const {element,setElement}=useContext(context)

    const { label, name, type } = each
    const { required } = each.validate

    const handelChange =(e)=>{
        setElement({...element,[e.target.name]:e.target.value})
    }



    return (
        <>
        
            <label>{label}:</label>
            {each.enum.map((each) => {
                return(
                    <div>
                        <input onChange={handelChange} value={each} type={type} name={name} required={required}/>
                        <label>{each}</label>
                    </div>
                )
            })}
        </>
    )
}

export default Radio