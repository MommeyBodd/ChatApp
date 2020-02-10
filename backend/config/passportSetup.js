const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");

passport.use(
  new GoogleStrategy({
    clientID:
      "425097133445-oofg2pok80acv48e1tee602ra6t6orou.apps.googleusercontent.com",
    clientSecret: "l2K9zU740TkorUC7CkajpGFy"
  }),
  () => {}
);
