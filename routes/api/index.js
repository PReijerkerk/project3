const router = require("express").Router();
const collectionRoutes = require("./collections");

//routes
router.use("/collections", collectionRoutes);

module.exports = router;
