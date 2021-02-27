require('dotenv').config()

module.exports = {
    port: process.env.PORT || 4040,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST, 
    dbName: process.env.DB_NAME, 
    dbPassword: process.env.DB_PASSWORD, 
    dbPort: process.env.DB_PORT
}