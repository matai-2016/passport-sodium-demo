const initialState = {
  message: '',
  registerErrorMessage: '',
  authenticated: false,
  name: '',
  email: null,
  phone: '',
  password: '',
  confirm: '',
  id: null
}

export default function auth (state = initialState, action) {
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
    case 'UPDATE_REGISTER_FORM':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'SET_REGISTER_ERROR':
      return {
        ...state,
        registerErrorMessage: action.message
      }
    default:
      return state
  }
}
