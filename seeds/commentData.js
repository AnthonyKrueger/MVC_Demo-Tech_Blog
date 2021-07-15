const { Comment } = require("../models");

const commentData = [
    {
        text: "Totally agree!",
        username: "TechGuy123",
        userId: 1,
        postId: 1
    },
    {
        text: "Awesome post!",
        username: "ComputerWhiz",
        userId: 3,
        postId: 2
    },
    {
        text: "Definitely!",
        username: "GeniusCoder",
        userId: 4,
        postId: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;