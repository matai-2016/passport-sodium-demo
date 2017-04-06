const initialState = {
  message: '',
  authenticated: false,
  email: null,
  password: '',
  id: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_LOGIN':
      return {
        ...state,
        ...action.data
      }
    case 'PROCESS_LOGOUT':
      return {
        ...state,
        ...action.data
      }
    case 'UPDATE_LOGIN_FORM':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'FAILED_LOGIN':
      return {
        ...state,
        ...action.err
      }
    default:
      return state
  }
}
