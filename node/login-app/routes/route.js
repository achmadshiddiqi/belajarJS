const express = require("express");
const router = express.Router();
const { register, login, update, deleteUser } = require("../auth/auth");
const { loginAuth, adminAuth } = require("../auth/middleware");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").post(loginAuth, adminAuth, update);
router.route("/delete").post(loginAuth, adminAuth, deleteUser);
module.exports = router;
