const User = require("../models/User");

const userIdExist = async(id, res, next) => {
    try {
        if (!id || id.length !== 24 || !await User.findById(id)) {
            return res.status(400).json({
                ok: false,
                message: 'UserID is not valid'
            });
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Failed at connecting to DB'
        });
    }

    next();
}

const validateUserIdBody = (req, res, next) => {
    const { body:{ userId } } = req;
    userIdExist(userId, res, next)

}

const validateUserIdHeader = (req, res, next) => {
    const { headers:{ userid } } = req;
    
    userIdExist(userid, res, next);
}

module.exports = {
    validateUserIdBody,
    validateUserIdHeader
}