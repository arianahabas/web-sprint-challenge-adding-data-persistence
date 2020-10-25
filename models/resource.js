const db = require('../data/config')

function find(){
    return db('resource')

}

async function add(resource){
    const newResource = await db('resource').insert(resource)
    return newResource
}


module.exports = {
    find,
    add
}