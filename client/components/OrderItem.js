import React from 'react'
import { Link } from 'react-router-dom'

const OrderItem = (props) => {
  return (
    <div className='.'>
      <h3>Type: {props.type}</h3>
      <p>Pickup Time: {props.pickupTime}</p>
      <p>Collector: {props.collectorId}</p>
      <p>Status: {props.status}</p>
      <Link to='/order_items/{props.id}'>View Order</Link>
    </div>
  )
}



export default (OrderItem)
