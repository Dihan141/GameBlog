const express = require('express')
const { getUsers, createNewUser, loginUser, protectedInfo } = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.post('/login', loginUser)
router.post('/testAuth', protect, protectedInfo)

module.exports = router