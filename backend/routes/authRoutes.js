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
    scope: ["profile"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // console.log('redirect')
  const { accessToken, userId } = req.user;

  res.redirect(`http://localhost:3000/profile?token=${accessToken}&userId=${userId}`);
});


module.exports = router;
