const expressJWT = require('express-jwt');
var secret = require('../config/secret');

module.exports = expressJWT.expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});

