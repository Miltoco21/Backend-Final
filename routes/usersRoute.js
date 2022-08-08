const { Router } = require('express')
const route = Router()
const { getUsers, createUser ,deleteuserById} = require('../controllers/userController')
const { body } =require('express-validator')
const { emailExist } = require('../helpers/validation')
const { jwtValidation }= require('../middleware/jwtValidation')


route.get('/',jwtValidation ,getUsers)

route.delete('/:id',jwtValidation,deleteuserById)

route.post('/',
 body('email').not().isEmpty().withMessage("El correo es obligatorio").isEmail().withMessage(
   "ingresa un correo valido"
 ),
 body('password').matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).withMessage('La contrasena no cumple requisitos')

,createUser)



module.exports = route
