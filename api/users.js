// WDS-NODE-API Project: api/users.js (GET ROUTE/FIND all users)

require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/user');

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('error', e => console.error('MY ERROR:', e));
  db.once('open', () => console.error('CONNECTED TO DB!'));
};

module.exports = async (req, res) => {
  connect();
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(509).json({ message: e.message });
  }
};
