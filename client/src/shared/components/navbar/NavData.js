import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';

//Armazena os dados para preencher os botoes de navegação da sidebar
export const navData = [
  {
    label: "Ocorrências",
    pathname: "/",
    icon: <PhoneInTalkIcon/>,
  },
  {
    label: "Epidemiologia",
    pathname: "/epidemiologia",
    icon: <TrendingUpIcon/>,
  },
  {
    label: "Tempo resposta",
    pathname: "/temporesposta",
    icon: <HourglassDisabledIcon/>, 
  }
];
