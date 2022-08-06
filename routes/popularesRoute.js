const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  peliculas,
  getCarousel,
} = require("../controllers/popularesController");

route.get("/getPeliculas", peliculas);
route.get("/", getPeliculas);
module.exports = route;
