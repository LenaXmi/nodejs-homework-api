const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, process.env.UPLOAD_FOLDER);

    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({
    storage: storage, limits: { fileSize: 500000 }, fileFilter: function (req, file, cb) {
   
        if (file.mimetype.includes('image')) {
            cb(null, true);
        }
        else { 

            cb(new Error('File type must be an image'));
        }
       
    } });

module.exports = upload;