const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/NeuroDb';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

// Define the Patient schema and model
const patientSchema = new mongoose.Schema({
  PhoneNumber: String,
  FullName: String,
  Birthday: Date,
  Email: String,
  PatientsAddress: String,
  Profession: String,
  FlowStatus: String
}, { collection: 'Patients' });

const Patient = mongoose.model('Patient', patientSchema);

// Define the PatientsHistory schema and model
const patientsHistorySchema = new mongoose.Schema({
  ID: Number,
  NoteContent: String,
  DoctorID: Number,
  PatientPhoneNumber: String
}, { collection: 'PatientsHistory' });

const PatientsHistory = mongoose.model('PatientsHistory', patientsHistorySchema);

// Define the Doctors schema and model
const doctorsSchema = new mongoose.Schema({
  ID: Number,
  FullName: String,
  Speciality: String
}, { collection: 'Doctors' });

const Doctor = mongoose.model('Doctor', doctorsSchema);

// Route to get all patients with optional filters
app.get('/get/patients', async (req, res) => {
  try {
    const query = {};
    if (req.query.PhoneNumber) query.PhoneNumber = req.query.PhoneNumber;
    if (req.query.FullName) query.FullName = { $regex: req.query.FullName, $options: 'i' };
    if (req.query.Birthday) query.Birthday = new Date(req.query.Birthday);
    if (req.query.Email) query.Email = req.query.Email;
    if (req.query.PatientsAddress) query.PatientsAddress = { $regex: req.query.PatientsAddress, $options: 'i' };
    if (req.query.Profession) query.Profession = { $regex: req.query.Profession, $options: 'i' };
    if (req.query.FlowStatus) query.FlowStatus = req.query.FlowStatus;

    const patients = await Patient.find(query);
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all patients' history with optional filters
app.get('/get/patientshistory', async (req, res) => {
  try {
    const query = {};
    if (req.query.ID) query.ID = Number(req.query.ID);
    if (req.query.NoteContent) query.NoteContent = { $regex: req.query.NoteContent, $options: 'i' };
    if (req.query.DoctorID) query.DoctorID = Number(req.query.DoctorID);
    if (req.query.PatientPhoneNumber) query.PatientPhoneNumber = req.query.PatientPhoneNumber;

    const patientsHistory = await PatientsHistory.find(query);
    res.json(patientsHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all doctors with optional filters
app.get('/get/doctors', async (req, res) => {
  try {
    const query = {};
    if (req.query.ID) query.ID = Number(req.query.ID);
    if (req.query.FullName) query.FullName = { $regex: req.query.FullName, $options: 'i' };
    if (req.query.Speciality) query.Speciality = { $regex: req.query.Speciality, $options: 'i' };

    const doctors = await Doctor.find(query);
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to insert a new row in PatientsHistory
app.post('/insert/patientshistory', async (req, res) => {
  const { ID, NoteContent, DoctorID, PatientPhoneNumber } = req.body;
  console.log(req.body);
  // Validation: Check for required fields
  if (ID == null || NoteContent == null || DoctorID == null || PatientPhoneNumber == null) {
    return res.status(400).json({ message: 'ID, NoteContent, DoctorID, and PatientPhoneNumber are required.' });
  }

  const newPatientsHistory = new PatientsHistory(req.body);

  try {
    const savedPatientsHistory = await newPatientsHistory.save();
    res.status(201).json(savedPatientsHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
