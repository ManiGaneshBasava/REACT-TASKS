import { SET_DATA } from "./Action";

const initialstate = {
    data: [],
    isLogin:false
}


export const Reducer = (state = initialstate, action) => {
    console.log(initialstate);
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: [...state.data,action.payload]
            }
        case "login":
            return{
                ...state,
                isLogin: action.payload
            }
        default:
             return state

    }
}