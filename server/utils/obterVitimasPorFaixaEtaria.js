module.exports.obterTotalVitimasPorFaixaEtaria = (vitimas) => {
  const faixasEtarias = [
    { faixaEtaria: '0-9', min: 0, max: 9, totalVitimas: 0 },
    { faixaEtaria: '10-19', min: 10, max: 19, totalVitimas: 0 },
    { faixaEtaria: '20-29', min: 20, max: 29, totalVitimas: 0 },
    { faixaEtaria: '30-39', min: 30, max: 39, totalVitimas: 0 },
    { faixaEtaria: '40-49', min: 40, max: 49, totalVitimas: 0 },
    { faixaEtaria: '50-59', min: 50, max: 59, totalVitimas: 0 },
    { faixaEtaria: '60-69', min: 60, max: 69, totalVitimas: 0 },
    { faixaEtaria: '70-79', min: 70, max: 79, totalVitimas: 0 },
    { faixaEtaria: '80-89', min: 80, max: 89, totalVitimas: 0 },
    { faixaEtaria: '90-99', min: 90, max: 99, totalVitimas: 0 },
    { faixaEtaria: '100+', min: 100, max: Infinity, totalVitimas: 0 },
   // { faixaEtaria: 'Não informado', min: null, max: null, totalVitimas: 0 }
  ];

  vitimas.forEach((vitima) => {
    const idade = vitima.Idade;
    const faixa = faixasEtarias.find((faixa) => idade !== null && idade >= faixa.min && idade <= faixa.max);

    if (faixa) {
      faixa.totalVitimas += 1;
    } else { //quando a idade nao foi
      //faixasEtarias[faixasEtarias.length - 1].totalVitimas += 1;
    }
  });

  return faixasEtarias;
}
