const passport = require('../Config/passport')
const path = require('path')

const loginUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: "/api/auth/dashboard",
        failureRedirect: "/api/auth/login",
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

//google auth
const googleLogin = (req, res, next) => {
    passport.authenticate('google', {scope: ['profile', 'email']})(req, res, next)
}

const googleAuth = (req, res, next) => {
    passport.authenticate('google', {
        successRedirect: "/api/auth/dashboard",
        failureRedirect: "/api/auth/login"
    })(req, res, next)
}

const getLoginPage = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'Public', 'login.ejs')
    res.render(filePath)
}

const getDashboard = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'Public', 'dashboard.ejs')
    const user = req.user
    res.render(filePath, { user })
}

module.exports = {
    loginUser,
    getLoginPage,
    getDashboard,
    logoutUser,
    googleLogin,
    googleAuth,
}