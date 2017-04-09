import React, { Component } from 'react'
import { Route } from 'react-router'

import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Order from '../components/Order'
import OrderItems from './OrderItems'

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/order/:id' component={Order} />
        <Route path='/order_items/:id' component={OrderItems} />
      </div>
    )
  }
}

export default App
