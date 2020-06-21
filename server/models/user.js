const mongoose = require('mongoose');
const validate = require('mongoose-validator');

/**
 * Todo: Add more validation for other fields
 */

const userValidator = [
  validate({
    validator: 'isLength',
    arguments: [6, 20],
    message: 'username should be between 6 and 20 chars',
  }),
];

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    validate: usernameValidator,
  },
  email: {
    type: String,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    require: true,
  },
  role: { type: String },
  provider: { type: String },
});

module.exports = mongoose.model('User', userSchema);
