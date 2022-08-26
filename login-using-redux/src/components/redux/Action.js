export const SET_DATA = 'SET_DATA'

export const SetData=(inputData)=>{
    console.log(inputData);
    return {
        type:SET_DATA,
        payload:inputData
    }
}

export const logined=(inputData)=>{
    console.log(inputData);
    return {
        type:'login',
        payload:inputData
    }
}