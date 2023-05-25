const express = require('express');
const vitimaControllers = require('../controllers/vitima');

const router = express.Router();

router.post('/sexo', vitimaControllers.consultaTotalVitimasPorSexo);
router.post('/idade', vitimaControllers.consultaTotalVitimasPorIdade);
router.post('/tipo', vitimaControllers.consultaTotalVitimasPorTipo);

module.exports = router;