const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getOrders,
  createOrder,
  deleteOrder
}

function getOrders () {
  return knex('orders')
  .select('status', 'id', 'date', 'pickup_time', 'collector_id')
}

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

function deleteOrder (id) {
  return knex('orders')
    .where('id', id)
    .del()
}
