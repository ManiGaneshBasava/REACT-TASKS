import React, { useContext } from 'react'
import { context } from '../Data'

function Discritpion({ each }) {

    const {element,setElement}=useContext(context)

    const { label, name, type } = each
    const { required ,maxLength} = each.validate

    const handelChange=(e)=>{
        setElement({...element,[e.target.name]:e.target.value})
    }



    return (
        <div>{console.log(element)}
            <div>
                <label htmlFor="comment">{label}</label>
                <textarea onChange={handelChange} type={type} required={required} className="form-control" maxLength={maxLength} id="comment" name={name} defaultValue={""} />
            </div>

        </div>
    )
}

export default Discritpion