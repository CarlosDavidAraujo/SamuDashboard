import styled from "styled-components";
import { GraficoVitimaSexo } from "../components/GraficoVitimaSexo";
import { GraficoVitimaTipo } from "../components/GraficoVitimaTipo";
import { GraficoVitimaIdade } from "../components/GraficoVitimaIdade";
import { useAxios } from "../../../shared/hooks/useAxios";
import axios from "axios";
import { api } from "../../../shared/services/api";
import { useEffect, useState } from "react";
import { useChartDataByMonth } from "../hooks/useChartDataByMonth";

export function EpidemiologiaPage() {
  const [mes, setMes] = useState(1);
  const { sexoData, idadeData, tipoData, isLoading, error } =
    useChartDataByMonth(mes);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setMes(value);
  };

  return (
    <>
      <select value={mes} onChange={handleChange}>
        {Array.from({ length: 12 }, (_, index) => {
          const month = index + 1;
          const monthName = new Date(0, month - 1).toLocaleString("default", {
            month: "long",
          });
          return (
            <option key={month} value={month}>
              {monthName}
            </option>
          );
        })}
      </select>

      <Container>
        <GraficoVitimaSexo chartData={sexoData} />
        <GraficoVitimaTipo chartData={tipoData} />
        <GraficoVitimaIdade chartData={idadeData} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  padding: 20px;
  gap: 10px;
`;
