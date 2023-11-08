const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
})

userSchema.statics.signUp = async function(userObj){
    const { name, email, password } = userObj

    if(!name || !email || !password)
        throw Error('All fields must be filled.')
    
    if(!validator.isEmail(email))
        throw Error(`${email} is not a valid email`)
    
    if(!validator.isStrongPassword(password))
        throw Error('Password is weak')

    const emailExists = await this.findOne({ email })

    if(emailExists)
        throw Error('This email already exists.')
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await this.create({
        name,
        email,
        password: hashedPassword
    })

    return user
}

module.exports = mongoose.model('User', userSchema)