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

module.exports = {
  agregarCategoria,
  Categorias,
};
