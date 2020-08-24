const mongoose = require('mongoose')

const citieSchema = new mongoose.Schema({
    ciudad: {type: String, required: true},
    pais: {type: String, required: true},
    foto: {type: String, required: true}
})

const Citie = mongoose.model('citie', citieSchema)

module.exports = Citie