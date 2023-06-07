const router = require("express").Router();
const temporRespostaController = require("../controllers/tempoResposta");

router.get('/veiculo', temporRespostaController.consultaTempoRespostaPorVeiculo);

router.get('/unidade', temporRespostaController.consultaTempoRespostaPorUnidadeDestino);

module.exports = router;