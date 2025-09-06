const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a doctor
router.post('/', async (req, res) => {
  try {
    const { username, password, name, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });
    const doctor = new User({ username, password, role: 'doctor', name, email });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a doctor
router.put('/:id', async (req, res) => {
  try {
    const doctor = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a doctor
router.delete('/:id', async (req, res) => {
  try {
    const doctor = await User.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
