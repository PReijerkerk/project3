const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches "/api/users"
router.route("/")
  .get(userController.getUsers)
  .post(userController.createUser);

// Matches '/api/users/:googleId
router.route('/:googleId')
  .get(userController.getUser)
  .put(userController.addUserCollection);
  
// matches "/api/:googleId/collections" -- retrieves all collections matching google ID
router.route("/:googleId/collections")
  .get(userController.userCollection);

// matches "/api/all" -- retrieves all user objects
router.route("/all")
  .get(userController.getUsers);

// Matches "/api/:googleId" -- Returns user information based on googleID
router.route("/:googleId")
  .get(userController.getUser);

  //Matches "/api/create-user" -- create a new user in the db.Users
router.route("/create-user")
  .post(userController.createUser);

  module.exports = router;
