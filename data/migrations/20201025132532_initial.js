
exports.up = async function(knex) {
  await knex.schema.createTable('projects', (table)=>{
    table.increments('id')
    table.text('name').notNull()
    table.text('description')
    table.boolean('completed').notNull().defaultTo(false)
  })

  await knex.schema.createTable('resource', (table)=>{
      table.increments('id')
      table.text('name').notNull().unique()
      table.text('description')
  })

  await knex.schema.createTable('task', (table)=>{
    table.increments('id')
    table.text('description').notNull()
    table.text('notes')
    table.boolean('completed').notNull().defaultTo(false)
    table.integer('project_id').references('id').inTable('projects').onDelete('SET NULL').onUpdate('CASCADE')
})
    await knex.schema.createTable('resource_project', (table)=>{
       table.integer('resource_id').notNull().references('id').inTable('resource').onDelete('CASCADE').onUpdate('CASCADE')
       table.integer('project_id').notNull().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
       table.primary(['resource_id', 'project_id'])
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('resource_project')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resource')
    await knex.schema.dropTableIfExists('projects')
};
