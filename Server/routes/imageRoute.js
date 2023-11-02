const express = require('express');
const router = express.Router();

const {  getImages } = require('../Controllers/imageController.js');

router.get('/get-images', getImages);

module.exports = router;
