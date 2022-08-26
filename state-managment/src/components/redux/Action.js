export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'
export const ADD_NAV = 'ADD_NAV'

export const addItem =(array)=>{
    return{
        type:ADD_ITEM,
        payload:array
    }
}

export const deleteItem=(navbar)=>{
    return{
        type:DEL_ITEM,
        payload:navbar
    }
}

export const navBarItem=(navbar)=>{
    return{
        type:ADD_NAV,
        payload:navbar
    }
}
