const { Router } = require('express');
const { getParams, getQuery } = require('../Controlador/Countries_C.js');
const router = Router();

router.get('/', getQuery);
router.get('/:id', getParams);
router.get('/', (req, res, next) => {});

module.exports = router;
