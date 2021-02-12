const { Router } = require("express");
const Product = require('../models/Product');
const { uploadOptions } = require("../middlewares/image-validator");

const router = Router();

router.get('/', (req, res) => {
    return res.json({
        ok: true
    })
});

router.post( '/insert-items', uploadOptions.single('image'), async (req, res) => {
        
    try {
        const { body, protocol, file:{ filename } } = req;
        
        const imagePath = `${protocol}://${req.get('host')}/public/images/${filename}`;

        const newProduct = new Product(body);
        newProduct.image = imagePath;

        

        res.json({
            ok: true
        });
    } catch (error) {
        res.json({
            ok: false
        });
    }
});

module.exports = router;