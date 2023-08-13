const configurationKnex = require('../../../knexfile');
const knex = require('knex');

const connectionKnex = knex(configurationKnex.development);

module.exports = connectionKnex;