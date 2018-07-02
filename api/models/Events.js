const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
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
