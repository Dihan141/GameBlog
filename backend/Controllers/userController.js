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

        const mailDetails = {
            from: process.env.GMAIL,
            to: user.email,
            subject: 'Account activation',
            html: `<p> Hello ${user.name},</p>
            <p>Please click the link below to activate your account:</p>
            <a href=http://localhost:5000/api/users/activate/${user._id}
            style="display: inline-block; 
            padding: 10px 20px; 
            background-color: #4CAF50; 
            color: white; 
            text-decoration: none; 
            border-radius: 5px;"
            >Activate Account</a>`
        } 

        mailTransporter.sendMail(mailDetails, (err, info) => {
            if(err){
                console.log(err)
            } else {
                console.log('Mail sent!')
            }
        })

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

const activateUserAccount = async (req, res) => {
    try {
        const id = req.params.id

        await User.findByIdAndUpdate(id, { verified: true})
        res.status(200).json({msg: 'Your account has been activated.'})
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getUsers,
    createNewUser,
    protectedInfo,
    activateUserAccount,
}