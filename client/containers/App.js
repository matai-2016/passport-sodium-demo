import React, { Component } from 'react'
import { Route } from 'react-router'

import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Logout from '../components/Logout'

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/register' component={Register} />
      </div>
    )
  }
}

export default App
