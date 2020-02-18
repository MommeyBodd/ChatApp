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
    async (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
          done(null, {userId: user._id, accessToken});
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then(newUser => {
              done(null, {userId: newUser._id, token: accessToken});
            });
        }
      });
      // const userResp = await User.findOne({ googleId: profile.id });
      // console.log("Done: ", userResp)
      // return done(null, {accessToken, profile})
    }
  )
);
