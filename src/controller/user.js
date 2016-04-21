"use strict";

var model = require("../model");
var url = require('url');


exports.create = function (req, res) {
    var data = req.body;
    model.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        title: data.title,
        OrganizationId: data.OrganizationId
    }).then(function(user) {
        res.status(200).json(user);

    }).catch(function(error) {
        res.status(500).send(error);
    });
};

exports.update = function(req, res) {
    var data = req.body;
    model.User.findOne({where: {id: req.params.id}}).then(function(user) {
      if (!user) {
        res.status(404).json({error: "User not found"});
      } else {
        if(data.firstName) {user.firstName = data.firstName; }
        if(data.lastName) {user.lastName = data.lastName; }
        if(data.title) {user.title = data.title; }
        if(data.OrganisationId) {user.OrganisationId = data.OrganisationId}

        user.save().then(function (user) {
          res.status(200).json(user);
        });
      };
    });
};

exports.delete = function(req, res) {
  model.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(user){
    res.status(200).json(user);
  });
};

exports.getUserByOrgId = function(req, res) {
      var urlParsed = url.parse(req.url, true)
      if (urlParsed.query.title) {
        model.User.findAll({
            where: {
                OrganizationId: req.params.OrganizationId,
                title: urlParsed.query.title
            }
        }).then(function(User) {
            if (!User) return res.status(200).json(User);
            res.status(404).json('No user with such title - ' + urlParsed.query.title);

        });
      } else {
        model.User.findAll({
          where: {
            OrganizationId: req.params.OrganizationId
          }
        }).then(function(User) {
          res.status(200).json(User);
        });
      };
};
