const mysql = require('mysql2');

require('dotenv').config();

const connectionProperties = {
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(connectionProperties);
connection.connect((err) => {
    if(err) throw err;
    console.log("Succesful to connect with db")
})
module.exports = {
    connection
};