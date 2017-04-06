exports.up = knex => knex.schema.createTable('order_items', table => {
  table.increments('id').primary()
  table.string('type').notNullable()
  table.integer('order_id').references('orders.id').notNullable()
  table.integer('user_id').references('users.id').notNullable()
  table.string('modifiers')
  table.integer('sugars')
  table.string('size')
  table.string('comments')
})

exports.down = knex => knex.schema.dropTable('order_items')
