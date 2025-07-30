const express = require("express");
const {
  applyJobView,
  saveJob,
} = require("../controllers/controller-apply-job");
const { loginAuth } = require("../auth/middleware");
const router = express.Router();

router.get("/", loginAuth, applyJobView);

router.post("/save", loginAuth, saveJob);

module.exports = router;
