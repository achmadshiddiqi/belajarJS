const express = require("express");
const { viewLogin, login, logout } = require("../controllers/controller-login");
const { loginAuth } = require("../auth/middleware");
const router = express.Router();

router.get("/", viewLogin);

router.post("/auth", login);

router.post("/logout", loginAuth, logout);

module.exports = router;
