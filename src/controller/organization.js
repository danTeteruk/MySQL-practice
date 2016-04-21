var model = require("../model");

exports.getAll = function (req, res) {
    model.Organization.findAll().then(function(organizations) {
        res.status(200).json(organizations);
    });
};


exports.create = function (req, res) {
    var data = req.body;
    model.Organization.create({
            name: data.name,
            site: data.site,
            foundedYear: data.foundedYear
        }).then(function(organization) {
             res.status(200).json(organization);

        }).catch(function(error) {
            res.status(500).send(error);
        });
};

exports.update = function (req, res) {
    var data = req.body;
    model.Organization.findOne({where: {id: req.params.id}}).then(function(organization) {
        if (!organization) {
            res.status(404).json({error: "Organization not found"});
        } else {
            if(data.name) { organization.name = data.name; }
            if(data.site) { organization.site = data.site; }
            if(data.foundedYear) { organization.foundedYear = data.foundedYear; }

            organization.save().then(function (organization) {
                res.status(200).json(organization);
            })
        }
    });
};


exports.delete = function (req, res) {
    model.Organization.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(organization){
        res.status(200).json(organization);
    });
};
