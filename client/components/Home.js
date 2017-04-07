import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import Logout from './Logout'
import { loggedIn } from '../actions'

class Home extends React.Component {
  componentWillMount () {
    this.props.loggedIn()
  }
  render () {
    const authenticated = this.props.authenticated
    return (
      <div>
        {authenticated && <h1>Hello {this.props.name}</h1>}
        {!authenticated &&
          <Link to='/login'><button className='loginButton'>Login</button></Link>
        }
        {authenticated && <Logout />}
        <Link to='/register'><button className='registerButton'>Register</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: () => {
      return dispatch(loggedIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
