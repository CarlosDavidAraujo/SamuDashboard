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
  const colors = ["gray", "#19A7CE", "pink"];

  const datasets = chartData.map((item, index) => ({
    label: item.Sexo,
    data: [item.TotalVitimas],
    backgroundColor: colors[index],
  }));

  const data = {
    labels: ["Gênero"],
    datasets: datasets,
  };

  const options = {
    // Configurações do gráfico
    plugins: {
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
