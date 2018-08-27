import { combineReducers } from 'redux'
import weatherReducer from './weather'

let reducers = combineReducers({
    weatherReducer: weatherReducer
})

export default reducers