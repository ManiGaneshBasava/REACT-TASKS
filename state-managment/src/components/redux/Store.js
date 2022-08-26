import { createStore } from 'redux'
import { Reducer } from './Reducer'

const Store = createStore(Reducer)

console.log(Store);

export default Store