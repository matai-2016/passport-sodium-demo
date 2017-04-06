const bodyParser = require('body-parser')
const express = require('express')
const orders = require('../lib/orders')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', (req, res) => {
  orders.getOrders()
    .then(function (result) {
      res.send(result)
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

module.exports = router
