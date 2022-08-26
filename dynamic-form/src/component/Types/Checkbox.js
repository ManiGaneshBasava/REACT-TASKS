import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Data'

function Checkbox({ each }) {

    const {element,setElement}=useContext(context)
    const [check, setCheck] = useState({ items: [] })


    const { label, name, type } = each
    // const { required } = each.validate


    const handelChange=(e)=>{
        
        const { items } = check


        if (e.target.checked) {

            setCheck({
                items: [...items, e.target.value]
            })

            console.log(check);
        } else {

            console.log(e.target.value);

            setCheck({
                items: items.filter(r => r !== e.target.value)
            })

        }

        console.log("hello");
        // setElement({...element,[e.target.name]:check})

    }

    useEffect(()=>
        setElement({...element,skills:check.items})
    ,[check])



    return (
        <>

        {console.log(check)}
            <label>{label}</label>
            {each.enum.map((each) => {
                return (
                    <div>
                            <input value={each} onChange={handelChange} class="form-check-input" key={each} type={type} id="check1" name={name} defaultValue="something"/>
                            <label >{each}</label>
                       
                    </div>
                )
            })}

        </>

    )
}

export default Checkbox