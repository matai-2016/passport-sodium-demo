import React, { Component } from 'react'
import { connect } from 'react-redux'

import { registerUser, updateRegisterForm, setRegisterError } from '../actions'

class Register extends Component {
  render () {
    return (
      <div>
        <input type='text' name='name' className='form-control' placeholder='name' onChange={this.handleChange.bind(this)} /><br />
        <input type='text' name='email' className='form-control' placeholder='email' onChange={this.handleChange.bind(this)} /><br />
        <input type='text' name='phone' className='form-control' placeholder='phone' onChange={this.handleChange.bind(this)} /><br />
        <input type='password' name='password' className='form-control glowing-border' placeholder='Password' onChange={this.handleChange.bind(this)} /><br />
        <input type='password' name='confirm' className='form-control glowing-border' placeholder='Confirm Password' onChange={this.handleChange.bind(this)} /><br /><br />
        <button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
          Submit
        </button>
        {this.props.registerErrorMessage && <p>{this.props.registerErrorMessage}</p>}
      </div>
    )
  }

  handleChange (e) {
    this.props.setRegisterError('')
    this.props.updateRegisterForm(e.target.name, e.target.value)
  }

  handleClick (event) {
    const name = this.props.name
    const email = this.props.email
    const phone = this.props.phone
    const password = this.props.password
    const confirm = this.props.confirm
    const creds = { email, password, phone, name }
    if (password !== confirm) {
      this.props.setRegisterError('Passwords do not match')
      return
    }
    this.props.registerUser(creds).then(() => {
      if (this.props.authenticated) {
        this.props.history.push('/')
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => {
      return dispatch(registerUser(creds))
    },
    updateRegisterForm: (name, value) => {
      dispatch(updateRegisterForm(name, value))
    },
    setRegisterError: (message) => {
      dispatch(setRegisterError(message))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    email: state.auth.email,
    phone: state.auth.phone,
    password: state.auth.password,
    confirm: state.auth.confirm,
    message: state.auth.message,
    registerErrorMessage: state.auth.registerErrorMessage,
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
