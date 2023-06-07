const express = require('express');
const vitimaControllers = require('../controllers/vitima');

const router = express.Router();

router.get('/estatisticas', vitimaControllers.consultaEstatisticasDeVitimas);

module.exports = router;