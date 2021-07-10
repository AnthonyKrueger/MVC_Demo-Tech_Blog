const router = require('express').Router()
const { Post, User, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll({
            include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Comment,
                include:[{model: User, attributes:["username"]}]
            }
        ]
        })
        res.status(200).json(postList)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findByPk(id, {
            include: [{
                model: User,
                attributes: ['id', 'username']
            }]
        })
        res.status(200).json(post)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost)
    }
    catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Post.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: "Post Deleted"})
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;