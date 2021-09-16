const { Comment } = require('../models');

const commentData =

[
    {
        "id": 1,
        "author": "Sarah",
        "date": "September 14, 2021",
        "comment": "gobblygook comment",
        "blog_id": 1,
        "user_id": 1
    }

]

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;