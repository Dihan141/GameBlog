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
        unique: true,
    },
    googleId: {
        type: String,
        unique: true,
    }
},{
    timestamps: true
})

//Static sign up function
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

//Static login function
// userSchema.statics.login = async function(body){
//     const {email, password} = body

//     if(!email || !password)
//         throw Error('All fields must be filled.')

//     const user = await this.findOne({ email })

//     if(!user)
//         throw Error('Invalid email!')

//     const passMatch = await bcrypt.compare(password, user.password)

//     if(!passMatch)
//         throw Error('Incorrect password!')
    
//     return user
// }

module.exports = mongoose.model('User', userSchema)