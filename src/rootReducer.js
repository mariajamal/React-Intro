import {combineReducers} from 'redux'
import toogleReducer from './toogleReducer'
import countReducer from './countReducer'

const rootReducer=combineReducers({
    toogleReducer,
    countReducer
})

export default rootReducer;
