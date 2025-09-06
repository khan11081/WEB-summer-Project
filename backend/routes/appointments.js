const express = require('express');
const Appointment = require('../models/Appointment');
const User = require('../models/User');

const router = express.Router();

// Book an appointment
router.post('/', async (req, res) => {
  try {
    const { doctorId, patientId, date } = req.body;
    const appointment = new Appointment({ doctor: doctorId, patient: patientId, date });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all appointments (admin)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctor', 'name').populate('patient', 'name');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get appointments for a doctor
router.get('/doctor/:doctorId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctor: req.params.doctorId }).populate('patient', 'name');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get appointments for a patient
router.get('/patient/:patientId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.params.patientId }).populate('doctor', 'name');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update appointment status
router.put('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
