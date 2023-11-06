const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get all users"})
}

const createNewUser = async (req, res) => {
    const { name } = req.body
    res.status(200).json({msg: `user ${name} has been created`})
}

module.exports = {
    getUsers,
    createNewUser
}