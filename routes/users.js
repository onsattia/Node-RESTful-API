const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => res.send(err));
});

router.put("/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }).then(user => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.send(user);
    });
  });
});

router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }).then(user => {
    res.send(user);
  });
});

module.exports = router;
