const express = require('express')
const router = express.Router()

class UsersRouter {
  constructor (controller) {
    this.controller = controller
  }

  routes () {
    router.get('/test', this.controller.testRoute.bind(this.controller))
    router.post('/signUp', this.controller.signUp.bind(this.controller))

    return router
  }
}

module.exports = UsersRouter
