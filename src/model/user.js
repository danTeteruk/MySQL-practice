"use strict";


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },

        OrganizationId: {
          type : DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notEmpty: true
          }
        }
    });

    return User;
};
