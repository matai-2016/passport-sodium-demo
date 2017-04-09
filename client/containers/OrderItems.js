import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getOrderItems, deleteOrderItem } from '../actions/orders.js'

import OrderItem from '../components/OrderItem.js'

class OrderItems extends React.Component {
  componentDidMount () {
    this.props.getOrders()
  }

  handleClick (id) {
    this.props.deleteOrderItem(id)
    this.props.getOrderItems()
  }

  render() {
    let order = {}
    return (
      <div className='item'>
        {order = this.props.orders.filter((order) => {
          return (
            order.id === req.params.id
          )
        }),
        order.order_items.map((orderItem) => {
          return (
            <div className='orderItem'>
              <OrderItem
                id={orderItem.id}
                type={orderItem.type}
                modifiers={orderItem.modifiers}
                sugars={orderItem.sugars}
                size={orderItem.size}
                comments={orderItem.comments}
                />
                <button onClick={() => {
                  this.handleClick(orderItem.id)
                }} >Delete Coffee</button>
          </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrderItems: () => {
      dispatch(getOrderItems())
    },
    deleteOrderItem: (id) => {
      dispatch(deleteOrderItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)
