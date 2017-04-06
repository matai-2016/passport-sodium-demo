const bodyParser = require('body-parser')
const express = require('express')
const orders = require('../lib/orders')
const users = require('../lib/users')
const orderItems = require('../lib/order_items')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', (req, res) => {
  Promise.all([orders.getOrders(), users.getUsers(), orderItems.getOrderItems()])
    .then(([myOrders, myUsers, myOrderItems]) => {
      const ordersToSend = myOrders.map(order => {
        return {
          id: order.id,
          date: order.date,
          pickupTime: order.pickup_time,
          collector: myUsers
            .filter(user => user.id === order.collector_id)
            .map(user => {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
              }
            })[0],
          order_items: myOrderItems.filter(orderItem => orderItem.order_id === order.id)
        }
      })
      res.send(ordersToSend)
    })
})

router.post('/', (req, res) => {
  orders.createOrder(req.body)
    .then(function (result) {
      const order = result[0]
      res.send({
        message: 'New order created',
        id: order.id,
        date: order.date,
        pickup_time: order.pickup_time,
        collector_id: order.collector_id,
        status: order.status
      })
    })
})

router.delete('/:id', (req, res) => {
  orders.deleteOrder(req.params.id)
    .then((number) => {
      res.send({
        message: 'No coffee for you then',
        rowsAffected: number
        })
    })
})

module.exports = router
