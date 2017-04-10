import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getOrderItems, deleteOrderItem } from '../actions/orders.js'

import OrderItem from '../components/OrderItem.js'

class OrderItems extends React.Component {
  componentDidMount () {
    this.props.getOrderItems()
  }

  handleClick (id) {
    this.props.deleteOrderItem(id)
    this.props.getOrderItems()
  }

  render () {
    const order = this.props.orders.filter(order => order.id === Number(this.props.match.params.id))[0]
    if (!order) {
      return null
    }
    return (
      <div className='item'>
        <h3>Hi</h3>
        <Link to='/create_order_item'><button className='create-order-item-button'>Add coffee</button></Link>
        {order.order_items.map((orderItem, i) => {
          return (
            <div className='orderItem' key={i}>
              <OrderItem
                id={orderItem.id}
                user={orderItem.user_id}
                type={orderItem.type}
                modifiers={orderItem.modifiers}
                sugars={orderItem.sugars}
                size={orderItem.size}
                comments={orderItem.comments}
                />
              <button onClick={() => this.handleClick(orderItem.id)}>Delete Coffee</button>
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
