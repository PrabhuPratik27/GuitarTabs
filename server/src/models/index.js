const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config');
const db = {};

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);

const files = fs
    .readdirSync(__dirname)

files.forEach((file) => {
    if(file !== 'index.js'){
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model;
    }
});

console.log(db);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;