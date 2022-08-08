const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const morgan = require("morgan");
const port = process.env.PORT;
require("../dataBase/connection");
// const popRoutes = require("../routes/popRoute");
// const proxRoutes = require("../routes/proxRoute");
// const mejorRoutes = require("../routes/mejorRoute");
// const tvRoutes = require("../routes/tvRoute");
const peliculasRoutes = require("../routes/peliculasRoute");
const peliculaByIdRoute = require("../routes/peliculaByIdRoute");
const categoriasRoutes = require('../routes/categoriasRoute')
const popularesRoute = require('../routes/popularesRoute')
const proximamenteRoute = require('../routes/proximamenteRoute')
const valoradasRoute = require('../routes/valoradasRoute')
const seriesTvRoute = require('../routes/seriesTvRoute')
const contenidoCategorias = require('../routes/contenidoCategoriasRoute')
const containerComentarios = require('../routes/comentariosRoute')

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/peliculas", peliculasRoutes);
app.use("/peliculasById", peliculaByIdRoute);
app.use('/categorias', categoriasRoutes)
app.use("/peliculasPopulares", popularesRoute);
app.use("/peliculasProximas", proximamenteRoute);
app.use("/peliculasValoradas", valoradasRoute);
app.use("/peliculasSeriesTv", seriesTvRoute);
app.use("/contenidoCategorias", contenidoCategorias);
app.use("/comentarios", containerComentarios);


app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
