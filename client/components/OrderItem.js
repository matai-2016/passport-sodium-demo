import React from 'react'

const OrderItem = (props) => {
  return (
    <div className='order-item'>
      <h3>Customer: {props.user.name}</h3>
      <h3>Type: {props.type}</h3>
      <p>Sugars: {props.sugars}</p>
      <p>Modifiers: {props.modifiers}</p>
      <p>Size: {props.size}</p>
      <p>Comments: {props.comments}</p>
    </div>
  )
}

export default (OrderItem)
