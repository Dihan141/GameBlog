const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '10d'})
}

const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
}

const createNewUser = async (req, res) => {
    try{
        const user = await User.signUp(req.body)

        const token = createToken(user._id)
        res.status(200).json({user,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUsers,
    createNewUser
}