const router = require("express").Router();
const collectionsRoutes = require("./collections");
const userRoutes = require("./user");

// Collection routes
router.use("/collections", collectionsRoutes);
router.use("/users",userRoutes);

module.exports = router;
