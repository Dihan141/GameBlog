const passport = require('../Config/passport')
const User = require('../Models/userModel')
const path = require('path')

const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
}

const loginUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: "/api/users/dashboard",
        failureRedirect: "/api/users/login",
        failureFlash: true
    })(req, res, next)
}

const logoutUser = async (req, res) => {
    req.logout((err) => {
        if (err) {
          res.json({ error: err });
        } else {
            res.json({msg: "User logged out"})
        }
    });
}

const getLoginPage = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'DemoPages', 'login.ejs')
    res.render(filePath)
}

const getDashboard = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'DemoPages', 'dashboard.ejs')
    res.render(filePath)
}

const createNewUser = async (req, res) => {
    try{
        const user = await User.signUp(req.body)

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const protectedInfo = async (req, res) => {

    try {
        const user = await User.findById(req.user)

        res.status(200).json({msg: `Congrats!! You uncovered ${user.name}'s secret`})
    } catch (error) {
        res.status(400).json({error: 'oops, try again!'})
    }
}

module.exports = {
    getUsers,
    createNewUser,
    loginUser,
    protectedInfo,
    getLoginPage,
    getDashboard,
    logoutUser
}