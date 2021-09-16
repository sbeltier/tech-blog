const { Blog } = require('../models');

const blogData =
[
    {
        "id": 1,
        "author": "Sarah",
        "title": "the best blog ever",
        "date": "September 14, 2021",
        "content": "gobblygook the blog post",
        "comment": "gobblygook",
        "user_id": 1
    }
]

const seedCategories = () => Blog.bulkCreate(blogData);

module.exports = seedCategories;

