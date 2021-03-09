import { combineReducers } from 'redux'
import productsReducer from './products'

const allReducers = combineReducers({
  productsReducer,
})

export default allReducers
