"use strict";
var fs = require("fs");

var Sequelize = require("sequelize");
var config = require('../config/config.json');

var db = {};
var sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(file);
        db[model.name] = model;
    });


sequelize.models.Organization.hasMany(sequelize.models.User);

sequelize.models.Organization.hasMany(sequelize.models.User);


db.sequelize = sequelize;

module.exports = db;
