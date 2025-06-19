const express = require("express");
const {
  viewRegister,
  saveRegister,
} = require("../controllers/controller-register");
const router = express.Router();

router.get("/", viewRegister);

router.post("/save", saveRegister);

module.exports = router;
