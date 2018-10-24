const mongoose = require("mongoose");

const User = require("../models/User");

const STATUS_USER_ERROR = 422;

const userCreate = (req, res) => {
  const {
    name,
    email,
    mobileNumber,
    acceptTexts,
    acceptEmails,
    tokenId,
  } = req.body;
  const newUser = new User({
    name,
    tokenId,
    email,
    mobileNumber,
    acceptTexts,
    acceptEmails,
  });
  newUser.save((err, savedUser) => {
    if (err) {
      console.log(err);
      res.status(500).json(JSON.stringify(err));
      return;
    }
    console.log(savedUser);
    res.status(200).json(savedUser);
  });
};

const usersGetAll = (req, res) => {
  User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(422).json(err));
};

const userDelete = (req, res) => {
  console.log("user delete");
  // find a single User account
  // delete user account
  const { id } = req.params;
  User.findByIdAndRemove(id)
    .then(User => {
      if (User === null) throw new Error();
      User.save(User, (err, saveduser) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json("User has been completely deleted!");
      });
    })
    .catch(err => res.status(422).json({ error: "No User!" }));
};

const userGetByToken = (req, res) => {
  // find a single User
  const { id } = req.params;
  console.log("TOKENid", id);
  User.findOne({ tokenId: id })
    .then(User => {
      res.status(200).json(User);
      console.log("user", User);
    })
    .catch(err => res.status(422).json({ error: "No User!" }));
};

const userGetById = (req, res) => {
  // find a single User
  const { id } = req.params;
  console.log("id", id);
  User.findById({ id })
    .then(User => {
      res.status(200).json(User);
    })
    .catch(err => res.status(422).json({ error: "No User!" }));
};

const userEdit = (req, res) => {
  console.log("edit user");
  const {
    name,
    email,
    mobileNumber,
    acceptTexts,
    acceptEmails,
    groups,
    events,
  } = req.body;
  // find a single User
  // edit user details
  // save User
  const { id } = req.params;
  console.log(req.body, id);
  User.findOne({ tokenId: id })
    .then(User => {
      if (User === null) throw new Error();
      if (firstName) User.name = name;
      if (email) User.email = email;
      if (mobilePhone) User.mobilePhone = mobilePhone;
      if (acceptTexts) User.acceptTexts = acceptTexts;
      if (acceptEmails) User.acceptEmails = acceptEmails;
      if (groups) User.groups.push(groups);
      if (events) User.events.push(events);
      User.save(User, (err, saveduser) => {
        if (err) {
          res.status(500).json(err);
          console.log(err);
          return;
        }
        console.log("success", saveduser);
        res.status(200).json(saveduser);
      });
    })
    .catch(err => res.status(422).json({ error: "No User!" }));
};

const addEvent = (req, res) => {
  const { title, allDay, allWeek, start, end, desc, id } = req.body;
  User.update(
    { _id: id },
    {
      $push: {
        events: {
          title: title,
          allDay: allDay,
          allWeek: allWeek,
          start: start,
          end: end,
          desc: desc,
        },
      },
    },
    { safe: true, upsert: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(doc);
        console.log("success", doc);
      }
    }
  );
};

const getEvents = (req, res) => {
  const { id } = req.body;
  console.log("req.body", id);
  User.findOne({ tokenId: id })
    .then(user => {
      console.log(user);
      res.status(200).json(user.events);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
  userCreate,
  usersGetAll,
  userDelete,
  userGetById,
  userEdit,
  userGetByToken,
  addEvent,
  getEvents,
};
