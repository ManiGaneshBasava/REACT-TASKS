import { ADD_ITEM } from './Action'
import { DEL_ITEM } from './Action'
import { ADD_NAV } from './Action'

const initialState = {
    arrItems: [],
    arr: []
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                arrItems: action.payload
            }

        case DEL_ITEM:
            return {
                ...state,
                arr: action.payload
            }

        case ADD_NAV:
            return {
                ...state,
                arr: action.payload
            }

        default:
            return state
    }
}