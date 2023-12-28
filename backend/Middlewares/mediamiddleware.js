const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const path = require('path')

const fileFilter = (req, file, done)=> {
    const allowedType = ["image/jpeg", "image/jpg", "image/png"]

    if(allowedType.includes(file.mimetype)){
        done(null, true)
    } else {
        done(null, false)
    }
}

const profileImage = multer.diskStorage({
    destination: function(req, file, done){
        done(null, "Uploads/profileImage")
    },
    filename: function(req, file, done){
        done(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname))
    }
})

const uploadProfileImage = multer({
    storage: profileImage,
    fileFilter
})

const postVideoImageFile = multer.diskStorage({
    destination: function(req, file, done){
        done(null, "Uploads/postImage")
    },
    filename: function(req, file, done){
        done(null, uuidv4() + "-" + Date.now() + file.originalname)
    }
})

const uploadVideoImage = multer({
    storage: postVideoImageFile
})

module.exports = {
    uploadProfileImage,
    uploadVideoImage
}