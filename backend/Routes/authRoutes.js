const express = require('express')
const router = express.Router()
const { loginUser, getLoginPage, logoutUser, googleAuth, googleLogin, getDashboard } = require('../Controllers/authController')

//google auth routes
router.get('/google-auth', googleAuth)
router.get('/google-login', googleLogin)

//local auth routes
router.post('/login', loginUser)
router.get('/login', getLoginPage)
router.get('/logout', logoutUser)

router.get('/dashboard', getDashboard)

module.exports = router