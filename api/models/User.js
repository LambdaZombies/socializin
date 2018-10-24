const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events",
    },
  ],
});

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  allDay: {
    type: Boolean,
    required: true,
  },
  allWeek: {
    type: Boolean,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  desc: {
    type: String,
  },
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
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
  groups: [GroupSchema],
  events: [EventSchema],
});

module.exports = mongoose.model("User", UserSchema);
