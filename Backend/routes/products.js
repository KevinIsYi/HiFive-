const { Router } = require("express");
const Product = require('../models/Product');
const { uploadOptions } = require("../middlewares/image-validator");

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { category, slider, nameFilter } = req.query;
        const products = await Product.find({
            name: {
                "$regex": nameFilter || ''
            },
            category: {
                "$regex": category || ''
            },
            price: {
                $lte: slider ? Number(slider) : 3000
            }
        });

        res.json({
            ok: true,
            products
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Internal server error'
        })
    }
});

router.post( '/insert-items', uploadOptions.single('image'), async (req, res) => {
        
    try {
        const { body, file} = req;
        
        if (!file) {
            return res.status(400).json({
                ok: false,
                message: 'Image is required'
            });
        }
        
        const { filename } = file; 
        const imagePath = `https://hi-five-backend-server.herokuapp.com/public/images/${filename}`;

        const newProduct = new Product(body);
        newProduct.image = imagePath;

        await newProduct.save();

        res.json({
            ok: true,
            product: newProduct
        });

    } catch (error) {
        console.log(error);
        res.json({
            ok: false
        });
    }
});

module.exports = router;