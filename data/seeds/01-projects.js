
exports.seed = async function(knex) {
  await knex('projects').insert([
    {name:'Rake leaves', description: 'Front and back yard', completed:'' },
    {name:'Pay bills', description: 'due by end of month', completed: false},
    {name:'Complete school work', description: 'chapter 5', completed: true}
  ])
};
