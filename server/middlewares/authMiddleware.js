const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        let token = req.headers.authorization.split(' ')[1];
        let verifiedToken = jwt.verify(token, `${process.env.SECRET_KEY}`);
        req.body.userId = verifiedToken.userId;
        console.log('token is ', token);
        console.log('verifeid token is ',verifiedToken)
        next()
    } catch (error) {
        res.send({
            success: false,
            message: "Invalud token"
        })
    }
}

