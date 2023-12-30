const passport = require('../Config/passport')
const path = require('path')

// const loginUser = (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: "http://localhost:3000/dashboard",
//         failureRedirect: "/api/auth/login",
//         failureFlash: true
//     })(req, res, next)
// }

const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info ) => {
        if (err) {
            console.error('Authentication error:', err);
            return res.status(500).json({ error: 'Authentication error' });
        }
      
        if (!user) {
            console.log('Authentication failed:', info.message);
            return res.status(401).json({ error: info.message });
        }
        res.status(200).json({ message: 'Logged In' , User:user.name});
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
        successRedirect: "http://localhost:3000/dashboard",
        failureRedirect: "/api/auth/login",
        failureFlash: true
    })(req, res, next)
}

// const googleAuth = (req, res, next) => {
//     passport.authenticate('google', (err, user, info ) => {
//         if (err) {
//             console.error('Authentication error:', err);
//             return res.status(500).json({ error: 'Authentication error' });
//         }
      
//         if (!user) {
//             console.log('Authentication failed:', info.message);
//             return res.status(401).json({ error: info.message });
//         }
//         res.status(200).json({ message: 'Logged In' , User:user.name});
//     })(req, res, next)
// }

const getLoginPage = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'Public', 'login.ejs')
    res.render(filePath)
    // res.status(400).json({msg: 'login failure'})
}

const getDashboard = async (req, res) => {
    const filePath = path.join(__dirname, '..', 'Public', 'dashboard.ejs')
    const user = req.user

    console.log(user)

    if(user.verified)
        res.status(200).json({msg: 'login success'})
    else{
        res.status(400).json({msg: 'Your account is not verified'})
    }
}

const getAuthStatus = async (req, res) => {
    if(req.user)
        return res.status(200).json(req.user)
    
    return res.status(400).json({msg: 'Not logged in'})
}

module.exports = {
    loginUser,
    getLoginPage,
    getDashboard,
    logoutUser,
    googleLogin,
    googleAuth,
    getAuthStatus,
}