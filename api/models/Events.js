const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  desc: {
    type: String
  }
});

module.exports = mongoose.model("Events", EventsSchema);
