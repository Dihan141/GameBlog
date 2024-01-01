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
        
        let imageUrls, videoUrls
        
        if(image){
            imageUrls = image.map(image => image.filename)
        } 
        
        if(video){
            videoUrls = video.map((video) => {
                const newName = video.filename + '.mp4'
                const newUrl = path.join('Uploads', 'postImage', newName)
                fs.renameSync(video.path, newUrl)
                return newName
            })
        }

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

    async updatePost ( attributes, id, media) {
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

        let post = await Post.findById( id )
        let imageUrls, videoUrls
        
        if(image){
            imageUrls = image.map(image => image.filename)
        } 
        
        if(video){
            videoUrls = video.map((video) => {
                const newName = video.filename + '.mp4'
                const newUrl = path.join('Uploads', 'postImage', newName)
                fs.renameSync(video.path, newUrl)
                return newName
            })
        }

        let imgCount = 0 , vidCount = 0

        if(imageUrls)
            imgCount = imageUrls.length
        if(videoUrls)
            vidCount = videoUrls.length

        if(post.imgCount + imgCount > 10)
            throw Error(`Can't upload more than ${10 - post.imgCount} images`)

        if(post.vidCount + vidCount > 2)
            throw Error(`Can't upload more than ${2 - post.vidCount} videos`)

        if(imgCount){
            const images = imageUrls.map((image) => {
                post.images.push(image)
                post.imgCount++
            })
        }

        if(vidCount){
            const videos = videoUrls.map((video) => {
                post.videos.push(video)
                post.vidCount++
            })
        }

        if(body)
            post.body = body

        if(graphics)
            post.graphics = graphics

        if(story)
            post.story = story
            
        if(gameplay)
            post.gameplay = gameplay
            
        if(soundtracks)
            post.soundtracks = soundtracks
             
        if(difficulty)
            post.difficulty = difficulty
                        
        if(grind)
            post.grind = grind
                    
        if(gametime)
            post.gametime = gametime
                 
        if(bugs)
            post.bugs = bugs

        if(rating)
            post.rating = rating

        await post.save()
    }
}

module.exports = ReviewPostStrategy