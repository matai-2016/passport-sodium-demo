const initialState = ''

export default function quotes(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_QUOTE':
      return action.quote
    default:
      return state
    }
}