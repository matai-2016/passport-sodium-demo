exports.up = knex => knex.schema.createTable('order_items', table => {
  table.increments('id').primary()
  table.string('type')
  table.integer('order_id')
  table.integer('user_id')
  table.string('modifiers')
  table.integer('sugars')
  table.string('size')
  table.string('comments')
})

exports.down = knex => knex.schema.dropTable('orders')
