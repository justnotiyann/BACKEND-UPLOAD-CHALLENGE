const router = require("express").Router();
const controllers = require("../controllers/usersControllers");
const upload = require("../middleware/upload");

router.get("/", controllers.getUsers);
router.post("/add", upload.single("url"), controllers.createUser);
router.get("/id/:id", controllers.getUserById);
router.get("/delete/:id", controllers.destroyUser);
router.post("/edit/:id", upload.single("url"), controllers.editUser);

module.exports = router;
