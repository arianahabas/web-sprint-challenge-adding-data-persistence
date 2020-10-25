exports.seed = async function(knex) {
  await knex('resource').insert([
    {name:'rake'},
    {name:'money', description: '$500/month'},
    {name:'laptop'},
    {name:'friend'}
  ])
};
