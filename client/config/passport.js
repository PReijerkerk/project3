let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;

let db = require("../../models");

// Assigns passport the local strategy. 
passport.use(new LocalStrategy(
  // User will be signing in via username
  {
    usernameField: "username"
  },
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(dbUser) {
      // If username does not exist within the database
      if (!dbUser) {
        return done(null, false, {
          message: "User does not exist."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If user signs in sucessfully
      return done(null, dbUser);
    });
  }
));

//Boilerplate allowing authentication state to be matching across HTTP requests
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(user, cb) {
    // eslint-disable-next-line no-undef
    cb(null, obj);
});

//Exports the configured passport
module.export = passport;