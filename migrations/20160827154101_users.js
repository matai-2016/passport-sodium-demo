exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('name')
  table.string('email').notNullable().unique()
  table.string('phone')
  table.binary('hash')
})

exports.down = knex => knex.schema.dropTable('users')
