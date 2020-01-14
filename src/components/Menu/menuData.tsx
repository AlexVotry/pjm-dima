import lineOutageIcon from '../../assets/menu/LinesAndOutagesNormal.png';
import searchIcon from '../../assets/menu/SearchNormal.png';
import contingencyIcon from '../../assets/menu/Contingency-Normal.png';


export const popUpCards: Array<{ title: string, icon: any, header: string }> = [
  {
    title: "search",
    header: "Search",
    icon: searchIcon,
  },
  {
    title: "lineOutage",
    header: "Lines & Outages",
    icon: lineOutageIcon
  },
  {
    title: "contingency",
    header: "Contingency Analysis",
    icon: contingencyIcon
  }
]