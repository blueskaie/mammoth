import Dice from "../../assets/img/homeImg/Dice.png";
import Flip from "../../assets/img/homeImg/coinFlip.png";
import Wheel from "../../assets/img/homeImg/LottoWheel.png";
import Soon from "../../assets/img/homeImg/Soon.png";

export const gameData = [
  {
    id: "01",
    name: "Dice",
    url: "/dice",
    imagUrl: Dice,
    active: true,
  },
  {
    id: "02",
    name: "Coin Flip",
    url: "/flip",
    imagUrl: Flip,
    active: true,
  },
  {
    id: "03",
    name: "Lotto Wheel",
    url: "/wheel",
    imagUrl: Wheel,
    active: true,
  },
  {
    id: "04",
    name: "Game 4",
    url: "/wheel",
    imagUrl: Soon,
    active: false,
    soon: true,
  },
  {
    id: "05",
    name: "Game 5",
    url: "/wheel",
    imagUrl: Soon,
    active: false,
    soon: true,
  },
];
