const db = require('../data/config')

function find(){
    return db('task')

}

module.exports = {
    find
}