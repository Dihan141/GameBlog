const protect = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
    } else {
        res.status(404).json({msg: "Access denied!"})
    }
}

module.exports = protect