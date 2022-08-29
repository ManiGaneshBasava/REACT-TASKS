import { LOGIN , EDIT } from "./Action";

const initialState = {
    isLogin: false,
    isEdit:null
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case EDIT:
            return {
                ...state,
                isEdit: action.payload
            }

        default:
            return state
    }
}