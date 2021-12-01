import BigNumber from "bignumber.js";
import { toCashAddress } from "bchaddrjs";
import {
  CLEAR_SAVED_TOAST,
  GET_ACCESS_AVAILABLE_FAIL,
  LOAD,
  LOAD_FAIL,
  LOAD_SUCCESS,
  SAVE_TOAST,
  SET_SHOW_STATISTICS,
} from "../actions/info";
import produce from "immer";
import { IDefaultMaintenance, IInitialState } from "../../interface/IStore/reducers/IInfo";

const defaultMaintenance: IDefaultMaintenance = {
  landing: false,
  lottery: false,
  turtlerace: false,
  laddergame: false,
  baccarat: false,
  dice: false,
};
const initialState: IInitialState = {
  iAmAdult: false,
  loaded: false,
  maintenance: { ...defaultMaintenance },
  accessAvailable: true,
  game: null,
  oldGame: false,
  data: {
    totalPlayerCount: 0,
    totalBalances: "0",
    decimal_place: 0,
  },
  savedToast: [],
  showStatistics: false,
  loading: false,
};

const info = produce((draft, action) => {
  switch (action.type) {
    case LOAD: {
      draft.loading = true;
      break;
    }
    case LOAD_SUCCESS: {
      const newData = {
        ...draft.data,
        ...action.result.data,
        ...action.result?.data?.time,
      };

      const interval = action.result?.timestamp * (action.timestampWithMilliSecond ? 1 : 1000) - Date.now();
      const endTime: any = newData?.end_time;
      if (endTime) {
        // @ts-ignore
        newData.end_time = new Date(new Date(endTime) - interval).toISOString();
      }
      const noMoreBets = newData?.no_more_bets;
      if (noMoreBets) {
        // @ts-ignore
        newData.no_more_bets = new Date(new Date(noMoreBets) - interval).toISOString();
      }

      let totalPlayerCount = 0;
      let totalBalances = new BigNumber(0);
      ["turtles", "ladders", "flags", "dice"].forEach((game) => {
        if (!newData[game]) {
          return;
        }
        newData[game].forEach((data: any) => {
          try {
            data.cashAddress = toCashAddress(data.address);
          } catch {
            data.cashAddress = data.address;
          }
          totalPlayerCount += data.player_count;
          totalBalances = totalBalances.plus(data.total_balance);

          if (data.winning_rate) {
            data.winning_rate = new BigNumber(data.winning_rate).toFixed();
          }
        });
      });
      Object.assign(newData, {
        totalPlayerCount,
        totalBalances: totalBalances.toFixed(),
      });

      draft.loading = false;
      draft.loaded = true;
      draft.data = newData;
      break;
    }
    case LOAD_FAIL: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }
    case GET_ACCESS_AVAILABLE_FAIL: {
      if (action.error?.status === 403) {
        draft.accessAvailable = false;
      }
      break;
    }

    case SAVE_TOAST: {
      draft.savedToast = [...draft.savedToast, action.data];
      break;
    }
    case CLEAR_SAVED_TOAST: {
      draft.savedToast = [];
      break;
    }
    case SET_SHOW_STATISTICS: {
      draft.showStatistics = action.state;
      break;
    }

    default:
      break;
  }
}, initialState);

export default info;
