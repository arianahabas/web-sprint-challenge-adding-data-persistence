
exports.seed = async function(knex) {
  await knex("projects").truncate()
  await knex("resource").truncate()
  await knex("task").truncate()
};
