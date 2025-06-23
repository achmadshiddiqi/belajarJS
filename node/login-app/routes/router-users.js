const express = require("express");
const { loginAuth, adminAuth } = require("../auth/middleware");
const {
  userView,
  userViewUpdate,
  userUpdate,
} = require("../controllers/controller-users");
const router = express.Router();

router.get("/", loginAuth, userView);

router.get("/update/:username", loginAuth, adminAuth, userViewUpdate);

router.post("/update/save", loginAuth, adminAuth, userUpdate);

module.exports = router;
