const models = require("../models");

module.exports = {
  post(req, res) {
    Krate = models.Krate;
    User = models.User;

    const userId = req.body.userId;
    const krate = req.body.krate;
    const newKrate = new Krate({
      content: krate,
      sender: userId,
    });
    newKrate.save(function (err) {
      if (err) {
        res.send({ error: "Internal Error" });
      } else {
        res.send({ message: "Save Success" });
      }
    });
  },
  get(req, res) {
    Krate = models.Krate;
    models.Krate.find({})
      .sort({ createdAt: -1 })
      .populate({ path: "sender", select: ["-password", "-email", "-__v"] })
      .select([
        "-comments",
        "-votedBy",
        "-downVotedBy",
        "-createdAt",
        "-updatedAt",
        "-__v",
      ])
      .exec(function (err, data) {
        if (err) {
          res.send({ error: "Internal Error" });
        } else if (!data) {
          res.send({ message: "No Krates" });
        } else {
          res.send({ krates: data });
        }
      });
  },
  up(req, res) {
    Krate = models.Krate;
    const userid = req.body.userid;
    const krateid = req.body.krateid;
    models.Krate.findById(krateid).exec(function (err, data) {
      if (err || !data) {
        res.send({ error: "Internal Error" });
      } else if (data.votedBy.indexOf(userid) > -1) {
        data.votes = data.votes - 1;
        data.votedBy.pop(userid);
        data.save();
        res.send({ message: "Downvoted" });
      } else if (data.downVotedBy.indexOf(userid) > -1) {
        data.votes = data.votes + 2;
        data.downVotedBy.pop(userid);
        data.votedBy.push(userid);
        res.send({ message: "Upvoted" });
        data.save();
      } else {
        data.votes = data.votes + 1;
        data.votedBy.push(userid);
        res.send({ message: "Upvoted" });
        data.save();
      }
    });
  },
  down(req, res) {
    Krate = models.Krate;
    const userid = req.body.userid;
    const krateid = req.body.krateid;
    models.Krate.findById(krateid).exec(function (err, data) {
      if (err || !data) {
        res.send({ error: "Internal Error" });
      } else if (data.downVotedBy.indexOf(userid) > -1) {
        data.votes = data.votes + 1;
        data.downVotedBy.pop(userid);
        data.save();
        res.send({ message: "Down Voted" });
      } else if (data.votedBy.indexOf(userid) > -1) {
        data.votes = data.votes - 2;
        data.votedBy.pop(userid);
        data.downVotedBy.push(userid);
        res.send({ message: "Down Voted" });
        data.save();
      } else {
        data.votes = data.votes - 1;
        data.downVotedBy.push(userid);
        res.send({ message: "DownVoted" });
        data.save();
      }
    });
  },
};
