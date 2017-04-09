const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getOrderItems,
  createOrderItem,
  deleteOrderItem
}

function getOrderItems () {
  return knex('order_items')
  .select()
}

function createOrderItem (newOrderItem) {
  return knex('order_items')
    .insert(newOrderItem)
    .then((result) => {
      const id = result[0]
      return knex('order_items')
        .where('id', id)
        .select('id', 'type', 'order_id', 'user_id', 'modifiers', 'sugars', 'size', 'comments')
    })
}

function deleteOrderItem (id) {
  return knex('order_items')
    .where('id', id)
    .del()
}
