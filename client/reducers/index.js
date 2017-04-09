import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import orders from './orders'

// We combine the reducers here so that they
// can be left split apart above
const quotesApp = combineReducers({
  auth,
  quote,
  orders
})

export default quotesApp
