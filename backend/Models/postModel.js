const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    author: {
        type: String
    },
    
    postType: {
        type: String
    },

    body: {
        type: String
    },

    uid: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)