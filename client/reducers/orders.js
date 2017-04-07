const initialState = []

export default function orders (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ORDERS':
      return action.orders
    case 'DELETE_ORDER':
      return action.id
    case 'RECEIVE_ORDER_ITEMS':
      return action.orderItems
    case 'DELETE_ORDER_ITEM':
      return action.id
    default:
      return state
  }
}
