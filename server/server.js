const express = require('express')
const app = express()
const cors =  require('cors')
require('dotenv/config')
const morgan = require('morgan')
const port = process.env.PORT
require('../dataBase/connection')
const userRoutes = require('../routes/usersRoute')
const loginRoutes = require('../routes/loginRoutes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/registro', userRoutes)
app.use('/login',loginRoutes) 


app.listen(port, () => {
  console.log(`Estamos escuchando ell puerto ${port}`)
})

