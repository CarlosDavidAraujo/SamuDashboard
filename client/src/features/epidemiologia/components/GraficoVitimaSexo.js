import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartContainer } from "../../../shared/components/ChartContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function GraficoVitimaSexo({ chartData }) {
  const data = {
    labels: chartData.map((sexo) => sexo.Sexo),
    datasets: [
      {
        data: chartData.map((sexo) => sexo.TotalVitimas),
        backgroundColor: ["gray", "#19A7CE", "pink"],
      },
    ],
  };

  const options = {
    // Configurações do gráfico
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Nº Vítimas x Sexo", // Define o título do gráfico
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
