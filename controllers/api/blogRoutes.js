const router = require('express').Router();
const { User, Comment, Blog } = require('../../models');


// Post Blog
router.post('/', async (req, res) => {
  
    console.log('trying to create new blog')
    console.log(JSON.stringify(req.body))
  
  
    try {
        const newBlog = await Blog.create({
            author: 'Sarah',
            title: req.body.title,
            date: "September 16, 2021",
            content: req.body.content,
            user_id: 1
            // user_id: req.session.user_id,
        }).then(newBlog) 
        console.log(newBlog)
        console.log('Blog Created')
        res.render('homepage-blog-sections', {
            newBlog
        });
        console.log("is this working?")
    } catch (err) {
        res.status(500).json(err);
    }
  })

module.exports = router;