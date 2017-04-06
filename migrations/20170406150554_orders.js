exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id').primary()
  table.string('date')
  table.string('status')
  table.string('pickup_time')
  table.integer('collector_id').references('users.id').notNullable()
})

exports.down = knex => knex.schema.dropTable('orders')
