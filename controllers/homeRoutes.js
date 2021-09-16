const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');


// GET all blogs for homepage
router.get('/', /* enable later withAuth, */ async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((blogInfo) =>
            blogInfo.get({ plain: true})  
        )

        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
        
    })


// GET one blog
router.get('/blog/:id', async (req, res) => {
    try {
      const dbBlogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'author',
              'comment',
              'blog_id'
            ]
          }
        ]
      });
      console.log(dbBlogData)
      console.log("=====================")
      const blog = dbBlogData.get({ plain: true });
      res.render('blog', { blog, loggedIn: req.session.loggedIn });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// // Login Route
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     res.render('login');
//   });


module.exports = router;
