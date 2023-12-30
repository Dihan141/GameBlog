const express = require('express')
const { getUsers, createNewUser, protectedInfo, activateUserAccount} = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.get('/activate/:id', activateUserAccount)
router.post('/', createNewUser)
router.get('/testAuth', protect, protectedInfo)


module.exports = router