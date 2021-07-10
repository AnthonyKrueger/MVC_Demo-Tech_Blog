const { Post } = require("../models");

const postData = [
    {
        title:"Test Post #1",
        text: "a bunch of stuff here",
        userId: 2
    },
    {
        title:"Test Post #2",
        text: "a bunch of stuff here",
        userId: 1
    },
    {
        title:"Test Post #3",
        text: "a bunch of stuff here",
        userId: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;