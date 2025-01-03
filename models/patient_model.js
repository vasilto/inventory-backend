const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true }
}, {
    timestamps: true,
    collection: 'patients'
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;