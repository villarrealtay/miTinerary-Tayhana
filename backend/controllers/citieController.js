const Citie = require('../models/Citie')

const citieController = {
    listarCities: async (req, res) => {
        // Pedirle a la base de datos la lista de ciudades
        const lista = await Citie.find()
        // Devolver al front end la lista de ciudades de la base de datos
        res.json({
            success: true,
            cities: lista
        })
    },

    nuevaCitie: (req, res) => {
        // Abro la petición que me llega del frontend y extraigo la información de la nueva ciudad
        const {ciudad, pais, foto} = req.body

      // Validar los datos, que sean correctos

      // Le pido a la base de datos que grabe esta nueva ciudad
      const nuevaCitie = new Citie({
          ciudad: ciudad,
          pais: pais,
          foto: foto
      })

      nuevaCitie.save()
      .then(user => {
          res.json({success: true, user: user})
      })
      .catch(error => {
          res.json({success: false, error: error})
      })
    }
}
module.exports = citieController