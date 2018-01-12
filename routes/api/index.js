console.log("Running routes/api/index.js");
console.log(" Calling:router.use(/videos, videoRoutes)")
const router = require("express").Router();
const videoRoutes = require("./videos");

// video routes
router.use("/videos", videoRoutes);
module.exports = router;