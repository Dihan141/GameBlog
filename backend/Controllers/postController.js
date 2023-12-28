const Post = require('../Models/postModel')
const path = require('path')
const fs = require('fs')

const createPost = async (req, res) => {
    try {
        const uid = req.user._id

        const { postType, body } = req.body

        const imageUrls = req.files['image'].map(image => image.filename)

        const videoUrls = req.files['video'].map((video) => {
            newName = video.filename + '.mp4'
            newUrl = path.join('Uploads', 'postImage', newName)
            fs.renameSync(video.path, newUrl)
            return newName
        })

        if(!postType){
            return res.status(400).json({msg: 'post type is required'})
        }

        if(!body){
            return res.status(400).json({msg: 'post body is required'})
        }

        const post = await Post.create({
            author: req.user.name,
            postType,
            body,
            uid,
            images: imageUrls,
            videos: videoUrls
        })
        
        res.status(200).json(post)
    } catch (error){
        res.status(400).json({msg: error})
    }
}

const getUsersPost = async(req, res) => {
    try {
        const uid = req.user._id

        const post = await Post.find({ uid })
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({msg: error})
    }
}

const getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find()

        res.status(200).json(posts)
    } catch(error){
        res.status(400).json({msg: error})
    }
}

module.exports = {
    createPost,
    getUsersPost,
    getAllPosts,
}