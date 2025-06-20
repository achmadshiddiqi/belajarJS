const User = require("../models/users");

exports.userView = async (req, res) => {
  const users = await User.find({ role: "Staff" });
  res.render("users", { title: "Users Page", users, msg: req.flash("msg") });
};
