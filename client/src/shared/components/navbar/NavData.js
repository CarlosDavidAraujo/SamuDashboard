import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faPhoneVolume,
  faClock
} from "@fortawesome/free-solid-svg-icons";

export const navData = [
  {
    label: "Ocorrências",
    pathname: "/",
    icon: <FontAwesomeIcon icon={faPhoneVolume} />,
  },
  {
    label: "Epidemiologia",
    pathname: "/epidemiologia",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    label: "Tempo resposta",
    pathname: "/temporesposta",
    icon: <FontAwesomeIcon icon={faClock}/> 
  }
];
