import { useEffect, useState } from "react";
import { filterByRisk } from "../utils/filterByRisk";
import { useSocket } from "../../../shared/hooks/useSocket";

export function useOcorrenciaData() {
  const [ocorrenciasByRisk, setOcorrenciaByRisk] = useState([]);
  const ocorrencias = useSocket("ocorrencia:consulta");

  useEffect(() => {
    setOcorrenciaByRisk(filterByRisk(ocorrencias));
  }, [ocorrencias]);

  return [ocorrencias, ocorrenciasByRisk];
}
