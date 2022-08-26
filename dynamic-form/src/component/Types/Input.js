import React, { useContext } from 'react'
import { context } from '../Data'
// import Data from '../Data';

function Input({each}) {

    const {element,setElement} = useContext(context)

    const {name,label,type,placeholder}=each
    const {required,minLength,maxLength}=each.validate

    // const [inputchange,setInputchange]=useState(value)

    // const [update,setUpdate] = useState({
    //     firstName:'',
    //     lastName:'',
    //     email:''
    // })


    const handleChange=(e)=>{
        console.log(e.target.name);
        setElement({...element,[e.target.name]:e.target.value})
        console.log(element)
    }
    

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
                <input   
                        type={type} 
                        name={name} 
                        required={required} 
                        minLength={minLength} 
                        maxLength={maxLength} 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder={placeholder}
                        // onChange={(e)=>{setInputchange(e.target.value)}}
                        onChange={handleChange}
                        />
            </div>
            
        </div>
    )
}

export default Input