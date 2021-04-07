const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const con = mongoose.connection;
con.once('open', () => {
    console.log(`MongoDB connection established succesfully... yeeeey`)
})

const medicaments = require('./routes/medicaments_routes');
app.use('/medicaments', medicaments);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})