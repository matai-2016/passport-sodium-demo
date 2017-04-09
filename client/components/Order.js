import React from 'react'
import { Link } from 'react-router-dom'

const Order = (props) => {
  return (
    <div className='.'>
      <h3>Date: {props.date}</h3>
      <p>Pickup Time: {props.pickupTime}</p>
      <p>Collector: {props.collectorId}</p>
      <p>Status: {props.status}</p>
      <Link to={`/order_items/${props.id}`}>View Order</Link>
    </div>
  )
}

export default (Order)
