import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getOrders, deleteOrder } from '../actions/orders.js'

import Order from '../components/Order'

class OrderList extends React.Component {
  componentDidMount () {
    this.props.getOrders()
  }

  handleClick (id) {
    this.props.deleteOrder(id)
    this.props.getOrders()
  }

  render () {
    return (
      <div>
        {this.props.orders.map((order, i) => {
          return (
            <div className='order' key={i}>
              <Order
                id={order.id}
                status={order.status}
                collectorId={order.collector.name}
                date={order.date}
                pickupTime={order.pickupTime}
              />
              <Link to={`./order/${order.id}`}><button className='view-order-button'>View Order</button></Link>
              <button onClick={() => {
                this.handleClick(order.id)
              }} >Delete Order</button>
            </div>
          )
        })}
      </div>
    )
  }
}

OrderList.propTypes = {
  orders: React.PropTypes.array,
  getOrders: React.PropTypes.func,
  deleteOrder: React.PropTypes.func
}
const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => {
      dispatch(getOrders())
    },
    deleteOrder: (id) => {
      dispatch(deleteOrder(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
