const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');


//armando las rutas
router.get('/',mainController.index);
router.get('/about',mainController.about);

module.exports = router;
