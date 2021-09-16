const router = require('express').Router();

const userRoutes = require('./userRoutes');
const registrationRoutes = require('./registrationRoutes');
const blogRoutes = require('./blogRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/register', registrationRoutes)
router.use('/blog', blogRoutes)
router.use('/comment', commentRoutes)

module.exports = router;
