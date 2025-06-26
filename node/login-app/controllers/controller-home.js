exports.viewHome = (req, res) => {
  const loggedUser = req.user;
  res.render("home", {
    title: "Home Page",
    activePage: "home",
    loggedUser,
    msg: req.flash("msg"),
  });
};
