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
        res.status(400).json({msg: error.message})
    }
}

const updatePost = async (req, res) => {
    try {
        const { postType } = req.body

        const id = req.params.id

        let postStrategy
        console.log(req.user)
        console.log(req.body)

        if(postType === 'review'){
            postStrategy = new ReviewPostStrategy()
        } else {
            postStrategy = new NormalPostStrategy()
        }

        await postStrategy.updatePost( req.body, id, req.files)
        res.status(200).json({msg: 'Post updated'})
    } catch (error){
        res.status(400).json({msg: error.message})
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id

        await Post.findByIdAndDelete( id )

        res.status(200).json({msg: 'Post deleted'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const getUsersPost = async(req, res) => {
    try {
        const uid = req.user._id

        const post = await Post.find({ uid })
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({msg: error.message})
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
    updatePost,
    deletePost
}