const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const passport = require('passport')

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

//google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/google-auth"
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
        console.log(profile)
        const user = await User.findOne({ googleId: profile.id})

        if(user){
            return done(null, user)
        }

        const mailExists = await User.findOne({ email: profile.emails[0].value})

        if(mailExists){
            return done(null, false, { message: 'User already exists with this email.' })
        }

        const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            verified: true
        })

        await newUser.save()
        done(null, newUser)
    } catch(error) {
        console.log(error)
        done(error)
    }
  }
))

passport.serializeUser((user, done) => {
    done(null, user._id) })
passport.deserializeUser((_id, done) => {
    User.findById(_id).select('-password')
    .then((user) => {
        done(null, user) })
    .catch((err) => done(err, null))
})


module.exports = passport