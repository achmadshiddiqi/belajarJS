exports.viewHome = (req, res) => {
  res.render("home", { title: "Home Page", msg: req.flash("msg") });
};
