import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGear,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export const navData = [
  {
    label: "Ocorrências",
    pathname: "/ocorrencias",
    icon: <FontAwesomeIcon icon={faPhoneVolume} />,
  },
  {
    label: "Epidemiologia",
    pathname: "/epidemiologia",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    label: "Configurações",
    pathname: "#config",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];
