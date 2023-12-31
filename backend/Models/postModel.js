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
    },

    imgCount: {
        type: Number,
        default: 0
    },

    images: {
        type: [String] 
    },

    vidCount: {
        type: Number,
        default: 0
    },

    videos: {
        type: [String]
    },

    //review section
    graphics: {
        type: String
    },

    story: {
        type: String
    },

    gameplay: {
        type: String
    },

    soundtracks: {
        type: String
    },

    difficulty: {
        type: String
    },

    grind: {
        type: String
    },

    gametime: {
        type: String
    },

    bugs: {
        type: String
    },

    rating: {
        type: String
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)