const express = require ('express');
const router = express.Router();
const { agregarCategoria, Categorias } = require('../controllers/categoriasController');

router.get('/getCategorias', Categorias);
router.post('/agregarCategoria', agregarCategoria);



module.exports = router