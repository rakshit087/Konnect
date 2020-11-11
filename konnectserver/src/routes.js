const AuthenticationController = require("./controllers/AuthenticationController");

module.exports = function (app) {
  app.post("/register", AuthenticationController.register);
  app.post("/login", AuthenticationController.login);
  app.post("/authenticate",AuthenticationController.authenticate);
};
