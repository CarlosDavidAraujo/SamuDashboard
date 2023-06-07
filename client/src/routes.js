import { createBrowserRouter } from "react-router-dom";
import { OcorrenciasPage } from "./features/ocorrencias/containers/OcorrenciasPage";
import { EpidemiologiaPage } from "./features/epidemiologia/containers/EpidemiologiaPage";
import { TempoRespostaPage } from "./features/tempo_resposta/containers/TempoRespostaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OcorrenciasPage/>,
  },
  {
    path: '/epidemiologia',
    element: <EpidemiologiaPage/>
  },
  {
    path: '/temporesposta',
    element: <TempoRespostaPage/>
  }
]);

