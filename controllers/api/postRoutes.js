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
                include:[{model: User, attributes:["username"]}],
                order: [['updatedAt', 'DESC']]
            }
        ],
        order: [['updatedAt', 'DESC']]
        })
        console.log(postList)
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
            },
            {
                model: Comment,
                include:[{model: User, attributes:["username"]}],
                order: [['updatedAt', 'DESC']]
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
        if(!req.session.userId) {
            res.redirect("/login");
            return;
        }
        const newPost = await Post.create({
            title: req.body.title,
            text: req.body.text,
            userId: req.session.userId
        });
        res.status(200).json(newPost)
    }
    catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        if(req.session.userId == post.userId) {
           await post.destroy()
           res.status(200).json({message: "Post Deleted"})
        }
        else {
            res.status(400).json({message: "Not Your post"})
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        if(req.session.userId == post.userId) {
           post.title = req.body.title
           post.text = req.body.text
           post.save();
           console.log(post);
           res.status(200).json({message: "Post Updated"})
        }
        else {
            res.status(400).json({message: "Not Your post"})
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router;