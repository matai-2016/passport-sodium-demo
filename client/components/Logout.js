import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../actions'

class Logout extends Component {
  render () {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
          Logout
        </button>
      </div>
    )
  }

  handleClick (event) {
    this.props.logoutUser()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (creds) => {
      return dispatch(logoutUser(creds))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
