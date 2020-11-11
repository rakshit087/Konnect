const models = require("../models");
const bcrypt = require("bcrypt");
const config = require("../config");
const jwt = require("jsonwebtoken");

function jwtSignUser(user) {
  return jwt.sign({ id: user._id }, config.authentication.jwtSecret);
}

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 5, function (err, hash) {
      if (err) {
        res.status(500).send({
          error: err,
        });
      } else {
        User = models.User;
        const email = req.body.email;
        const name = req.body.name;
        const newUser = new User({
          name: name,
          email: email,
          password: hash,
        });
        if (email.includes("vitstudent.ac.in")) {
          newUser.save(function (err) {
            if (err) {
              res.status(200).send({
                error: "User Already Exists",
              });
            } else {
              User.findOne({ email: email }, function (err, user) {
                if (err) {
                  res.status(200).send({
                    error: "Internal Server Error",
                  });
                } else {
                  res.send({
                    user: newUser.toJSON(),
                    token: jwtSignUser(newUser.toJSON()),
                  });
                }
              });
            }
          });
        } else {
          res.send({
            error: "Sorry only Vit Students are allowed",
          });
        }
      }
    });
  },
  login(req, res) {
    const { email, password } = req.body;
    User = models.User;
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (!user) {
        res.status(200).send({
          error: "User not found",
        });
      } else {
        bcrypt.compare(password, user.password, function (err, isMatch) {
          if (err) {
            console.log(err);
          } else {
            if (isMatch) {
              res.send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON()),
              });
            } else {
              res.status(200).send({
                error: "Invalid Password",
              });
            }
          }
        });
      }
    });
  },
  authenticate(req, res) {
    jwt.verify(
      req.headers.authtoken,
      config.authentication.jwtSecret,
      function (err, decoded) {
        if (err) {
          res.send({ error: "Not Authenticated" });
        } else {
          res.send({ authenticated: true, id: decoded.id });
        }
      }
    );
  },
};
