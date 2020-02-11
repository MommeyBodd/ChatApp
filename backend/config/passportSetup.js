const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const globalConfig = require("./globalConfig");
const User = require("../models/userModel");
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: globalConfig.google.clientID,
      clientSecret: globalConfig.google.clientSecret
    },
    (accessToken, refreshToken, profileInformation, done) => {
      new User({
        userName: profileInformation.displayName,
        googleId: profileInformation.id
      })
        .save()
        .then(newUser => console.log(`New user Created ${newUser}`));
    }
  )
);
