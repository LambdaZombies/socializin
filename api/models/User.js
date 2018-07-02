const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: Number,
  },
  image: {
    type: String,
  },
  acceptTexts: {
    type: Boolean,
  },
  acceptEmails: {
    type: Boolean,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Groups",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
