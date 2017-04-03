const express = require('express')

const router = express.Router()

router.get('/open', (req, res) => {
  res.send({ quote: 'This is a quote' })
})

router.get('/secret', (req, res) => {
  if (req.user) {
    return res.send({ quote: 'This is a secret quote' })
  }
  res.status(401).send({ message: 'You do not have access' })
})

module.exports = router
