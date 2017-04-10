import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createOrder, getUsers } from '../actions/orders.js'

const CreateOrder = React.createClass({
  componentDidMount () {
    this.props.getUsers()
  },
  render () {
    return (
      <div className='create-order'>
        <h3>Create new order</h3>
        <div className='create-order-form'>
          <h4>Pickup Time: </h4>
          <input type='time' name='pickup_time' onChange={this.updateOrderField} />
          <h4>Collector: </h4>
          <select name='collector_id' onChange={this.updateOrderField} defaultValue='Select collector'>
            {this.props.users.map(user => {
              return <option value={user.id}>{user.name}</option>
            })}
          </select>
        </div>
        <Link />
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
    createOrder: () => dispatch(createOrder()),
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
