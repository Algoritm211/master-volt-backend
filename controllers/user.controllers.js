const User = require('../models/User')
const consola = require('consola')

/**
 * Class which maintaining operation with user data
 */
class UserController {
  async writeUserDataToDB(req, res) {
    try {
      const { name, email, phone, message } = req.body
      const newUser = new User({
        name, email, phone, message
      })

      await newUser.save()
      return res.status(200).json({
        status: 'success',
        user: newUser,
      })
    } catch (error) {
      consola.error(error)
      return res.status(500).json({ message: 'Error. Can not write user data to db' })
    }
  }
}

module.exports = new UserController()