const router = require("express").Router();
const collectionsRoutes = require("./collections");

// Book routes
router.use("/collections", collectionsRoutes);

module.exports = router;
