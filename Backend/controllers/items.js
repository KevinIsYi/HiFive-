const Item = require('../models/Item');

const getAllItems = async ( req, res ) => {

    try {
        const items = await Item.find({});
        res.json({
            ok: true,
            items
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Cannot fetch items from DB"
        });
    }
}

module.exports = {
    getAllItems
}