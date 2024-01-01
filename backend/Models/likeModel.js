const mongoose = require('mongoose')

const Schema = mongoose.Schema

const likeSchema = new Schema({
    author: {
        id: String,
        name: String,
        profilePic: String
    },

    referId: {
        type: String
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Like', likeSchema)