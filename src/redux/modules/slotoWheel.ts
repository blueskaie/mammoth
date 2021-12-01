import produce from "immer";
import { CLICK_TO_COEFFICIENT, GET_MAY_COLOR, RUN_GAME, STOP_COLOR_NUMBER } from "../actions/slotoWheel";
import { rotate } from "../../container/Wheel/data/rotate";
import { getRandomNumber } from "../../utils/generateStopRandom";

type IInitialState = {
  coefficientButton: {
    coefficient: string;
  };
  activeClass: any;
  run: boolean;
  colorName: string;
  colorNumber: 0;
  stopNumber: number;
};

const initialState: IInitialState = {
  coefficientButton: {
    coefficient: "2",
  },
  activeClass: {
    1: true,
    2: false,
    3: false,
    4: false,
  },
  run: false,
  colorName: "p",
  colorNumber: 0,
  stopNumber: 0,
};

const slotoWheel = produce((draft, action) => {
  switch (action.type) {
    case CLICK_TO_COEFFICIENT: {
      draft.coefficientButton = { ...action.payload };
      Object.keys(draft.activeClass).forEach((key) => {
        draft.activeClass[key] = +key === action.payload.id;
      });
      draft.colorNumber = action.payload.id;
      break;
    }
    case RUN_GAME: {
      draft.run = action.run;
      break;
    }
    case GET_MAY_COLOR: {
      draft.colorName = action.color;
      break;
    }
    case STOP_COLOR_NUMBER: {
      const color = [Object.keys(rotate)[action.number]];
      draft.stopNumber = getRandomNumber(color);
      break;
    }
    default:
      break;
  }
}, initialState);

export default slotoWheel;
