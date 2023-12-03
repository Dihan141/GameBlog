const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const passport = require('passport')

function initialize(passport){
    const authenticateUser = async (email, password, done) => {
        try {
            if(!email || !password)
                return done(null, false, { message: 'All fields must be filled.' })

            const user = await User.findOne({ email })

            if(!user)
                return done(null, false, { message: 'User not found.' })

            const passMatch = await bcrypt.compare(password, user.password)

            if(!passMatch)
                return done(null, false, { message: 'Invalid credentials.' })

            return done(null, user)
        } catch(error) {
            console.log(error)
            done(error)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))

    passport.serializeUser((user, done) => {
        done(null, user._id) })
    passport.deserializeUser((_id, done) => {
        User.findById(_id)
        .then((user) => {
            done(null, user) })
        .catch((err) => done(err, null))
    })
}


module.exports = initialize