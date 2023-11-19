const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '10d'})
}

const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
}

const loginUser = async (req, res) => {
    try{
        const user = await User.login(req.body)

        const token = createToken(user._id)
        
        res.status(200).json({msg: `You are now logged in as ${user.name}`, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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
    createNewUser,
    loginUser
}