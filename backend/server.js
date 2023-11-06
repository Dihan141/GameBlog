require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const app = express()

const userRoutes = require('./Routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})