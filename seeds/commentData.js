const { Comment } = require("../models");

const commentData = [
    {
        text: "a bunch of stuff here",
        username: "yeehaw97",
        userId: 3,
        postId: 1
    },
    {
        text: "a bunch of stuff here",
        username: "yeehaw99",
        userId: 1,
        postId: 2
    },
    {
        text: "a bunch of stuff here",
        username: "yeehaw98",
        userId: 4,
        postId: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;