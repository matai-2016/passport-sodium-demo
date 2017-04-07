import request from 'superagent'

export function getOrders () {
  return dispatch => {
    return request
      .get('/orders')
      .end((err, res) => {
        if (err) {
          return console.error(err.message, 'Receive Orders failed')
        }
        dispatch(receiveOrders(res.body))
      })
  }
}

export function receiveOrders (orders) {
  return {
    type: 'RECEIVE_ORDERS',
    orders
  }
}

export function deleteOrder (id) {
  return dispatch => {
    return request
      .delete(`/orders/${id}`)
      .end((err, res) => {
        if (err) {
          return console.error(err.message, 'Delete Failed')
        }
        dispatch(orderDeleted(id))
      })
  }
}

export function orderDeleted (id) {
  return {
    type: 'DELETE_ORDER',
    id
  }
}

export function getOrderItems () {
  return dispatch => {
    return request
    .get('/orders')
    .end((err, res) => {
      if (err) {
        return console.error(err.message, 'Receive Orders failed')
      }
      dispatch(receiveOrderItems(res.body))
    })
  }
}

export function receiveOrderItems (orderItems) {
  return {
    type: 'RECEIVE_ORDER_ITEMS',
    orderItems
  }
}
