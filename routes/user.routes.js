const UserController = require('../controllers/user.controllers')
const Router = require('express')
const router = new Router()

router.post('/create', UserController.writeUserDataToDB)

module.exports = router