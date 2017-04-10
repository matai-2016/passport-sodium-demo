import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createOrderItem } from '../actions/orders.js'

const CreateOrderItem = React.CreateClass({
  render () {
    return (
      <div className='create-order-item'>
        <h3>Add your coffee</h3>
        <div className='create-order-item-form'>
          <h4>Type: </h4>
          <select name='type' onChange={this.updateOrderField} defaultValue='No Drink Selected'>
            <option value='No Drink Selected'>Select drink</option>
            <option value='Mocha'>Mocha</option>
            <option value='Flat White'>Flat White</option>
            <option value='Short Black'>Short Black</option>
            <option value='Long Black'>Long Black</option>
            <option value='Cappuccino'>Cappuccino</option>
            <option value='Latte'>Latte</option>
            <option value='Hot Chocolate'>Hot Chocolate</option>
            <option value='Americano'>Americano</option>
            <option value='Green Tea'>Green Tea</option>
            <option value='Earl Grey'>Earl Grey</option>
            <option value='Rooibos'>Roobios</option>
            <option value='Iced Chocolate'>Iced Chocolate</option>
            <option value='Iced Coffee'>Iced Coffee</option>
          </select>
          <h4>Size or Keep Cup</h4>
          <div className='sizeSelect'>
            <input onChange={this.updateOrderField} type='radio' name='size' value='Small' checked={this.props.size === 'Small'} />Small
            <input onChange={this.updateOrderField} type='radio' name='size' value='Large' checked={this.props.size === 'Large'} />Large
            <input onChange={this.updateOrderField} type='radio' name='size' value='Keep Cup' checked={this.props.size === 'Keep Cup'} />Keep Cup
          </div>
          <h4>Modifiers</h4>
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Soy' checked={this.props.modifiers.includes('Soy')} />Soy Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Almond' checked={this.props.modifiers.includes('Almond')} />Almond Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Cinnamon' checked={this.props.modifiers.includes('Cinnamon')} />Cinnamon Sprinkles
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Chocolate' checked={this.props.modifiers.includes('Chocolate')} />Chocolate Sprinkles
          <h4>Sugars</h4>
          <input onChange={this.updateOrderField} type='number' name='sugars' min='0' max='4' />
          <h4>Additional Comments</h4>
          <input type='text' name='comments' onChange={this.updateOrderField} />
        </div>
      </div>
    )
  },
  handleClick () {
    this.props.createOrderItem()
  },
  updateModifiers (evt) {
    this.props.updateModifiers(evt.target.value)
  },
  updateOrderField (evt) {
    this.props.updateOrderField(evt.target.name, evt.target.value)
  }
})

OrderListItem.propTypes = {

}
const mapStateToProps = state => {
  return {
    modifiers: state.orderForm.modifiers,
    size: state.orderForm.size
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOrderItemField: (key, value) => {
      dispatch(updateOrderItemField(key, value))
  },
  updateModifiers: (value) => {
    dispatch(updateModifiers(value))
  },
  createOrderItem: (orderItem) => {
    dispatch(createOrderItem(orderItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderItem)
