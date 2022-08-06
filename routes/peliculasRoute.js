const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  peliculas,
  getCarousel
} = require("../controllers/peliculasController");

route.get("/getPeliculas", peliculas);
route.get("/", getPeliculas);
route.get("/getCarousel", getCarousel);

module.exports = route;
