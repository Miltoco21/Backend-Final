const express = require ('express');
const router = express.Router();
const { agregarCategoria, Categorias ,eliminarCategoria} = require('../controllers/categoriasController');

router.get('/getCategorias', Categorias);
router.post('/agregarCategoria', agregarCategoria);
router.delete('/eliminarCategoria/:id', eliminarCategoria)



module.exports = router