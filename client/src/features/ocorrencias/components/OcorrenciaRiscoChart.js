import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { ChartContainer } from "../../../shared/components/ChartContainer";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export function OcorrenciaRiscoChart({ riskCount }) {
  console.log('risco', riskCount);
  const data = {
    labels: Object.keys(riskCount).map((risco) => {
      if (risco === "90") {
        return "Não regulado";
      }
      if (risco === "0") {
        return "Não informado";
      }
      return `Risco ${risco}`;
    }),
    datasets: [
      {
        data: Object.values(riskCount),
        backgroundColor: [
          "lightgray", // não regulado
          "#d25151", //risco 1 vermelho
          "#D2C551", //risco 2 amarelo
          "#518CD2", //risco 3 verde
          "#51D275", //risco 4 azul
          "#333333", //sem classificaçao
          // Adicione mais cores de fundo conforme necessário
        ],
      },
    ],
  };

  const options = {
    // Configurações do gráfico
    plugins: {
      legend: {
        position: "bottom", // Define a posição da legenda como "bottom" (abaixo do gráfico)
        align: "start",
      },
      title: {
        display: true,
        text: "Nº Ocorrências x Risco", // Define o título do gráfico
      },
    },
  };

  return (
    <ChartContainer style={{maxWidth: "max-content"}}>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}
