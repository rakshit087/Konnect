const AuthenticationController = require("./controllers/AuthenticationController");
const KrateController = require("./controllers/krateController");
const profileController = require("./controllers/profileController");
const multer = require("multer");
var profileStorage = multer.diskStorage({
  destination: "./uploads/Profile",
  filename: function (req, file, cb) {
    cb(null, file.originalname+'-'+Date.now);
  },
});
var uploadProfile = multer({ storage: profileStorage });
module.exports = function (app) {
  app.post("/register", AuthenticationController.register);
  app.post("/login", AuthenticationController.login);
  app.post("/authenticate",AuthenticationController.authenticate);
  app.post("/krate", KrateController.post);
  app.get("/krate", KrateController.get);
  app.patch("/profile/pic",uploadProfile.single('image'), profileController.uploadProfilePic);
  app.patch("/krate/up",KrateController.up);
  app.patch("/krate/down",KrateController.down);
};
