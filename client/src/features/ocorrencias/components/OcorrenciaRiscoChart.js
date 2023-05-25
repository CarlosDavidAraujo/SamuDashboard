import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import { ChartContainer } from "../../../shared/components/ChartContainer";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export function OcorrenciaRiscoChart({ riscos }) {
  const data = {
    labels: riscos.map((item) => `Risco ${item.RISCOCOD}`),
    datasets: [
      {
        data: riscos.map((item) => item.TotalOcorrencias),
        backgroundColor: [
          "#db0404", //risco 1 vermelho
          "#ec9010", //risco 2 amarelo
          "#1a8d02", //risco 3 verde
          "#0149b5", //risco 4 azul
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
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}

