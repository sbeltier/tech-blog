const router = require('express').Router();

const userRoutes = require('./userRoutes');
const registrationRoutes = require('./registrationRoutes');
const blogRoutes = require('./blogRoutes')

router.use('/users', userRoutes);
router.use('/register', registrationRoutes)
router.use('/blog', blogRoutes)

module.exports = router;
