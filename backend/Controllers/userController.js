const passport = require('../Config/passport')
const User = require('../Models/userModel')
const path = require('path')

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

module.exports = {
    getUsers,
    createNewUser,
    protectedInfo,
}