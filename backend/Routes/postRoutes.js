const express = require('express')
const protect = require('../Middlewares/authmiddleware')
const { createPost, getUsersPost, getAllPosts } = require('../Controllers/postController')
const { uploadVideoImage } = require('../Middlewares/mediamiddleware')
const router = express.Router()

router.post('/', protect, uploadVideoImage.fields([
    {name: 'image', maxCount: 10},
    {name: 'video', maxCount: 2}
]), createPost)
router.get('/', protect, getUsersPost)
router.get('/all/', protect, getAllPosts)

module.exports = router