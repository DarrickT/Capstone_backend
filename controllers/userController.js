const BaseCtonroller = require('./baseController')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UsersController extends BaseCtonroller {
  constructor (model) {
    super(model)
  }

  async signUp (req, res) {
    //taking in the data from req.body fields thus, const name, email, password
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ sucess: false, msg: 'you have some missing information' })
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = await this.model.create({
        name,
        email,
        password: hashedPassword
      })

      const payload = { id: newUser.id, name: newUser.name }
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1hour'
      })

      return res.json({ success: true, token })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = UsersController
