const { Router } = require('express');
const {
	getParams,
	getQuery,
	getAll
} = require('../Controlador/Countries_C.js');
const router = Router();

router.get('/get', getAll);
router.get('/', getQuery);
router.get('/:id', getParams);

module.exports = router;
