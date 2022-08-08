const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  getContenido,
  getDetalleContenido,
  getFullContenido,
} = require("../controllers/contenidoCategoriasController");
route.get("/", getPeliculas);
route.get("/filtrarContenido/:categoria", getContenido);
route.get("/getFullContenido/:categoria", getFullContenido);
route.get("/verDetalle/:detalleId", getDetalleContenido);
module.exports = route;
