const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const krateSchema = mongoose.Schema(
  {
    content: {
      type: String,
      reqired: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    votes: {
      type: Number,
      default: 0,
    },
    votedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    downVotedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [{
      comment: {
        type: String
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    }],
    commentCount:{
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports.User = mongoose.model("User", userSchema);
module.exports.Krate = mongoose.model("Krate", krateSchema);
