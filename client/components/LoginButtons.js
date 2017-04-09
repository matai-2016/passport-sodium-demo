import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggedIn, logoutUser } from '../actions'

class LoginButtons extends React.Component {
  componentWillMount () {
    this.props.loggedIn()
  }
  render () {
    const authenticated = this.props.authenticated
    return (
      <div>
        <div>
          {authenticated &&
            <div className='banner-container'>
              <h5>Hello {this.props.name}</h5>
              <button onClick={() => this.props.logoutUser()} className='btn btn-primary login-buttons'>
                Logout
              </button>
            </div>
          }
          {!authenticated &&
            <div className='login-buttons'>
              <Link to='/login'><button className='btn loginButton'>Login</button></Link>
              <Link to='/register'><button className='btn registerButton'>Register</button></Link>
            </div>
          }
        </div>
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
    },
    logoutUser: () => {
      return dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButtons)
