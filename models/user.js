// WDS-NODE-API Project: MODEL FILE: models/user.js


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Guest'
  },
  age: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  color: {
    type: String,
    required: true,
    default: 'white'
  },
  followers:{
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('User', UserSchema, 'user');
