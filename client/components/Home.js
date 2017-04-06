import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to='/login'><button className='loginButton'>Login</button></Link>
      <Link to='/register'><button className='registerButton'>Register</button></Link>
    </div>
  )
}

export default Home
