const router = require('express').Router();
let Patient = require('../models/patient_model');

// Get all patients
router.route('/').get((req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Create a new patient
router.route('/create').post((req, res) => {
    const { firstName, lastName, dateOfBirth, gender } = req.body;

    const newPatient = new Patient({
        firstName,
        lastName,
        dateOfBirth,
        gender
    });

    newPatient.save()
        .then(() => res.json(`Patient ${newPatient.firstName} ${newPatient.lastName} added!`))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;