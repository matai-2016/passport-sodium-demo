const initialState = {
  message: '',
  authenticated: false,
  username: null,
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
    default:
      return state
  }
}