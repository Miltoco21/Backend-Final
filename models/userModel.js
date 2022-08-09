const { Schema, model } = require("mongoose");

const userSchema = Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "Usuario",
  },
});

module.exports = model("user", userSchema);
