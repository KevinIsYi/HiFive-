const { Router } = require("express");
const Product = require('../models/Product');
const { uploadOptions } = require("../middlewares/image-validator");

const router = Router();

router.get('/', (req, res) => {
    return res.json({
        data: [
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB01`,
                'category': 'bags',
                'name': 'Bag 01',
                'price': 1265.12,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB02`,
                'category': 'bags',
                'name': 'Bag 02',
                'price': 2234.09,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB03`,
                'category': 'bags',
                'name': 'Bag 03',
                'price': 1459.32,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB04`,
                'category': 'bags',
                'name': 'Bag 04',
                'price': 2113.32,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB05`,
                'category': 'bags',
                'name': 'Bag 05',
                'price': 1357,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB06`,
                'category': 'bags',
                'name': 'Bag 06',
                'price': 2459.99,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB07`,
                'category': 'bags',
                'name': 'Bag 07',
                'price': 1375.65,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB08`,
                'category': 'bags',
                'name': 'Bag 08',
                'price': 987.14,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB09`,
                'category': 'bags',
                'name': 'Bag 09',
                'price': 2149.12,
                'available': 20
            },
            {
                'image': `https://hi-five-backend-server.herokuapp.com/public/images/AB10`,
                'category': 'bags',
                'name': 'Bag 10',
                'price': 965.34,
                'available': 20
            },
        ]   
    })
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