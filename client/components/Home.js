import React from 'react'
import { Link } from 'react-router-dom'

import OrderList from '../containers/OrderList'

const Home = props => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to='/login'><button className='loginButton'>Login</button></Link>
      <Link to='/register'><button className='registerButton'>Register</button></Link>
      <OrderList />
    </div>
  )
}

export default Home
