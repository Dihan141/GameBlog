const express = require('express')
const { getUsers, createNewUser, loginUser, protectedInfo, getLoginPage, getDashboard, logoutUser, googleAuth, googleLogin } = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.post('/login', loginUser)
router.get('/testAuth', protect, protectedInfo)

router.get('/login', getLoginPage)
router.get('/dashboard', protect, getDashboard)
router.get('/logout', logoutUser)

//google authentication routes
router.get('/google-auth', googleAuth)
router.get('/google-login', googleLogin)

module.exports = router