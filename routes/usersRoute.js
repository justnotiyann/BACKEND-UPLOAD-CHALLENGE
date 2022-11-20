const router = require("express").Router();
const controllers = require("../controllers/usersControllers");
const upload = require("../middleware/upload");
const imageDimension = require("../middleware/imageDimension");

router.get("/", controllers.getUsers);
router.get("/id/:id", controllers.getUserById);
router.get("/delete/:id", controllers.destroyUser);
router.post("/edit/:id", upload.single("url"), controllers.editUser);
router.post("/add", upload.single("url"), imageDimension(500, 500), controllers.createUser);

module.exports = router;
