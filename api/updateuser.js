// WDS-NODE-API Project: api/updateuser.js (PATCH route)
// https://masteringjs.io/tutorials/mongoose/update
// 3 WAYS TO UPDATE: save(), updateOne(), findOneAndUpdate()

require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/user');

mongoose.connect(
  'mongodb+srv://aaronadler:Brisket12@classedcluster-1-pyyvr.mongodb.net/wds-node-api?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', e => console.error('MY ERROR:', e));
db.once('open', () => console.error('CONNECTED TO DB!'));

module.exports = async (req, res) => {


  try {

  	// Find the user by id provided
		const userToUpdate = await User.findById(req.body.id);

		// Update the document by setting a property and calling `save()`
		req.body.followers && (userToUpdate.followers = req.body.followers);
		req.body.color && (userToUpdate.color = req.body.color);

		const saveResponse = await userToUpdate.save();

		res.status(200).json({saveResponse})

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
