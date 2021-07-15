const { Post } = require("../models");

const postData = [
    {
        title:"Quote from Bill Gates",
        text: "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
        userId: 2
    },
    {
        title:"My favorite Quote from Stephen Hawking",
        text: "Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.",
        userId: 1
    },
    {
        title:"Steve Jobs Once Said",
        text: "Everybody should learn to program a computer, because it teaches you how to think.",
        userId: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;