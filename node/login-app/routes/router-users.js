const express = require("express");
const { loginAuth, adminAuth } = require("../auth/middleware");
const {
  userView,
  userViewUpdate,
  userUpdate,
  userDelete,
} = require("../controllers/controller-users");
const router = express.Router();

router.get("/", loginAuth, userView);

router.get("/update/:username", loginAuth, adminAuth, userViewUpdate);

router.post("/update/save", loginAuth, adminAuth, userUpdate);

router.get("/delete/:username", loginAuth, adminAuth, userDelete);

module.exports = router;
