import {combineReducers} from 'redux'

import auth from './auth'
import orders from './orders'
import forms from './forms'

// We combine the reducers here so that they
// can be left split apart above
const quotesApp = combineReducers({
  auth,
  orders,
  forms
})

export default quotesApp
