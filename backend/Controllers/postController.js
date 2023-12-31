const Post = require('../Models/postModel')
const path = require('path')
const fs = require('fs')
const ReviewPostStrategy = require('../Classes/ReviewStrategy')
const NormalPostStrategy = require('../Classes/NormalStrategy')

const createPost = async (req, res) => {
    try {
        const uid = req.user._id

        const reqBody = req.body

        const postType = reqBody.postType

        let postStrategy

        if(postType === 'review'){
            postStrategy = new ReviewPostStrategy()    
        } else {
            postStrategy = new NormalPostStrategy()
        }

        const rPost = await postStrategy.createPost(reqBody, req.user, req.files)

        res.status(200).json(rPost)
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