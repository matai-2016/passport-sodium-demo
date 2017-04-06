const express = require('express')
const LocalStrategy = require('passport-local')
const passport = require('passport') // used to help us handle authentication and sessions

const sodium = require('sodium').api // used to hash and compare passwords
const users = require('./lib/users')
const session = require('./lib/session')

// cookies
const usersRoutes = require('./routes/users')

const app = express()

app.use(session)
app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, done) {
    users.getByEmail(email)
    .then(users => {
      if (users.length === 0) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      const user = users[0]

      // compare user password to user hash in database
      if (!sodium.crypto_pwhash_str_verify(user.hash, Buffer.from(password, 'utf8'))) {
        return done(null, false, { message: 'Incorrect email or password.' })
      }

      done(null, user)
    })
  .catch(err => {
    done(err, false, { message: "Couldn't check your credentials with the database." })
  })
  }))

passport.serializeUser(users.serialize)
passport.deserializeUser(users.deserialize)

app.use('/users', usersRoutes) // this uses cookies!! -- example of server side

module.exports = app
