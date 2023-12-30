const express = require('express')
const { getUsers, createNewUser, protectedInfo, activateUserAccount, getPasswordResetPage, sendPasswordResetMail, resetPassword} = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.get('/activate/:id', activateUserAccount)
router.post('/', createNewUser)
router.get('/testAuth', protect, protectedInfo)

router.get('/forgotpassword/:id', getPasswordResetPage)
router.post('/forgotpassword/:id', resetPassword)
router.post('/forgotpassword', sendPasswordResetMail)

module.exports = router