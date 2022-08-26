import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './redux/Action'

function Header() {

    const [input, setInput] = useState('')
    const [data, setData] = useState({ item: [] })
    const dispatch = useDispatch()
    const state = useSelector(state => state)


    const changeHandelar = (e) => {
        setInput(e.target.value)

    }


    const clickHandlar = (e) => {
        e.preventDefault()
        console.log(input);
        data.item.push(input)
        console.log(data);
        dispatch(addItem(data))

    }
    return (

        <div>
            <nav class="navbar navbar-light bg-primary">
                <div class="container">
                    <a class="text-white">LOGO</a>
                    {state.arr.map(each => <div class='text-white'>{each}</div>)}
                    <form class="d-flex">
                        <input class="form-control me-2" type="text" placeholder="Add New" aria-label="Search" onChange={changeHandelar} />
                        <button class="btn btn-success" type="submit" onClick={clickHandlar}>ADD</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header