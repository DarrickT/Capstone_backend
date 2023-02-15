const express = require('express')
const cors = require('cors')
require('dotenv').config()
//import models
const db = require('./models/index.js')

// import controllers
const UsersController = require('./controllers/userController')
const ClientsController = require('./controllers/clientsController')

//initializing controller
const usersController = new UsersController(db.users)
const clientsController = new ClientsController(db.clients)

// import routers
const UsersRouter = require('./routers/usersRouter')
const ClientsRouter = require('./routers/clientsRouter')

// intialise routers
const usersRouter = new UsersRouter(usersController).routes()
const clientsRouter = new ClientsRouter(clientsController).routes()

//Putting express together
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', usersRouter)
app.use('/clients', clientsRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
