const express = require("express");
const {
  jobView,
  jobSave,
  jobEditView,
  jobEditSave,
  jobDelete,
} = require("../controllers/controller-apply-job");
const { loginAuth } = require("../auth/middleware");
const router = express.Router();

router.get("/", loginAuth, jobView);

router.post("/save", loginAuth, jobSave);

router.get("/edit/:position/:instance", loginAuth, jobEditView);

router.post("/edit/save", loginAuth, jobEditSave);

router.get("/delete/:position/:instance", loginAuth, jobDelete);

module.exports = router;
