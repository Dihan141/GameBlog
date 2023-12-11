require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const cors = require('cors')
const session = require('express-session')
const flash = require('express-flash')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./Routes/userRoutes')
const passport = require('./Config/passport')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.set('view-engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
  

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected to mongoDB'))
    .catch(err => console.log(err))

app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})