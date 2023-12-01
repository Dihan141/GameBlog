const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).json({error: 'Authorization required.'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { user } = jwt.verify(token, process.env.JWT_SECRET)

        req.user = user;
        next()
    } catch( error ){
        res.status(401).json({error: 'User is not authorized.'})
    }
}

module.exports = protect