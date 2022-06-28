const { Router } = require('express');
const { postActivity } = require('../Controlador/Activities_C.js');
const router = Router();

router.post('/', postActivity);

module.exports = router;
