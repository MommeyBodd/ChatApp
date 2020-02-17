const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const globalConfig = require("./globalConfig");
const User = require("../models/userModel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: globalConfig.google.clientID,
      clientSecret: globalConfig.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
          console.log("user is ", user);
          done(null, user);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id,
            token: accessToken
          })
            .save()
            .then(newUser => {
              console.log(`New user Created ${newUser}`);
              done(null, newUser);
            });
        }
      });
    }
  )
);
