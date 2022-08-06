const axios = require("axios");
const contenidoCategorias = require("../models/contenidoCategoriasModel");

const getPeliculas = async (req, res) => {
  try {
    const result = await contenidoCategorias.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getDetalleContenido = async (req, res) => {
  const { detalleId } = req.params;
  try {
    const result = await contenidoCategorias.findOne({ id: detalleId });
    // .sort("-puntaje").limit(5);
    if (result !== null) {
      res.status(200).json(result);
    } else {
      res.status(404).json("no se encontro la pelicula");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getContenido = async (req, res) => {
  try {
    const { categoria } = req.params;
    const juegos = await contenidoCategorias
      .find({ categoria })
      .sort("name")
      .limit(5);
    res.status(200).json(juegos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getFullContenido = async (req, res) => {
  try {
    const { categoria } = req.params;
    const juegos = await contenidoCategorias.find({ categoria }).sort("categoria");
    res.status(200).json(juegos);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getPeliculas,
  getContenido,
  getDetalleContenido,
  getFullContenido,
};
