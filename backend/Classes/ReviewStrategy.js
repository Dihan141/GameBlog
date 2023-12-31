const Post = require('../Models/postModel')
const fs = require('fs')
const path = require('path')

class ReviewPostStrategy {
    async createPost( attributes, user, media ) {

        const { 
                body,
                graphics, 
                story,
                gameplay,
                soundtracks,
                difficulty,
                grind,
                gametime,
                bugs,
                rating,
        } = attributes

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

        const reviewPost = await Post.create({
            postType: 'review',
            author: name,
            body,
            graphics, 
            story,
            gameplay,
            soundtracks,
            difficulty,
            grind,
            gametime,
            bugs,
            rating,
            uid: _id,
            imgCount,
            vidCount,
            images: imageUrls,
            videos: videoUrls
        })

        return reviewPost
    }
}

module.exports = ReviewPostStrategy