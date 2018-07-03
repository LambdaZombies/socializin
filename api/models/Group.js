const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  events: {
    type: Schema.Types.ObjectId,
    ref: 'Events'
  }
});

module.exports = mongoose.model('Groups', GroupSchema);
