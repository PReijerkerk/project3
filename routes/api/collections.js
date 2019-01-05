const router = require("express").Router();
const userController = require("../../controllers/userController");
const collectionController = require("../../controllers/collectionController");

// Matches with "/api/collections"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .get(collectionController.findAll)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
