const db = require('../data/config')

function find(){
    return db('projects')
}

async function add(project){
    const newProject = await db('projects').insert(project)
    return newProject
}

module.exports = {
    find,
    add
}