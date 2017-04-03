const bodyParser = require('body-parser')
const express = require('express')
const passport = require('passport')
const users = require('../lib/users')

const router = express.Router()
router.use(bodyParser.json())

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    res.send({ message: "Authentication Successful", authenticated: true, username: req.user.username, id: req.user.id })
  }
)

router.get('/logout', (req, res) => {
  req.logout()
  res.send({ message: "Logout successful", authenticated: false, username: null, id: null })
})

router.post('/register',
  register,
  registerFail
)

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        res.send({ message: "User Exists", authenticated: false, username: null, id: null })
      }

      users.create(req.body.username, req.body.password)
        .then(() => users.getByName(req.body.username))
        .then((users) => {
          const user = users[0]
          req.login(user , (err) => {
            if (err) {
              return res.send({ message: err })
            }
            res.send({ message: "Authentication Successful", authenticated: true, username: user.username, id: user.id })
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
