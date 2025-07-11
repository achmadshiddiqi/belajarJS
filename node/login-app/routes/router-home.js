const express = require("express");
const { viewHome } = require("../controllers/controller-home");
const { loginAuth } = require("../auth/middleware");
const router = express.Router();

router.get("/", loginAuth, viewHome);

module.exports = router;
