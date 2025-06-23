const User = require("../models/users");

exports.userView = async (req, res) => {
  const users = await User.find({ role: "Staff" });
  const loggedUser = req.user;
  res.render("users", {
    title: "Users Page",
    users,
    loggedUser,
    msg: req.flash("msg"),
  });
};

exports.userViewUpdate = async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    req.flash("msg", "User not found");
    return res.redirect("/users");
  }

  res.render("update", {
    title: "Update User Page",
    msg: req.flash("msg"),
    user,
  });
};

exports.userUpdate = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(401).send("Not authorized");
  }

  try {
    const { role, _id } = req.body;
    const userTarget = await User.findOne({ _id });

    if (userTarget.role === "admin" && role === "admin") {
      req.flash("msg", `${userTarget.username} is already an admin`);
      return res.status(400).render("update", {
        title: "Update User Page",
        msg: req.flash("msg"),
        user: req.body,
      });
    } else if (userTarget.role === "Staff" && role === "Staff") {
      req.flash("msg", `${userTarget.username} is already a staff`);
      return res.status(400).render("update", {
        title: "Update User Page",
        msg: req.flash("msg"),
        user: req.body,
      });
    } else {
      await User.updateOne(
        { username: userTarget.username },
        { $set: { role: role } }
      );
      req.flash("msg", `Successfully updated ${userTarget.username}`);
      return res.status(201).redirect("/users");
    }
  } catch (err) {
    if (err) return console.log(err);
  }
};
