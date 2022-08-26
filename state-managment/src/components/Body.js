import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navBarItem } from './redux/Action'
import { addItem } from './redux/Action'

function Body() {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [check, setCheck] = useState({ items: [] })


    const checkBoxHandlar = (e) => {
        console.log('clickes');
        console.log(state.arrItems.item);
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
    }

    useEffect(() => {
        dispatch(navBarItem(check.items))
    }, [check])

    const deleteHandlar = (e) => {
        console.log(state.arrItems.item);
        const del_items = state.arrItems.item.filter(each => each !== e.target.name)
        console.log(del_items);
        dispatch(addItem({ item: del_items }))
        console.log(state);
        const del = state.arr.filter(each => each !== e.target.name)
        dispatch(navBarItem(del))
    }

    return (
        <div>{
            state?.arrItems?.item?.map(each => {
                return (
                    <div key={each} class="form-check" >
                            
                        <input type='checkbox' class="form-check-input" value={each} onChange={checkBoxHandlar} id="flexCheckDefault" />
                        <label  >{each}</label>
                        <button name={each} onClick={deleteHandlar} class="btn btn-danger">Delete</button>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Body