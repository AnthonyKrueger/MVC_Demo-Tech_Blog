const router = require('express').Router()
const { Comment } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body)
        res.status(200).json(newComment)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Comment.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: 'Comment Deleted'})
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;