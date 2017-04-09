import request from 'superagent'

export function loginUser (creds) {
  return dispatch => {
    return request.post('/users/login')
      .set({ 'Content-Type': 'application/json' })
      .send(creds)
      .then((res) => {
        console.log(res.body)
        dispatch(receiveLogin(res.body))
      }).catch(err => {
        dispatch(failedLogin(err.response.body))
        return console.error(err.response.body)
      })
  }
}

export function loggedIn () {
  return dispatch => {
    return request.get('/users/loggedin')
      .then((res) => {
        dispatch(receiveLogin(res.body))
      }).catch(err => {
        dispatch(failedLogin(err.response.body))
        return console.error(err.response.body)
      })
  }
}

export function receiveLogin (data) {
  return {
    type: 'RECEIVE_LOGIN',
    data
  }
}

export function failedLogin (err) {
  return {
    type: 'FAILED_LOGIN',
    err
  }
}

export function updateLoginForm (name, value) {
  return {
    type: 'UPDATE_LOGIN_FORM',
    name,
    value
  }
}

export function updateRegisterForm (name, value) {
  return {
    type: 'UPDATE_REGISTER_FORM',
    name,
    value
  }
}

export function setRegisterError (message) {
  return {
    type: 'SET_REGISTER_ERROR',
    message
  }
}

export function registerUser (creds) {
  return dispatch => {
    return request.post('/users/register')
      .set({ 'Content-Type': 'application/json' })
      .send(creds)
      .then((res) => {
        console.log(res.body)
        dispatch(receiveLogin(res.body))
      }).catch(err => {
        dispatch(failedLogin(err.response.body))
        return console.error(err.response.body)
      })
  }
}

// Logs the user out
export function logoutUser () {
  return dispatch => {
    return request.get('/users/logout')
      .then((res) => {
        console.log(res.body)
        dispatch(processLogout(res.body))
      }).catch(err => {
        return console.error(err.response.body)
      })
  }
}

export function processLogout (data) {
  return {
    type: 'PROCESS_LOGOUT',
    data
  }
}
