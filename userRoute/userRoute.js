const { Router } = require("express");
const router = Router();

// const authMiddleware = require("../authMiddleware/AuthMiddleware");

const { welcome, fetchData } = require("../controllers/controllers");
const e = require("express");

router.get("/", welcome);
router.get("/:city", fetchData); //you can add JWT middleware here

module.exports = router;
