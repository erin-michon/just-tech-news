//import the Seqeulize constructor from the library
const Seqeulize = require('sequelize');

require('dotenv').config();

//create connect to our database, pass in your MySQL information for username and password
const sequelize = new Seqeulize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
);

module.exports = sequelize;