const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/pokemon')

module.exports = db