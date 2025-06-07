const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  deleteUser,
  getUsers,
} = require("../auth/auth");
const { adminAuth } = require("../auth/middleware");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").post(adminAuth, update);
router.route("/delete").post(adminAuth, deleteUser);
module.exports = router;
