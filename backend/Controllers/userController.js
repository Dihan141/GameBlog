const passport = require('../Config/passport')
const User = require('../Models/userModel')
const path = require('path')
const mailTransporter = require('../Config/mailer')

const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
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
        res.status(200).json({msg: `Congrats!! You uncovered ${req.user.name}'s secret`})
    } catch (error) {
        res.status(400).json({error: 'oops, try again!'})
    }
}

const mailTest = async (req, res) => {
    try {
        const mailDetails = {
            from: process.env.GMAIL,
            to: 'nazmulhossain@iut-dhaka.edu',
            subject: 'testing',
            text: 'GameBlogs first mail. Yayyyy... Anyway, fak you NM'
        }
        
        mailTransporter.sendMail(mailDetails, (err, info) => {
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers,
    createNewUser,
    protectedInfo,
    mailTest,
}