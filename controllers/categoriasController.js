const Categoria = require("../Models/categoriasModel");

const Categorias = async (req, res) => {
  const categorias = await Categoria.find({});
  try {
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json("error");
  }
};

const agregarCategoria = async (req, res) => {
  const { name, id } = req.body;
  try {
    const categoria = new Categoria({
      name: name,
      id: id,
    });
    const nuevaCategoria = await categoria.save();
    res.status(201).json("La categoria se ha creado exitosamente");
  } catch (error) {
    res.status(400).json(error);
  }
};
const eliminarCategoria = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const existeCategoria = await Categoria.findById(id);
    if (existeCategoria) {
      res.status(200).json("Categoria eliminada");
      const resultado = await Categoria.findByIdAndRemove(id);
    } else {
      return res.status(400).json("La categoria no existe");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  agregarCategoria,
  Categorias,
  eliminarCategoria,
};
