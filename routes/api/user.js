const router = require("express").Router();
const usersController = require("../../controllers/userController");

router.route("/collection/:googleId")
.get(userController.userCollection);

router.route("/all")
// Get all users
  .get(usersController.getUsers);

  router.route("/:googleId")
// Returns user information based on googleID
  .get(usersController.getUser);

  router.route("/create-user")
// create a new user in the db
  .post(usersController.createUser);

  module.exports = router;
