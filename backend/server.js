require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const cors = require('cors')
const session = require('express-session')
const flash = require('express-flash')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const userRoutes = require('./Routes/userRoutes')
const authRoutes = require('./Routes/authRoutes')
const postRoutes = require('./Routes/postRoutes')
const interactionRoutes = require('./Routes/interactionRoutes')
const passport = require('./Config/passport')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'Public')))
app.set('view-engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
  

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected to mongoDB'))
    .catch(err => console.log(err))

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/interactions', interactionRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})