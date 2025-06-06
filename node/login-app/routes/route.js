const express = require("express");
const router = express.Router();
const { register, login, update, deleteUser } = require("../auth/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").post(update);
router.route("/delete").post(deleteUser);
module.exports = router;
