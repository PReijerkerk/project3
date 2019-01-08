const router = require("express").Router();
const userController = require("../../controllers/userController");
const collectionsController = require("../../controllers/collectionsController");

// Matches with "/api/collections"
router.route("/")
.get(collectionsController.findAll)
.post(collectionsController.create);

// Matches with "/api/collection/:id"
router
.route("/:id")
.get(collectionsController.findById)
.put(collectionsController.update)
.delete(collectionsController.remove);

module.exports = router;
