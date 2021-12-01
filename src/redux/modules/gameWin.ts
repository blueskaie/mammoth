import produce from "immer";
import {
  CHANGE_ACTIVE_NAME,
  CHANGE_CLASS_NAME,
  CLEAR_WIN_LUS,
  GAME_WIN_OR_NOT,
  SCROLL_TO_HISTORY,
  SET_ACTIVE_TAB,
} from "../actions/gameWin";
type IInitState = {
  win: number;
  lus: number;
  activeTab: number;
  scrollTo: { scroll: boolean; to: boolean };
  className: string;
  activeName: string;
};
const initialState: IInitState = {
  win: 0,
  lus: 0,
  activeTab: 0,
  scrollTo: {
    scroll: false,
    to: false,
  },
  className: "",
  activeName: "HEADS",
};

const gameWin = produce((draft, action) => {
  switch (action.type) {
    case GAME_WIN_OR_NOT: {
      action.win ? (draft.win += 1) : (draft.lus += 1);
      break;
    }
    case SET_ACTIVE_TAB: {
      draft.activeTab = action.number;
      break;
    }
    case SCROLL_TO_HISTORY: {
      draft.scrollTo.scroll = action.scroll;
      draft.scrollTo.to = !draft.scrollTo.to;
      break;
    }
    case CHANGE_CLASS_NAME: {
      draft.className = action.name;
      break;
    }
    case CHANGE_ACTIVE_NAME: {
      draft.activeName = action.name;
      break;
    }
    case CLEAR_WIN_LUS: {
      draft.win = 0;
      draft.lus = 0;
      break;
    }
    default:
      break;
  }
}, initialState);
export default gameWin;
