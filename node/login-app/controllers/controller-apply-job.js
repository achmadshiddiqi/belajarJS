const Jobs = require("../models/jobs");

exports.applyJobView = (req, res) => {
  const loggedUser = req.user;
  res.render("applyJobs", {
    title: "Apply Jobs Page",
    activePage: "applyJobs",
    loggedUser,
    msg: req.flash("msg"),
    alert: req.flash("alert"),
  });
};

exports.saveJob = async (req, res) => {
  const { userId, position, instance, address } = req.body;
  if (!userId) return res.status(401);

  const check = await Jobs.findOne({ position, instance });
  if (check) {
    req.flash("alert", "This job has already been inputted");
    return res.status(400).redirect("/job");
  }

  try {
    await Jobs.insertOne({ userId, position, instance, address });
    req.flash("msg", "Job input successful");
    return res.status(201).redirect("/job");
  } catch (err) {
    if (err) return res.status(400).send(err);
  }
};
