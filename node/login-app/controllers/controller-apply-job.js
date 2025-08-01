const Jobs = require("../models/jobs");

exports.jobView = async (req, res) => {
  const loggedUser = req.user;
  const jobs = await Jobs.find({ userId: loggedUser.id });
  res.render("applyJobs", {
    title: "Apply Jobs Page",
    activePage: "applyJobs",
    loggedUser,
    jobs,
    msg: req.flash("msg"),
    alert: req.flash("alert"),
  });
};

exports.jobSave = async (req, res) => {
  const { userId, position, instance, address, portal } = req.body;
  if (!userId) return res.status(401);

  const check = await Jobs.findOne({ userId, position, instance });
  if (check) {
    req.flash("alert", "This job has already been inputted");
    return res.status(400).redirect("/job");
  }

  try {
    await Jobs.insertOne({ userId, position, instance, address, portal });
    req.flash("msg", "Job input successful");
    return res.status(201).redirect("/job");
  } catch (err) {
    if (err) return console.log(err);
  }
};

exports.jobEditView = async (req, res) => {
  const { position, instance } = req.params;
  const loggedUser = req.user;
  const job = await Jobs.findOne({ position, instance });
  if (loggedUser.id !== job.userId) return res.status(401).send("Unauthorized");
  if (!job) {
    req.flash("msg", "Job not found");
    return res.status(400).redirect("/job");
  }

  res.render("jobEdit", {
    title: "Job Application Edit Page",
    activePage: "applyJob",
    loggedUser,
    msg: req.flash("msg"),
    job,
  });
};

exports.jobEditSave = async (req, res) => {
  try {
    const {
      userId,
      oldPosition,
      oldInstance,
      position,
      instance,
      address,
      appliedAt,
      status,
      portal,
    } = req.body;
    const check = await Jobs.findOne({
      userId,
      position,
      instance,
      address,
      portal,
      status,
    });
    const loggedUser = req.user;

    if (check) {
      req.flash("msg", "Job has already been inputted before");
      return res.status(400).render("jobEdit", {
        title: "Job Application Edit Page",
        activePage: "applyJob",
        msg: req.flash("msg"),
        loggedUser,
        job: req.body,
      });
    }

    if (!position || !instance || !status || !portal) {
      req.flash(
        "msg",
        "Position, instance, status, and portal cannot be empty"
      );
      return res.status(400).render("jobEdit", {
        title: "Job Application Edit Page",
        activePage: "applyJob",
        msg: req.flash("msg"),
        loggedUser,
        job: req.body,
      });
    }

    await Jobs.updateOne(
      { userId, position: oldPosition, instance: oldInstance },
      {
        $set: {
          position,
          instance,
          address,
          status,
          portal,
        },
      }
    );

    req.flash("msg", "Job successfully edited");
    return res.status(201).redirect("/job");
  } catch (err) {
    if (err) return res.status(400).send(err);
  }
};
