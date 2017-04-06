const bodyParser = require('body-parser')
const express = require('express')
const orderItems = require('../lib/order_items')

const router = express.Router()
router.use(bodyParser.json())

router.post('/', (req, res) => {
  orderItems.createOrderItem(req.body)
    .then(function (result) {
      const orderItem = result[0]
      res.send({
        message: 'New order item created',
        id: orderItem.id,
        type: orderItem.type,
        order_id: orderItem.order_id,
        user_id: orderItem.user_id,
        modifiers: orderItem.modifiers,
        sugars: orderItem.sugars,
        size: orderItem.size
      })
    })
})

router.delete('/:id', (req, res) => {
  orderItems.deleteOrderItem(req.params.id)
    .then(() => {
      res.send({
        message: 'Order item deleted'
      })
    })
})

module.exports = router
