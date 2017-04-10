import {combineReducers} from 'redux'

import auth from './auth'
import orders from './orders'
import forms from './forms'
import users from './users'

// We combine the reducers here so that they
// can be left split apart above
const quotesApp = combineReducers({
  auth,
  orders,
  forms,
  users
})

export default quotesApp
