const router = require('express').Router()
const {Post, Comment, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    include:[{model: User}]
                }
            ]
        })
        const posts = postList.map((post) => post.get({plain: true}))
        req.session.save(() => {
            res.render('homepage', {
              posts,
              loggedIn: req.session.loggedIn
            });
          })
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;