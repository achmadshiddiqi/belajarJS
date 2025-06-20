const express = require("express");
const { loginAuth } = require("../auth/middleware");
const { userView } = require("../controllers/controller-users");
const router = express.Router();

router.get("/", loginAuth, userView);

module.exports = router;
