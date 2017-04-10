import React from 'react'

const Order = (props) => {
  return (
    <div className='order'>
      <h3>Date: {props.date}</h3>
      <p>PickupTime: {props.pickupTime}</p>
      <p>Collector: {props.collectorId}</p>
      <p>Status: {props.status}</p>
    </div>
  )
}

export default Order
