import { formatToPascalCaseWithSpace } from "../../../shared/utils/formatToPascalCase";
import { OcorrenciaVeiculos } from "../components/OcorrenciaVeiculos";

/**
 * Configuração da tabela de ocorrências.
 * @param {Array} ocorrencias - Um array das ocorrências a serem exibidas na tabela.
 * @returns {{tableColumn tableData}} Um objeto contendo as colunas e os dados configurados para a tabela.
 */
export function getTableConfig(ocorrencias) {
  const tableColumns = [
    {
      width: "5%",
      label: "#",
      dataKey: "#",
    },
    {
      width: "35%",
      label: "Motivo",
      dataKey: "motivo",
      emphasis: true,
    },
    {
      width: "15%",
      label: "Médico regulador",
      dataKey: "regulador",
    },
    {
      width: "15%",
      label: "Bairro",
      dataKey: "bairro",
    },
    {
      width: "30%",
      label: "Veículos",
      dataKey: "veiculos",
    },
  ];

  const tableData = ocorrencias.map((ocorrencia) => ({
    "#": ocorrencia.id.slice(-4),
    motivo: ocorrencia.motivo,
    regulador: ocorrencia.operador,
    risco: ocorrencia.risco,
    bairro: formatToPascalCaseWithSpace(ocorrencia.bairro),
    veiculos: <OcorrenciaVeiculos veiculos={JSON.parse(ocorrencia.veiculos)} />,
  }));
  return { tableColumns, tableData };
}
