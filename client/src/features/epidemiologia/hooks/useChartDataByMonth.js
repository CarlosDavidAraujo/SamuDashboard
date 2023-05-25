import { api } from "../../../shared/services/api";

const { useState, useEffect } = require("react");

export const useChartDataByMonth = (mes) => {
  const [sexoData, setSexoData] = useState([]);
  const [tipoData, setTipoData] = useState([]);
  const [idadeData, setIdadeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSexo = await api.post("/vitima/sexo", { mes: mes });
        setSexoData(responseSexo.data);

        const responseTipo = await api.post("/vitima/tipo", { mes: mes });
        setTipoData(responseTipo.data);

        const responseIdade = await api.post("/vitima/idade", { mes: mes });
        setIdadeData(responseIdade.data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [mes]);

  return { sexoData, tipoData, idadeData, isLoading, error };
};
