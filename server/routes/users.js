const bodyParser = require('body-parser')
const express = require('express')
const passport = require('passport')
const users = require('../lib/users')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', (req, res) => {
  users.getUsers()
    .then(function (result) {
      res.send(result)
    })
})

router.get('/loggedin', (req, res) => {
  if (req.user) {
    console.log('user exists', req.user)
    users.getById(req.user.id)
    .then(function (users) {
      const user = users[0]
      res.send({
        message: 'You are logged in',
        authenticated: true,
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      })
      return
    })
  } else {
    console.log('user doesnt exist')
    res.send({
      message: 'You are not logged in',
      authenticated: false
    })
  }

})

router.post('/login',
  function(req, res, next) {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.status(401).send({
          message: 'Incorrect Username or Password'
        })
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err)
        }
        return res.send({
          message: 'Authentication Successful',
          authenticated: true,
          id: req.user.id,
          name: req.user.name,
          email: req.user.email,
          phone: req.user.phone
        })
      })
    })(req, res, next)
  }
)

router.get('/logout', (req, res) => {
  req.logout()
  res.send({ message: 'Logout successful', authenticated: false, email: null, id: null })
})

router.post('/register',
  register,
  registerFail
)

function register (req, res, next) {
  users.exists(req.body.email)
    .then(exists => {
      if (exists) {
        res.send({ message: 'User Exists', authenticated: false, email: null, id: null })
      }

      users.create(req.body.name, req.body.email, req.body.password, req.body.phone)
        .then(() => users.getByEmail(req.body.email))
        .then((users) => {
          const user = users[0]
          req.login(user, (err) => {
            if (err) {
              return res.send({ message: err })
            }
            res.send({
              message: 'Authentication Successful',
              authenticated: true,
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone
            })
          })
        })
    })
    .catch((err) => {
      if (err) {
        console.error(err.message)
        return
      }
      next()
    })
}

function registerFail (req, res) {
  res.send({ message: 'Couldnt add user' })
}

module.exports = router
