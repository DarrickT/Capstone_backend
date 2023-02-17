const clients = require('../models/clients')
const BaseCtonroller = require('./baseController')

class ClientsController extends BaseCtonroller {
  constructor (model) {
    super(model)
  }
  async getAllClients (_req, res) {
    try {
      const allClients = await this.model.findAll({
        // where: { userId: userId }
      })
      res.status(200).json(allClients)
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  //add new CLient
  async addClient (req, res) {
    const { fullName, date, email, subscriptionType, paymentAmount } = req.body

    //{
    //   "fullName":"Testing",
    //   "date":"2022/02/16",
    //   "email":"testing@gmail.com",
    //   "subscriptionType":"one time"
    //   "paymentAmount":120.00,
    // }

    try {
      const newClient = await this.model.create({
        fullName: fullName,
        date: date,
        email: email,
        subscriptionType: subscriptionType,
        paymentAmount: paymentAmount
      })

      res.status(200).json(newClient)
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  //delete Client
  async deleteClient (req, res) {
    let id = req.params.id
    await this.model.findByPk(id)
    if (!id) {
      return res.status(404).json({ error: 'no such client exist' })
    }
    try {
      await this.model.destroy({
        where: { id }
      })
      let data = await this.model.findAll()
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  async editClient (req, res) {
    const { fullName, email, date, subscriptionType, paymentAmount } = req.body
    let clientsId = req.params.id

    try {
      let editedClient = await this.model.findByPk(clientsId)
      if (editedClient) {
        await editedClient.update({
          fullName: fullName,
          date: date,
          email: email,
          subscriptionType: subscriptionType,
          paymentAmount: paymentAmount
        })
      }
      editedClient = await this.model.findByPk(clientsId)
      return res.json(editedClient)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error })
    }
  }
}

module.exports = ClientsController
