const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { mimetype } = file;
        const isValidFormatFile = FILE_TYPE_MAP[mimetype];
        const uploadError = isValidFormatFile ? null : new Error('Invalid image format');

        cb(uploadError, 'public/images');
    },
    filename: (req, file, cb) => {
        const { mimetype } = file;
        const extension = FILE_TYPE_MAP[mimetype];
        const fileName = uuidv4();
        
        cb(null, `${fileName}.${extension}`);
    }
});

const uploadOptions = multer({ storage });

module.exports = {
    uploadOptions
};