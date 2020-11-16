const models = require("../models");
var fs = require("fs");

module.exports = {
  uploadProfilePic(req, res) {
    const id = req.body.id;
    User = models.User;
    models.User.findById(id, function (err, user) {
      if (err) {
        res.send({ error: "Internal Error" });
      } else if (!user) {
        res.send({ error: "Are you Hacker?" });
      } else {
        user.profilePicture.data = fs.readFileSync(
          path.join(__dirname + "/uploads/Profile" + req.file.filename)
        );
        user.contentType = "image/png";
        user.save(function (err) {
          if (err) {
            res.send({ error: "Internal Error" });
          } else {
            res.send({ message: "Save Successful" });
          }
        });
      }
    });
  },
  getProfile(req,res) {
    const id = req.body.userid;
    models.User.findById(id)
    .select(['-password','-following','-_id','-__v'])
    .exec(function(err, user){
      if(err){
        res.send({ error: "Internal Error"});
      }else{
        res.send({user:user})
      }
    });
  }
};
