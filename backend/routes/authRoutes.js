const router = require("express").Router();
const passport = require("passport");
//ath login

router.get("/login", (req, res) => {
  console.log("user logged out");
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.send("logging out");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

router.get("/user", passport.authenticate("google"), (req, res) => {
  console.log("getting user data");
});

module.exports = router;
