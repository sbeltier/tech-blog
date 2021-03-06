const router = require('express').Router();
const { User, Comment, Blog } = require('../../models');

// Create new Comment
router.post('/', async (req, res) => {
    console.log('trying to create new comment')
    console.log(JSON.stringify(req.body))


    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            author: 'Sarah',
            date: "September 16, 2021",
            blog_id: 1,
            user_id: 1
            // user_id: req.session.user_id,
        }).then(newComment) 
        console.log(newComment)
        console.log('Comment Created')
        res.render('blog-comment-section', {
            newComment
        });
        res.redirect('/')
        console.log("is this working?")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;