const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicamentsSchema = new Schema({
    name: {type: String, required: true},
    manufacturer: {type: String, required: false},
    description: {type: String, required: false},
    type: {type: String, required: false},
    category: {type: String, required: false},
    expirationDate: {type: Date, required: true},
    doesExpireAfterOpen: {type: Boolean, required: true},
    expirationDateAfterOpen: {type: Date, required: false},
    isRunningOut: {type:Boolean, required: false},
    isAvailable:{type:Boolean, required: true},
}, {
    timestamps: true,
});

const Medicaments = mongoose.model('Medicaments', medicamentsSchema);

function findSingleMedicament(medicamentName) {
    return Medicaments.findOne({name:medicamentName}).exec();    
}

module.exports = Medicaments;

