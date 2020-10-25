exports.seed = async function(knex) {
  await knex('task').insert([
    {description:'buy a new rake', notes: 'ACE hardware sells good rakes', completed:true, project_id: 1},
    {description:'ask a friend to help',  notes:'', completed:'', project_id: 1},
    {description:'complete overtime at work to make more money', notes: 'this weeked', completed:false, project_id: 2},
    {description:'take notes and watch lecture', notes: 'watch additional youtube vids to help', completed:true, project_id: 3},
  ])
};
