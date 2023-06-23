const express = require('express');
const router = express.Router();
const blogCTRL = require('../controller/blogController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/blogImages'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage,
    limits: {fieldSize: 1040 * 1040 * 3}
}).single('image');

router.get('/', blogCTRL.blogs);
router.get('/details/:id', blogCTRL.blogdetails);
router.get('/editblog/:id', blogCTRL.editblog);
router.post('/addblog', upload, blogCTRL.addblog);
router.put('/updateblog/:id', blogCTRL.updateblog);
router.delete('/deleteblog/:id', blogCTRL.deleteblog);

module.exports = router;