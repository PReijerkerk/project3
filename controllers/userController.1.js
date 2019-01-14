const db = require("../database/models");
//defining methods for the User collection

let userCollection = (req, res) => {
    db.Users.findOne({"googleId": req.params.googleId}, "userCollection")
    .then(data => res.json(data))
    .catch(err => console.log(err));
}

// create a new user in the db.
let createUser = (req, res) => {
    db.Users.create({
        "name": req.body.name,
        "googleId": req.body.googleId,
        "imageUrl": req.body.imageUrl,
        "email": req.body.email
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
}

// GET all users that exist in the db.
let getUsers = (req, res) => {
    db.Users.find({})
    .then(data => res.json(data))
}

// gets a user based on googleID and then returns all of the users information.
let getUser = (req, res) => {
    db.Users.findOne({"googleId": req.params.googleId})
    .then(userInfo => res.json(userInfo))
    .catch(err => console.log(err));
}

// adds collection id to user
let addUserCollection = (req, res) => {
    db.Users.findOne({"gogleId": req.params.googleId})
    .then(collectionInfo => res.json(collectionInfo))
    .catch(err => console.log(err));
}

// Defining methods for the usersController
module.exports = {
    userCollection: userCollection,
    addUserCollection: addUserCollection,
    createUser: createUser,
    getUsers: getUsers, 
    getUser: getUser
}