const Item = require("../models/Item");

const validateUniqueImg = async (req, res, next) => {
    try {
        const { body:{ img } } = req;

        if (await Item.find({ img })) {
            return res.status(400).json({
                ok: false,
                message: 'An Item with this image already exist'
            });
        }
        next();
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at connecting to DB'
        });
    }
}

module.exports = validateUniqueImg;