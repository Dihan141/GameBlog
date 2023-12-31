const Post = require('../Models/postModel')
const fs = require('fs')
const path = require('path')

class NormalPostStrategy{
    async createPost ( attributes, user, media ) {
        const { body } = attributes

        const { image, video } = media

        const { _id, name } = user
        
        const imageUrls = image.map(image => image.filename)
    
        const videoUrls = video.map((video) => {
            const newName = video.filename + '.mp4'
            const newUrl = path.join('Uploads', 'postImage', newName)
            fs.renameSync(video.path, newUrl)
            return newName
        })

        let imgCount = 0 , vidCount = 0

        if(imageUrls)
            imgCount = imageUrls.length
        if(videoUrls)
            vidCount = videoUrls.length

        const normalPost = await Post.create({
            postType: 'normal',
            author: name,
            uid: _id,
            imgCount,
            vidCount,
            images: imageUrls,
            videos: videoUrls
        })

        return normalPost
    }
}

module.exports = NormalPostStrategy