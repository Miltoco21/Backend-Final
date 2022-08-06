const { Schema, model } = require("mongoose");

const listContenido = Schema({
  id: Number,
  titulo: String,
  fecha: String,
  genero: [Schema.Types.Mixed],
  descripcion: String,
  categoria: {
    type: String,
    default: String,
    require: true,
  },
  poster: String,
});

const contenidoCategorias = model("contenidoCategorias", listContenido);

module.exports = contenidoCategorias;
