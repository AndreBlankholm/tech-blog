const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata =[
    {
        username: 'jmacarthur9',
        email: 'bsteen9@epa.gov',
        password: 'password123'
      }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;