const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  peliculas,
  getCarousel,
  buscarYEditar
} = require("../controllers/peliculasController");

route.get("/getPeliculas", peliculas);
route.get("/", getPeliculas);
route.get("/getCarousel", getCarousel);
route.get("/getEdit", buscarYEditar);

module.exports = route;
