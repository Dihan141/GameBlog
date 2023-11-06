const express = require('express')
const { getUsers, createNewUser } = require('../Controllers/userController')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)

module.exports = router