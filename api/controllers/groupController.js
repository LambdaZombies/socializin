const mongoose = require('mongoose');

const Group = require('../models/Group');

const groupCreate = (req, res) => {
  const { name, users } = req.body;
  const newGroup = new Group({
    name,
    users
  });
  newGroup.save((err, savedGroup) => {
    if (err) {
      console.log(err);
      res.status(500).json(JSON.stringify(err));
      return;
    }
    console.log(savedGroup);
    res.json(savedGroup);
  });
};

const getGroup = (req, res) => {
  const { id } = req.params.id;
  Group.findById(id)
    .then(groups => res.json(groups))
    .catch(err => {
      res.status(404).json({ nogroupfound: 'No group was found by that ID' });
    });
};

module.exports = {
  groupCreate,
  getGroup
};
