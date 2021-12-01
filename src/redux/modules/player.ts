import BigNumber from "bignumber.js";
import _last from "lodash/last";
// import config from 'config';
import {
  ADD_DATA,
  CLEAR,
  CONFIRM,
  LOAD,
  LOAD_DATA_SUCCESS,
  LOAD_FAIL,
  LOAD_LAST,
  LOAD_LAST_FAIL,
  LOAD_LAST_SUCCESS,
  LOAD_SUCCESS,
  SEARCH,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
} from "../actions/player";
import produce from "immer";

const initialState = {
  loaded: false,
  bettingAvailable: {},
  myBetting: {},
  data: [],
  search: {
    loaded: false,
    hasMore: true,
    data: {},
  },
};

const getBettingAvailable = (amount: any, myBetting: any, areas: any, precision = 2) => {
  const limit: any = {};

  areas.forEach(
    ({
      area,
      max_diff_amount, // eslint-disable-line camelcase
      payout_rate, // eslint-disable-line camelcase
      min_balance, // eslint-disable-line camelcase
      max_balance, // eslint-disable-line camelcase
    }: any) => {
      // eslint-disable-next-line camelcase
      const payoutRate = Array.isArray(payout_rate) ? Math.max(...payout_rate) : payout_rate;
      limit[area] = BigNumber.min(
        BigNumber.min(
          BigNumber.max(
            new BigNumber(max_diff_amount)
              .plus(amount.total)
              .minus(new BigNumber(payoutRate).multipliedBy(amount[area]))
              .dividedBy(new BigNumber(payoutRate).minus(1))
              .toFixed(precision, 1),
            min_balance
          ),
          max_balance
        ),
        new BigNumber(max_balance).minus(myBetting[area])
      ).toFixed();
    }
  );

  return limit;
};

const player = produce((draft: any, action: any) => {
  switch (action.type) {
    case LOAD:
    case LOAD_LAST: {
      [action.color] = { ...draft[action.color], loading: true };
      break;
    }
    case LOAD_FAIL:
    case LOAD_LAST_FAIL: {
      [action.color] = {
        ...draft[action.color],
        loading: false,
        loaded: false,
        error: action.error,
      };
      break;
    }
    case LOAD_SUCCESS: {
      const newData = [...draft[action.color].data];
      const loaded = [...(Array.isArray(action?.result?.data) ? action.result.data : action?.result?.data?.players)];
      const hasMore = loaded.length > 0;

      loaded.forEach((data) => {
        if (!data.id && data.player_id) {
          data.id = data.player_id;
        }
      });

      if (hasMore) {
        const loadedFirstPlayerId = loaded?.[0]?.id;
        //@ts-ignore
        const beforeLastPlayerId = _last(draft[action.color].data)?.id || loadedFirstPlayerId + 1;

        if (loadedFirstPlayerId >= beforeLastPlayerId) {
          do {
            loaded.splice(0, 1);
          } while (loaded.length > 0 && loaded[0].id >= beforeLastPlayerId);
        }
        newData.push(...loaded);
      }

      [action.color] = {
        ...draft[action.color],
        loading: false,
        loaded: true,
        hasMore,
        data: newData,
      };
      break;
    }
    case LOAD_LAST_SUCCESS: {
      const newData = [...draft[action.color].data];
      const loaded = [...(Array.isArray(action?.result?.data) ? action.result.data : action?.result?.data?.players)];

      loaded.forEach((data) => {
        if (!data.id && data.player_id) {
          data.id = data.player_id;
        }
      });

      if (loaded.length > 0) {
        const loadedLastPlayerId = _last(loaded)?.id;
        const beforeFirstPlayerId = draft[action.color].data?.[0]?.id || loadedLastPlayerId - 1;

        if (loadedLastPlayerId <= beforeFirstPlayerId) {
          for (let index = loaded.length - 1; index >= 0; index -= 1) {
            if (loaded[index].id > beforeFirstPlayerId) {
              break;
            }
            loaded.splice(index);
          }
        }
        newData.unshift(...loaded);
      }

      [action.color] = {
        ...draft[action.color],
        loaded: true,
        loading: false,
        data: newData,
      };
      break;
    }
    case CONFIRM: {
      const data = [...draft?.all?.data];

      for (let i = 0; i < data.length; i += 1) {
        if (data[i].txid === action.txid) {
          if (data[i].confirm_count === 0) {
            data[i].confirm_count = 1;
          }
          break;
        }
      }

      draft.all = {
        ...draft.all,
        data,
      };
      break;
    }
    case CLEAR: {
      break;
    }
    case SEARCH: {
      draft.search = {
        ...draft.search,
        loading: true,
      };
      break;
    }
    case SEARCH_FAIL: {
      draft.search = {
        ...draft.search,
        loading: false,
        loaded: false,
        error: action.error,
      };
      break;
    }
    case SEARCH_SUCCESS: {
      draft.search = {
        ...draft.search,
        loading: false,
        loaded: true,
        data: action.result.data,
      };
      break;
    }
    case LOAD_DATA_SUCCESS: {
      const players = action.result?.data?.players;
      const amount: any = {
        total: new BigNumber(0),
      };
      const myBetting: any = {};

      players.forEach((data: any) => {
        amount[data.area] = amount[data.area].plus(data.amount);
        if (data.user_hash === action.moneyButtonUserIdHash) {
          myBetting[data.area] = myBetting[data.area].plus(data.amount);
        }
      });
      Object.keys(amount).forEach((key) => {
        amount[key] = amount[key].toFixed();
      });
      Object.keys(myBetting).forEach((key) => {
        myBetting[key] = myBetting[key].toFixed();
      });
      draft.loaded = true;
      Array.isArray(players);
      draft.bettingAvailable = getBettingAvailable(amount, myBetting, action.areas, action.precision);
      draft.data = [...players];
      // data: [
      //   {
      //     txid: '86b0fb0cfa117b6cbfebae752401c780899a0a1b80cd92a2b95324d448e47136',
      //     user_hash: '',
      //     area: 'P',
      //     amount: 0.001,
      //   },
      // ],

      break;
    }
    case ADD_DATA: {
      const amount = {
        ...draft.amount,
        [action.data.area]: new BigNumber(draft.amount[action.data.area]).plus(action.data.amount).toFixed(),
        total: new BigNumber(draft.amount.total).plus(action.data.amount).toFixed(),
      };

      const myBetting = { ...draft.myBetting };
      if (action.data.user_hash === action.moneyButtonUserIdHash) {
        // myBetting = {
        //   ...state.myBetting,
        //   [action.data.area]: new BigNumber(state.myBetting[action.data.area]).plus(action.data.amount).toFixed(),
        // };
        myBetting[action.data.area] = new BigNumber(draft.myBetting[action.data.area])
          .plus(action.data.amount)
          .toFixed();
      }

      draft.bettingAvailable = getBettingAvailable(amount, myBetting, action.areas, action.precision);
      draft.data = [{ ...action.data }, ...draft.data];
      break;
    }

    default:
      break;
  }
}, initialState);
export default player;
