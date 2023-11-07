const User = require('../Models/userModel')

const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
}

const createNewUser = async (req, res) => {
    const { name, email } = req.body

    const user = new User({
        name,
        email
    })

    user.save()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports = {
    getUsers,
    createNewUser
}