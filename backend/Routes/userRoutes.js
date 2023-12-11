const express = require('express')
const { getUsers, createNewUser, protectedInfo} = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.get('/testAuth', protect, protectedInfo)

module.exports = router