const { Router } = require("express");
const { m } = require("framer-motion");
const route = Router();
const {
  getPeliculas,
  getContenido,
  getDetalleContenido,
  getFullContenido,
  eliminarContenido,
  agregarPelicula,
  editarPelicula,
} = require("../controllers/contenidoCategoriasController");
route.get("/", getPeliculas);
route.get("/filtrarContenido/:categoria", getContenido);
route.get("/getFullContenido/:categoria", getFullContenido);
route.get("/verDetalle/:detalleId", getDetalleContenido);
route.post("/agregarPelicula", agregarPelicula);
route.delete("/eliminar/:id", eliminarContenido);
route.patch("/editarPelicula/:id", editarPelicula);
module.exports = route;
