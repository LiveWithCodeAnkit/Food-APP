import  addFoodReducer from "./useReducer";

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    addFood:addFoodReducer,
    
})

export default rootReducer;