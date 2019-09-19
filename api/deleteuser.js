// WDS-NODE-API Project: api/deleteuser.js (DELETE route)

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
  try {
  	// Find the user by id provided
    const userToDelete = await User.findById(req.body.id);

    // Remove the user from the DB, and return that removed user for confirmation
		const removedUser = await userToDelete.remove();

    res.status(201).json({ deleted: true, removedUser });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
