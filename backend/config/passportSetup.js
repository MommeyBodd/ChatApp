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
    (accessToken, refreshToken, profile, done) => {
      const userData = {
        userName: profile.displayName,
        userEmail: profile.emails[0].value,
        googleId: profile.id,
        token: accessToken
      };

      new User(userData)
        .save()
        .then(newUser => console.log(`New user Created ${newUser}`));
      done(null, userData);
    }
  )
);
