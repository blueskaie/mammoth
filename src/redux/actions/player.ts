import {
  IBittoParticipateConfirm,
  IBittoParticipateConfirmType,
  IClear,
  IMakeLoadType,
} from "../../interface/IStore/actions/IPlayer";

const LOAD = "game/player/LOAD";
const LOAD_SUCCESS = "game/player/LOAD_SUCCESS";
const LOAD_FAIL = "game/player/LOAD_FAIL";

const LOAD_DATA = "game/player/LOAD_DATA";
const LOAD_DATA_SUCCESS = "game/player/LOAD_DATA_SUCCESS";
const LOAD_DATA_FAIL = "game/player/LOAD_DATA_FAIL";

const ADD_DATA = "game/player/ADD_DATA";

const LOAD_LAST = "game/player/LOAD_LAST";
const LOAD_LAST_SUCCESS = "game/player/LOAD_LAST_SUCCESS";
const LOAD_LAST_FAIL = "game/player/LOAD_LAST_FAIL";

const SEARCH = "game/player/SEARCH";
const SEARCH_SUCCESS = "game/player/SEARCH_SUCCESS";
const SEARCH_FAIL = "game/player/SEARCH_FAIL";

const CLEAR = "game/player/clear";
const CONFIRM = "bitto/player/PARTICIPATE_CONFIRM";

const clear = (): IClear => {
  return {
    type: CLEAR,
  };
};

const makeLoad = ({ color, types, page = 0, size = 50 }: IMakeLoadType) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const { game } = state.info;
    const params = {
      // asset: config.asset,
      page,
      size,
    };

    if (color !== "all") {
      const key = "color";
      switch (game) {
        case "ladder":
        default:
          break;
      }
      Object.assign(params, { [key]: color });
    }

    return dispatch({
      types,
      promise: ({ client }: any) =>
        client.get(`/${game}/game/player_list`, {
          params,
        }),
      color,
    });
  };
};

const load = (args = {}) => {
  return makeLoad({ ...args, types: [LOAD, LOAD_SUCCESS, LOAD_FAIL] });
};

const loadData = (gameId: number) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    return dispatch({
      types: [LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_FAIL],
      promise: ({ client }: any) =>
        client.get(`/v1/${state.info.game}/games/current/bets`, {
          params: {
            // asset: config.asset,
            // eslint-disable-next-line camelcase
            game_id: gameId || state.info.data?.game_id,
          },
        }),
      color: "all",
      areas: state.info.data?.areas,
      moneyButtonUserIdHash: state.auth.moneyButtonUserIdHash || state.auth.user?.moneyButtonUserIdHash,
      // eslint-disable-next-line camelcase
      precision: state.info.data?.decimal_place,
    });
  };
};

const loadLast = (args = {}) => {
  return makeLoad({
    page: 0,
    size: 10,
    ...args,
    types: [LOAD_LAST, LOAD_LAST_SUCCESS, LOAD_LAST_FAIL],
  });
};

const bittoParticipateConfirm = (txid: IBittoParticipateConfirmType): IBittoParticipateConfirm => {
  return {
    type: CONFIRM,
    txid,
  };
};

const search = ({ q }: any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    return dispatch({
      types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
      promise: ({ client }: any) =>
        client.get(`/${state.info.game}/search/current`, {
          params: {
            // asset: config.asset,
            q,
          },
        }),
    });
  };
};

const addData = (data: any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    return dispatch({
      type: ADD_DATA,
      data,
      areas: state.info.data?.areas,
      moneyButtonUserIdHash: state.auth.moneyButtonUserIdHash || state.auth.user?.moneyButtonUserIdHash,
      // eslint-disable-next-line camelcase
      precision: state.info.data?.decimal_place,
    });
  };
};

export {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  ADD_DATA,
  LOAD_LAST,
  LOAD_LAST_SUCCESS,
  LOAD_LAST_FAIL,
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  CLEAR,
  CONFIRM,
  clear,
  loadLast,
  bittoParticipateConfirm,
  load,
  loadData,
  search,
  addData,
};
