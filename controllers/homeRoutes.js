const router = require('express').Router()
const {Post, Comment, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            order: [['updatedAt', 'DESC']]
        })
        const posts = postList.map((post) => post.get({plain: true}))
        console.log(req.session.userId)
        req.session.save(() => {
            res.render('homepage', {
              posts,
              userId: req.session.userId,
              loggedIn: req.session.loggedIn
            });
          })
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
      }
      const userData = await User.findByPk(req.session.userId, {
          include: [
              {model: Post, 
                include:[
                    {model: Comment, include: [
                        {model:User, attributes:["username"]}
                    ]}
                ],
              }
            ],
            order: [
              [Post, 'updatedAt', 'DESC']
            ]
      })
      let postList;
      if(userData.posts) {
        postList = userData.posts.map((post) => post.get({plain: true}))
      }
      req.session.save(() => {
        res.render('dashboard', {
          postList,
          userId: req.session.userId,
          loggedIn: req.session.loggedIn
        });
      })
    });

router.get('/edit/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {include: [{model: User}]})
    if (req.session.userId != postData.user.id) {
        res.redirect('/');
        return;
      }
      else {
        const post = postData.get({plain: true})
        console.log(post)
        req.session.save(() => {
          res.render('editpost', {
            post,
            userId: req.session.userId,
            loggedIn: req.session.loggedIn
          });
        })
      }

    });

router.get('/post/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [
      {
          model: User,
          attributes: ['username']
      },
      {
          model: Comment,
          include:[{model: User, attributes:["username"]}]
      }
  ],
  order: [
    [Comment, 'updatedAt', 'DESC']
  ]
  })
  const post = postData.get({plain:true})
  const postList = [post]
  req.session.save(() => {
    res.render('postpage', {
      postList,
      userId: req.session.userId,
      loggedIn: req.session.loggedIn
    });
  })

})


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;