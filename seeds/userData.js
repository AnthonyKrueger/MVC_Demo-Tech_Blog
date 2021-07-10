const { User } = require("../models")

const userData = [
    {
        username: 'yeehaw99',
        password: 'secrets'
    },
    {
        username: 'yeehaw96',
        password: 'secrets'
    },
    {
        username: 'yeehaw97',
        password: 'secrets'
    },
    {
        username: 'yeehaw98',
        password: 'secrets'
    }
]

const seedUsers = async () => {  
    // Using multiple creates so the password gets hashed
 await User.create(userData[0]);
 await User.create(userData[1]);
 await User.create(userData[2]);
 await User.create(userData[3]);
}

module.exports = seedUsers;