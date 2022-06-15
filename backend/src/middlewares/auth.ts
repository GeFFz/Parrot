require('dotenv').config()
const { expressjwt } = require("express-jwt");

module.exports = expressjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256']
});

