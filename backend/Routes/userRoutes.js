const express = require('express')
const { getUsers, createNewUser, loginUser, protectedInfo, getLoginPage, getDashboard, logoutUser } = require('../Controllers/userController')
const protect = require('../Middlewares/authmiddleware')
const router = express.Router()

router.get('/', getUsers)
router.post('/', createNewUser)
router.post('/login', loginUser)
router.post('/testAuth', protect, protectedInfo)

router.get('/login', getLoginPage)
router.get('/dashboard', protect, getDashboard)
router.get('/logout', logoutUser)

module.exports = router