const express = require('express')
const { getUsers, createNewUser, loginUser } = require('../Controllers/userController')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.post('/login', loginUser)

module.exports = router