const router = require('express').Router()
const { Comment, User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        if (!req.session.userId) {
            res.status(404).json({message: "Login First"});
            return;
          }
            const postingUser = await User.findByPk(req.session.userId)
            const newComment = await Comment.create({
                text: req.body.text,
                username: postingUser.username,
                userId: req.session.userId,
                postId: req.body.postId
            })
            res.status(200).json(newComment)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Comment.destroy({
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