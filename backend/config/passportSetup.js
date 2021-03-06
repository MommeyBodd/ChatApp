const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const globalConfig = require("./globalConfig");
const User = require("../models/userModel");

passport.serializeUser((user, done) => {
  done(null, user.userId);
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
          done(null, { userId: user._id, token: accessToken });
        } else {
          new User({
            _id: profile.id,
            userName: profile.displayName,
            googleId: profile.id,
            userEmail: profile.email,
            avatar: profile.picture
          })
            .save()
            .then(newUser => {
              done(null, { userId: newUser._id, token: accessToken });
            });
        }
      });
    }
  )
);
