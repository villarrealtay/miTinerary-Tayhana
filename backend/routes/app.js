const express = require('express')
const rutas = express.Router()
const citieController = require('../controllers/citieController')

rutas.route('/Cities')
.get(citieController.listarCities)
.post(citieController.nuevaCitie)

module.exports = rutas