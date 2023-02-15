const clients = require('../models/clients')
const BaseCtonroller = require('./baseController')

class ClientsController extends BaseCtonroller {
  constructor (model) {
    super(model)
  }
  async getAllClients (req, res) {
    const { userId } = req.params
    try {
      const allClients = await clients.findAll({
        where: { user_id: userId }
      })
      res.status(200).json(allClients)
    } catch (err) {
      res.status(400).json({ err: err.message })
    }
  }

  //add new CLient
  async addClient (req, res) {
    const {
      fullName,
      contact,
      email,
      subscription_type,
      amount_spent,
      userId
    } = req.body

    try {
      const newClient = await this.model.create({
        fullName: fullName,
        contact: contact,
        email: email,
        subscription_type: subscription_type,
        amount_spent: amount_spent,
        userId: userId
      })

      res.status(200).json(newClient)
    } catch (error) {
      res.status(400).json({ error })
    }
  }
  // async editClient (req,res){
  //   const {clientId} = req.params
  //   const { fullName, contact, email, subscription_type, amount_spent } = req.body;

  //   try {
  //     let editedClient = await this.model.findByPk(clientId);
  //     if(editedClient){
  //       await editedClient.update({
  //         fullName: fullName,
  //         contact: contact,
  //         email: email,
  //         subscription_type: subscription_type,
  //         amount_spent: amount_spent

  //       })
  //     }
  //   }

  // }
}

module.exports = ClientsController
