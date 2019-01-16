const router = require("express").Router();
const collectionsRoutes = require("./collections");
const userRoutes = require("./user");
const itemsRoutes = require("./items");
const signinRoutes = require("./signin");

// Collection routes
// for "/api/"
router.use("/collections", collectionsRoutes);
router.use("/users",userRoutes);
router.use("/items",itemsRoutes);
// router.use("/signin",signinRoutes);

module.exports = router;
