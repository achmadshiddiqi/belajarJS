const express = require("express");
const { viewLogin, login } = require("../controllers/controller-login");
const router = express.Router();

router.get("/", viewLogin);

router.post("/auth", login);

module.exports = router;
