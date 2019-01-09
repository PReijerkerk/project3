const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/collection/:googleId")
.get(userController.userCollection);

router.route("/all")
// Get all users
  .get(userController.getUsers);

  router.route("/:googleId")
// Returns user information based on googleID
  .get(userController.getUser);

  router.route("/create-user")
// create a new user in the db
  .post(userController.createUser);

  module.exports = router;
