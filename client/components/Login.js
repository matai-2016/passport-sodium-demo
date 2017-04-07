import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser, updateLoginForm } from '../actions'

class Login extends Component {
  render () {
    const errorMessage = this.props.message

    return (
      <div>
        <input type='text' name='email' className='form-control' placeholder='email' onChange={(e) => this.props.updateLoginForm(e.target.name, e.target.value)} />
        <input type='password' name='password' className='form-control' placeholder='Password' onChange={(e) => this.props.updateLoginForm(e.target.name, e.target.value)} />
        <button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
          Login
        </button>

        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
    )
  }

  handleClick (event) {
    const email = this.props.email
    const password = this.props.password
    const creds = { email: email, password: password }
    this.props.loginUser(creds).then(() => {
      if (this.props.authenticated) {
        this.props.history.push('/')
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds) => {
      return dispatch(loginUser(creds))
    },
    updateLoginForm: (name, value) => {
      dispatch(updateLoginForm(name, value))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
