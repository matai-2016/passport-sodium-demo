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

export function deleteOrderItem (id) {
  return dispatch => {
    return request
      .delete(`/order_items/${id}`)
      .end((err, res) => {
        if (err) {
          return console.error(err.message, 'Delete Coffee Failed')
        }
        dispatch(orderItemDeleted(id))
      })
  }
}

export function orderItemDeleted (id) {
  return {
    type: 'DELETE_ORDER_ITEM',
    id
  }
}

export function getUsers () {
  return dispatch => {
    return request
    .get('/users')
    .end((err, res) => {
      if (err) {
        return console.error(err.message, 'Get Users failed')
      }
      dispatch(receiveUsers(res.body))
    })
  }
}

export function receiveUsers (users) {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}
export function createOrder (date) {
  return (dispatch, getState) => {
    const order = getState().forms
    order.date = date
    request
      .post('/orders')
      .send(order)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getOrders())
        dispatch(confirmOrder(res.body.id))
      })
  }
}

export function confirmOrder (id) {
  return {
    type: 'CONFIRM_ORDER',
    id
  }
}
