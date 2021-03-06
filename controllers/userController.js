const db = require("../database/models");

//defining methods for the Item collection
module.exports = {
    findAll: function(req, res) {
        db.User
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
            .findOne({username: req.params.id})
            .populate({path:'tcase', model: 'Case', populate:{
                path: 'items', model: 'Item' 
            }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
          .findOneAndUpdate({username: req.params.id}, req.body, {new: true} )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}