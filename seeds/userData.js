const { User } = require('../models');

const userData =

[
    {
        "id": 1,
        "username": "Sarah",
        "email": "s.nicole.beltier@gmail.com",
        "password": "password123"
    }

]

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;