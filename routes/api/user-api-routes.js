const db = require('../models');
let passport = require('../config/passport');
let isAuthenticated = require('../config/middleware/isAuthenticated');
let path = require('path');

module.exports = function(app) {
    //Utilizes local strategy on clicking login button
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/profile");
    });

    //After a sucessful login route to the home page

    //On user logout
    app.get("/logout", function(req, res) {
        req.logout();
        req.redirect("/LoginPg");
    });

    app.get("/profile", function(req, res) {
        console.log(req);
        if (!req.user) {
            res.sendfile(path.join(__dirname), "../");
        }
        else {
            res.sendfile(path.join(__dirname), "../");
        }
    });

    app.get("/api/user_data", function(req, res) {
        if(!req.user) {
            //User is not logged in no data is needed
            res.json({});
        }
        else {
            res.json({
                username: req.user.username,
                password: req.user.password
            });
        }
    });

    app.post("/api/register", function(req, res) {
        console.log(req);
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err){
            console.log(err);
            res.json(err);
            res.status(422).json(err.errors[0].message);
        });
    });

    app.get("/api/users", function(req, res) {
        db.User.findAll().then(function(dbUsers) {
            res.json(dbUsers);
        });
    });
    
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.paramas.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
};