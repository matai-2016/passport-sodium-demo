import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createOrder, getUsers } from '../actions/orders.js'
import { updateOrderField } from '../actions/forms.js'

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
              return <option key={user.id} value={user.id}>{user.name}</option>
            })}
          </select>
        </div>
        <Link to='/'><button onClick={this.handleClick}>Submit Order</button></Link>
      </div>
    )
  },
  handleClick () {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth() + 1
    const yyyy = today.getFullYear()
    const date = dd + '/' + mm + '/' + yyyy
    this.props.createOrder(date)
  },
  updateOrderField (e) {
    this.props.updateOrderField(e.target.name, e.target.value)
  }
})

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (date) => dispatch(createOrder(date)),
    getUsers: () => dispatch(getUsers()),
    updateOrderField: (name, value) => dispatch(updateOrderField(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
