const initialState = []

export default function users (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return action.users
    default: {
      return state
    }
  }
}
