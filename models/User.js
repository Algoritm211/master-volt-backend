const { Schema, model } = require('mongoose')

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
})


module.exports = model('User', User)