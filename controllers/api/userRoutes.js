const router = require('express').Router();
const { User } = require('../../models');

// Create a User

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create(req.body)
        console.log(userData);
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id
            res.status(200).json(userData);
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Login Route

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if(!userData) {
            res.status(400).json({message: "Username not found"})
            return
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect Password.' });
          return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id
            res.status(200).json({user: userData, message: 'Log In Successful'})
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// Logout Route

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
    else {
        res.status(404).end();
    }
})

module.exports = router;