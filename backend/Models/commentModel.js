const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    author: {
        id: String,
        name: String,
        profilePic: String
    },

    referId: {
        type: String
    },

    image: {
        type: String
    },

    content: {
        type: String
    },

    likeCount: {
        type: Number,
        default: 0
    },

    commentCount: {
        type: Number,
        default: 0
    },

    pid: {
        type: String
    }

},{
    timestamps: true
})

commentSchema.pre('remove', async function (next) {
    try {
        const Comment = this.model('Comment');

        await Comment.deleteMany({ referId: this._id });

        if (this.pid) {
            const parentComment = await Comment.findById(this.referId);
            if (parentComment) {
                parentComment.commentCount -= 1;
                await parentComment.save();
            }
        }

        const post = await Post.findById(this.referId);
        if (post) {
            post.commentCount -= 1;
            await post.save();
        }

        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Comment', commentSchema)