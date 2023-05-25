import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "../../../shared/components/ChartContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function GraficoVitimaIdade({ chartData }) {
  const data = {
    labels: chartData.map(item=> item.FaixaEtaria),
    datasets: [
      {
        data: chartData.map(item=> item.TotalVitimas),
        backgroundColor: ["#19A7CE"],
      },
    ],
  };

  const options = {
    // Configurações do gráfico
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Nº Vítimas x Idade", // Define o título do gráfico
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
