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
      <div className='login-buttons'>
        <div className='container'>
          {authenticated &&
            <div className='header clearfix'>
              <nav>
                <ul className='nav nav-pills pull-right'>
                  <li role='presentation'>
                    <Link to='#' onClick={() => this.props.logoutUser()}>Logout</Link>
                  </li>
                </ul>
              </nav>
              <h5 className='text-muted'>Hello {this.props.name}</h5>
            </div>
          }
          {!authenticated &&
            <div className='header clearfix'>
              <nav>
                <ul className='nav nav-pills pull-right'>
                  <li role='presentation'>
                    <Link to='/login'>Login</Link>
                  </li>
                  <li role='presentation'>
                    <Link to='/register'>Register</Link>
                  </li>
                </ul>
              </nav>
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
