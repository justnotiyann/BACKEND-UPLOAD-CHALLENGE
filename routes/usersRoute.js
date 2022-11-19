const router = require("express").Router();
const controllers = require("../controllers/usersControllers");
const upload = require("../middleware/upload");
const imageDimension = require("../middleware/imageDimension");

router.get("/", controllers.getUsers);
router.post("/add", upload.single("url"), controllers.createUser);
router.get("/id/:id", controllers.getUserById);
router.get("/delete/:id", controllers.destroyUser);
router.post("/edit/:id", upload.single("url"), controllers.editUser);

router.post("/buffer", upload.single("url"), imageDimension(1000, 1000), controllers.createUser);

module.exports = router;
