import request from 'superagent'

export function loginUser(creds) {
  return dispatch => {
    return request.post('/users/login')
      .set({ 'Content-Type':'application/json' })
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

export function loggedIn (){
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

export function receiveLogin(data) {
  return {
    type: 'RECEIVE_LOGIN',
    data
  }
}

export function failedLogin(err) {
  return {
    type: 'FAILED_LOGIN',
    err
  }
}

export function updateLoginForm(name, value) {
  return {
    type: 'UPDATE_LOGIN_FORM',
    name,
    value
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



// Uses the API middlware to get a quote
export function fetchQuote() {
  return dispatch => {
      request.get('/quotes/open')
      .end((err, res) => {
        if (err) {
          return console.log(err.message)
        }
        console.log(res.body)
        dispatch(receiveQuote(res.body.quote))
      })
  }
}

export function receiveQuote(quote) {
  return {
    type: 'RECEIVE_QUOTE',
    quote
  }
}

export function fetchSecretQuote() {
  return dispatch => {
      request.get('/quotes/secret')
      .end((err, res) => {
        if (err) {
          return console.log(err.message)
        }
        console.log(res.body)
        dispatch(receiveQuote(res.body.quote))
      })
  }
}
