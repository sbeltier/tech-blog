const router = require('express').Router();
const { User, Comment, Blog } = require('../../models');
const { restore } = require('../../models/User');

// Create new Comment
router.post('/comment', async (req, res) => {
    console.log('trying to create new comment')
    console.log(JSON.stringify(req.body))


    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            author: 'Sarah',
            date: "Setpember 16, 2021",
            blog_id: 1,
            user_id: 1
            // user_id: req.session.user_id,
        })
        console.log(newComment)
        res.render('blog-comment-section', {
            newComment
        });
        console.log("is this working?")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;