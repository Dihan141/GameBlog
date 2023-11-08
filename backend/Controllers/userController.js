const User = require('../Models/userModel')

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

module.exports = {
    getUsers,
    createNewUser
}