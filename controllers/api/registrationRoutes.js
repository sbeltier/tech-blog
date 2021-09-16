const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Route for register page
router.get('/register', (req, res) => {
    res.render('register')
})

// Route for Registration Form
router.post('/register', async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10)
        const userData = await User.create(newUser);
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

module.exports = router;