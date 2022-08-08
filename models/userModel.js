const { Schema, model } = require("mongoose");

const userSchema = Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  role:String
});

module.exports = model("user", userSchema);
