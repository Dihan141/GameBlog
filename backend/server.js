require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./Routes/userRoutes')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Connected to mongoDB'))
.catch(err => console.log(err))

app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})