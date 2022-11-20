var express = require("express");
var router = express.Router();
const controllers = require("../controllers/indexControllers");

/* GET home page. */
router.get("/", controllers.getUsers);

module.exports = router;
