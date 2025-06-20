const express = require("express");
const { viewHome } = require("../controllers/controller-home");
const router = express.Router();

router.get("/", viewHome);

module.exports = router;
