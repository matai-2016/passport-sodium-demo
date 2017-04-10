import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createOrder } from '../actions/orders.js'

const CreateOrder = React.CreateClass({
  render () {
    return (
      <div className='create-order'>
        <h3>Create new order</h3>
        <div className='create-order-form'>
          <h4>Pickup Time: </h4>
          <input type='time' name='pickup_time' onChange={this.updateOrderField} />
          <h4>Collector: </h4>
          <select name='collector_id' onChange={this.updateOrderField} defaultValue='Select collector'>

          </select>
        </div>
      </div>
    )
  }
})

CreateOrder.propTypes = {

}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: () => dispatch(createOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
