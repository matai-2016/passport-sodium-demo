const initialState = []

function orders (state = initialState, action) {
  switch (action.type) {
    case 'CONFIRM_ORDER':
      return {
        ...state
      }
    default:
      return state
  }
}

export default orders
