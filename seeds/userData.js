const { User } = require("../models")

const userData = [
    {
        username: 'TechGuy123',
        password: 'secrets'
    },
    {
        username: 'SuperTechDude',
        password: 'secrets'
    },
    {
        username: 'ComputerWhiz',
        password: 'secrets'
    },
    {
        username: 'GeniusCoder',
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