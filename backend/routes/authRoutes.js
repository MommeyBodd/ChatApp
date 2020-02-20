const router = require("express").Router();
const passport = require("passport");
//ath login

router.get("/login", (req, res) => {
  console.log("user logged out");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  const { token, userId } = req.user;

  res.redirect(`http://localhost:3000/profile?token=${token}&userId=${userId}`);
});

module.exports = router;
