const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a patient
router.post('/', async (req, res) => {
  try {
    const { username, password, name, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });
    const patient = new User({ username, password, role: 'patient', name, email });
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a patient
router.put('/:id', async (req, res) => {
  try {
    const patient = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a patient
router.delete('/:id', async (req, res) => {
  try {
    const patient = await User.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
