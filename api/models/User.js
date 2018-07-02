const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number
  },
  image: {
    type: String
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Groups'
    }
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Events'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
