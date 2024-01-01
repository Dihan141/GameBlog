const Like = require('../Models/likeModel')
const Comment = require('../Models/commentModel')
const Post = require('../Models/postModel')

const postLike = async (req, res) => {
    try {
        const refId = req.params.id

        let referObj = await Post.findById( refId )

        if(!referObj){
            referObj = await Comment.findById( refId )
        }

        const likeExists = await Like.findOne({ 'author.id': req.user._id, referId: refId })

        if(likeExists){
            await Like.deleteOne({ 'author.id': req.user._id, referId: refId })
            referObj.likeCount -= 1
            await referObj.save()
            return res.status(200).json({msg: 'Like removed'})
        }

        referObj.likeCount += 1

        await referObj.save()

        const author = {
            id: req.user._id,
            name: req.user.name,
            profilePic: req.user.profilePic
        }

        const like = await Like.create({
            author,
            referId: refId
        })

        res.status(200).json(like)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const postComment = async (req, res) => {
    try {
        const refId = req.params.id
        const pid = req.params.pid

        let referObj = await Post.findById( refId )

        if(!referObj){
            referObj = await Comment.findById( refId )
        }

        const { content } = req.body

        let imageUrl

        if(req.file){
            imageUrl = req.file.filename
        }

        let post = await Post.findById( pid )
        post.commentCount += 1
        await post.save()

        referObj.commentCount += 1
        await referObj.save()

        const author = {
            id: req.user._id,
            name: req.user.name,
            profilePic: req.user.profilePic
        }

        const comment = await Comment.create({
            author,
            referId: refId,
            image: imageUrl,
            content,
            pid
        })

        res.status(200).json(comment)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateComment = async (req, res) => {
    try {
        const id = req.params.id

        const { content } = req.body

        const comment = await Comment.findById( id )

        if(content)
            comment.content = content

        await comment.save()
        res.status(200).json({msg: 'Comment updated'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const getComments = async (req, res) => {
    try {
        const pid = req.params.id

        const comments = await Comment.find({ pid })

        res.status(200).json(comments)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.params.id

        const comment = await Comment.findById( id )

        const refId = comment.referId
        const pid = comment.pid

        if (pid == refId){
            const post = await Post.findById( pid )

            post.commentCount--
            await post.save()
            await Comment.deleteMany({ referId: id })
            await Comment.findByIdAndDelete( id )
            
            return res.status(200).json({msg: 'Comment deleted'})
        }

        const refComment = await Comment.findById( refId )
        refComment.commentCount--
        await refComment.save()

        const post = await Post.findOne({ _id: pid })
        post.commentCount--
        await post.save()

        await Comment.deleteMany({ referId: id })
        await Comment.findByIdAndDelete( id )

        res.status(200).json({msg: 'Comment deleted'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = {
    postLike,
    postComment,
    getComments,
    updateComment,
    deleteComment
}