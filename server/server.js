const express = require('express')
const LocalStrategy = require('passport-local')
const passport = require('passport') // used to help us handle authentication and sessions

const sodium = require('sodium').api // used to hash and compare passwords
const users = require('./lib/users')
const session = require('./lib/session')

// cookies
const indexRoutes = require('./routes')
const quoteRoutes = require('./routes/quotes')

const app = express()

app.use(session)
app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(function (username, password, done) {
  users.getByName(username)
    .then(users => {
      if (users.length === 0) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      const user = users[0]
      
      //compare user password to user hash in database
      if (!sodium.crypto_pwhash_str_verify(user.hash, Buffer.from(password, 'utf8'))) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      
      done(null, {
        id: user.id,
        username: user.username
      })
    })
  .catch(err => {
    done(err, false, { message: "Couldn't check your credentials with the database." })
  })
}))

passport.serializeUser(users.serialize)
passport.deserializeUser(users.deserialize)

app.use('/', indexRoutes) // this uses cookies!! -- example of server side
app.use('/quotes', quoteRoutes) // this uses cookies!! -- example of server side

module.exports = app
