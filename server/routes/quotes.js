const express = require('express')

const router = express.Router()

router.get('/open', (req, res) => {
  res.send({ quote: 'This is a quote' })
})

router.get('/secret', (req, res) => {
  // req.user will verify that the user has authenicated with the server
  if (req.user) {
    return res.send({ quote: 'This is a secret quote' })
  }
  res.status(401).send({ message: 'You do not have access' })
})

module.exports = router
