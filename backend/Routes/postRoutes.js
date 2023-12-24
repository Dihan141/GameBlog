const express = require('express')
const protect = require('../Middlewares/authmiddleware')
const { createPost, getUsersPost, getAllPosts } = require('../Controllers/postController')
const router = express.Router()

router.post('/', protect, createPost)
router.get('/', protect, getUsersPost)
router.get('/all/', protect, getAllPosts)

module.exports = router