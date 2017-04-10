import request from 'superagent'

import { getOrderItems } from './orders'

export function updateOrderItemField (key, value) {
  return {
    type: 'UPDATE_ORDER_ITEM_FIELD',
    key,
    value
  }
}

export function updateModifiers (value) {
  return {
    type: 'UPDATE_MODIFIERS',
    value
  }
}

export function createOrderItem () {
  return (dispatch, getState) => {
    const orderItem = getState().forms
    request
      .post('/order_items')
      .send(orderItem)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getOrderItems())
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

export function updateOrderField (key, value) {
  return {
    type: 'UPDATE_ORDER_FIELD',
    key,
    value
  }
}
