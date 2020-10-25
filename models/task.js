const db = require('../data/config')

function find(){
    return db('task as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('p.name as projectName','p.description as projectDescription', 't.description as taskDescription' , 't.notes as taskNotes', 't.completed as taskCompleted', 'p.completed as projectCompleted')
}

async function add(task){
    const newTask = await db('task').insert(task)
    return newTask
}
module.exports = {
    find,
    add
}

// SELECT p.name as projectName, p.description AS projectDescription, t.description AS taskDescription, t.notes AS taskNotes, t.completed as taskCompleted, p.completed AS projectCompleted
//FROM task AS t
//JOIN projects AS p ON t.project_id=p.id