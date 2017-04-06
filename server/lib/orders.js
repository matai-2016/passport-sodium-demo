const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getOrders,
  createOrder
}

function getOrders () {
  return knex('orders')
  .join('users', 'orders.collector_id', '=', 'users.id')
  .join('order_items', 'orders.id', '=', 'order_items.order_id')
  .select('orders.status', 'orders.id', 'orders.date', 'orders.pickup_time', 'order_items.id',
    'order_items.type', 'order_items.modifiers', 'order_items.sugars', 'order_items.size',
   'users.id', 'users.name', 'users.email', 'users.phone')
}
// BROOOOOOOOOKEN    RETURNS []
// ADD ORDER_ITEMS.COMMENTS
function createOrder (newOrder) {
  return knex('orders')
    .insert(newOrder)
    .then((result) => {
      const id = result[0]
      return knex('orders')
        .where('id', id)
        .select('id', 'date', 'status', 'pickup_time', 'collector_id')
    })
}

//create automatic status
