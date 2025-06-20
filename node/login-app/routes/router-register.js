const express = require("express");
const router = express.Router();
const {
  viewRegister,
  saveRegister,
} = require("../controllers/controller-register");

router.get("/", viewRegister);

router.post("/save", saveRegister);

module.exports = router;
