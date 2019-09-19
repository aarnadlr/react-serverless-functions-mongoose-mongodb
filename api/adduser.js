// WDS-NODE-API Project: api/addUser.js (POST ROUTE: Add a new user)

require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/user');

const connect = () => {
  mongoose.connect(process.env.MONGODB_WDS, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('error', e => console.error('MY ERROR:', e));
  db.once('open', () => console.error('CONNECTED TO DB!'));
};

module.exports = async (req, res) => {
  connect();
  const user = new User({
    // name: 'Asher',
    name: req.body.name,
    // age: 8,
    age: req.body.age,
    color: req.body.color,
    followers: req.body.followers
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
