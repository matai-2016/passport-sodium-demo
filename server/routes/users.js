const bodyParser = require('body-parser')
const express = require('express')
const passport = require('passport')
const users = require('../lib/users')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', (req, res) => {
  users.getUsers()
    .then(function(result) {
      res.send(result)
    })
})

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    res.send({ message: "Authentication Successful", authenticated: true, email: req.user.email, id: req.user.id })
  }
)

router.get('/logout', (req, res) => {
  req.logout()
  res.send({ message: "Logout successful", authenticated: false, email: null, id: null })
})

router.post('/register',
  register,
  registerFail
)

function register (req, res, next) {
  users.exists(req.body.email)
    .then(exists => {
      if (exists) {
        res.send({ message: "User Exists", authenticated: false, email: null, id: null })
      }

      users.create(req.body.name, req.body.email, req.body.password, req.body.phone)
        .then(() => users.getByEmail(req.body.email))
        .then((users) => {
          const user = users[0]
          req.login(user , (err) => {
            if (err) {
              return res.send({ message: err })
            }
            res.send({ message: "Authentication Successful", authenticated: true, email: user.email, id: user.id })
          })
        })
    })
    .catch((err) => {
      next()
    })
}

function registerFail (req, res) {
  res.send({ message: 'Couldnt add user' })
}

module.exports = router
