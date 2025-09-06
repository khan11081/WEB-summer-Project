const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'patient'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
