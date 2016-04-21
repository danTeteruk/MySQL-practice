"use strict";


module.exports = function (sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },
        site: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foundedYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Organization;
};
