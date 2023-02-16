const express = require('express')
const router = express.Router()

class ClientsRouter {
  constructor (controller) {
    this.controller = controller
  }

  routes () {
    router.get('/test', this.controller.testRoute.bind(this.controller))
    router.get(
      '/allClients',
      this.controller.getAllClients.bind(this.controller)
    )
    router.post('/addClient', this.controller.addClient.bind(this.controller))
    router.delete(
      '/deleteClient/:id',
      this.controller.deleteClient.bind(this.controller)
    )
    router.put(
      '/editClient/:id',
      this.controller.editClient.bind(this.controller)
    )
    return router
  }
}

module.exports = ClientsRouter
