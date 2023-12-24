const Post = require('../Models/postModel')

const createPost = async (req, res) => {
    try {
        const uid = req.user._id

        const { postType, body } = req.body

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
            uid
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