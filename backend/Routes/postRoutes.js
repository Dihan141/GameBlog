const express = require('express')
const protect = require('../Middlewares/authmiddleware')
const { createPost, getUsersPost, getAllPosts, updatePost, deletePost } = require('../Controllers/postController')
const { uploadVideoImage } = require('../Middlewares/mediamiddleware')
const router = express.Router()

router.post('/', protect, uploadVideoImage.fields([
    {name: 'image', maxCount: 10},
    {name: 'video', maxCount: 2}
]), createPost)

router.put('/update/:id', protect, uploadVideoImage.fields([
    {name: 'image', maxCount: 10},
    {name: 'video', maxCount: 2}
]), updatePost)

router.delete('/delete/:id', protect, deletePost)
router.get('/', protect, getUsersPost)
router.get('/all', getAllPosts)

module.exports = router