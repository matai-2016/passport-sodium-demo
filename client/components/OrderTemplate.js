import React from 'react'
import { Link } from 'react-router-dom'

const OrderTemplate = (props) => {
  return (
    <div className='container'>
      <div className='order'>
        <h3>Date: {props.date}</h3>
        <p>Pickup Time: {props.pickupTime}</p>
        <p>Collector: {props.collectorId}</p>
        <p>Status: {props.status}</p>
        <Link to={`/order_items/${props.id}`}>View Order</Link>
      </div>
    </div>
  )
}

export default (OrderTemplate)
