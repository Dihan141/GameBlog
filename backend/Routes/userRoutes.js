const express = require('express')
const { getUsers, createNewUser, protectedInfo, mailTest} = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.get('/testAuth', protect, protectedInfo)

router.get('/mail-test', mailTest)

module.exports = router