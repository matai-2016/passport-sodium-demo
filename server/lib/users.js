const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const sodium = require('sodium').api

module.exports = {
  create,
  deserialize,
  exists,
  getById,
  getByEmail,
  serialize,
  getUsers
}

function create (name, email, password, phone, testDb) {
  const hash = sodium.crypto_pwhash_str(
    Buffer.from(password, 'utf8'),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  const connection = testDb || knex

  return connection('users')
    .insert({
      name: name,
      email: email,
      hash: hash,
      phone: phone
    })
}

function exists (email, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select('id', 'name', 'email', 'phone')
    .where('id', id)
}

function getByEmail (email, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select()
    .where('email', email)
}

function deserialize (id, done) {
  getById(id)
    .then(users => {
      if (users.length === 0) {
        return done(null, false)
      }
      done(null, users[0])
    })
    .catch(err => done(err, false))
}

function serialize (user, done) {
  done(null, user.id)
}

function getUsers () {
  return knex('users')
  .select('id', 'name', 'email', 'phone')
}
