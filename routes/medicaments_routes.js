const router = require('express').Router();
const { findById } = require('../models/medicaments_model');
let Medicaments = require('../models/medicaments_model');

//Get all medicaments in the database
router.route("/").get((req, res) => {
    Medicaments.find()
        .then(medicaments => res.json(medicaments))
        .catch(err => res.status(400).json(`Error ${err}`));
})

//Create new medicament in the database
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const manufacturer = req.body.manufacturer;
    const description = req.body.description;
    const type = req.body.type;
    const category = req.body.category;
    const expirationDate = req.body.expirationDate;
    const doesExpireAfterOpen = req.body.doesExpireAfterOpen;
    const expirationDateAfterOpen = req.body.expirationDateAfterOpen;
    const isRunningOut = req.body.isRunningOut;
    const isAvailable = req.body.isAvailable;

    const newMedicament = new Medicaments({
        name,
        manufacturer,
        description,
        type,
        category,
        expirationDate,
        doesExpireAfterOpen,
        expirationDateAfterOpen,
        isRunningOut,
        isAvailable
    });

    newMedicament.save()
        .then(() => res.json(`Medicament with name: ${newMedicament.name} was added`))
        .catch(err => res.status(400).json(`Error ${err}`));
})

//Delete medicament in the databe using objectId
router.route("/delete/:id").delete((req, res) => {
    var medicineName;
    Medicaments.findById(req.params.id).lean().
        then( res =>{
            medicineName = res.name;
        });
    Medicaments.findByIdAndDelete(req.params.id)
        .then( () => res.json(`Medicament with name: ${medicineName} was deleted`))
        .catch( err => res.status(400).json(`Error ${err}`));
});

module.exports = router;