const db = require("../database/models");

//defining methods for the Item collection
module.exports = {
    findAll: function(req, res) {
        db.Items
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Items
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Items
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Items
          .findByIdAndUpdate(req.params.id, req.body, {new: true} )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Items
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}