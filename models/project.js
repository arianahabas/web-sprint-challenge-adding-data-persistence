const db = require('../data/config')

function find(){
    return db('projects')

}

module.exports = {
    find
}