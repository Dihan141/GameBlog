const express = require('express')
const { postLike, postComment, getComments, updateComment, deleteComment } = require('../Controllers/interactionController')
const protect = require('../Middlewares/authmiddleware')
const { uploadCommentImage } = require('../Middlewares/mediamiddleware')

const router = express.Router()

router.get('/like/:id', protect, postLike)

router.post('/comment/:id/:pid', protect, uploadCommentImage.single('image'), postComment)
router.get('/comment/:id', protect, getComments)
router.put('/comment/:id', protect, updateComment)
router.delete('/comment/:id', protect, deleteComment)

module.exports = router