//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, bands) {
  var Band = bands;

  var LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "band-signup",
    new LocalStrategy(
      {
        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        Band.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,

              password: userPassword,

              bandName: req.body.bandName,

              bio: req.body.bio,

              genres: req.body.genres,

              experience: req.body.experience
            };

            Band.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
};
