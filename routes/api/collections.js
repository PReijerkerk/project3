const router = require("express").Router();
const userController = require("../../controllers/userController");
const collectionController = require("../../controllers/collectionController");

// Matches with "/api/collections"
router.route("/")
  .get()
  .post();

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get()
  .get()
  .put()
  .delete();

module.exports = router;
