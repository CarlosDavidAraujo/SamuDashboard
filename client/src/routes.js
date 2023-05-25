import { createBrowserRouter } from "react-router-dom";
import { OcorrenciasPage } from "./features/ocorrencias/containers/OcorrenciasPage";
import { LoginPage } from "./features/login/containers/LoginPage";
import { EpidemiologiaPage } from "./features/epidemiologia/containers/EpidemiologiaPage";

export const router = createBrowserRouter([
  {
    path: "/ocorrencias",
    element: <OcorrenciasPage/>,
  },
  {
    path: '/epidemiologia',
    element: <EpidemiologiaPage/>
  }
]);

