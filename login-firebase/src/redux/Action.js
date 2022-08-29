export const LOGIN = "LOGIN"
export const EDIT = "EDIT"


export const authEdit = (userData) => {
    return {
        type: EDIT,
        payload: userData
    }
}


export const auth = (userData) => {
    return {
        type: LOGIN,
        payload: userData
    }
}
