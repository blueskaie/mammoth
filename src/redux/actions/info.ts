import {
  IClearSavedToast,
  IGetAccessAvailable,
  IIsLoaded,
  IIsLoadedType,
  ISaveToast,
  ISaveToastType,
  ISetShowStatistics,
  ISetShowStatisticsType,
} from "../../interface/IStore/actions/IInfo";

const LOAD = "game/info/LOAD";
const LOAD_SUCCESS = "game/info/LOAD_SUCCESS";
const LOAD_FAIL = "game/info/LOAD_FAIL";
const GET_ACCESS_AVAILABLE = "game/info/GET_ACCESS_AVAILABLE";
const GET_ACCESS_AVAILABLE_SUCCESS = "game/info/GET_ACCESS_AVAILABLE_SUCCESS";
const GET_ACCESS_AVAILABLE_FAIL = "game/info/GET_ACCESS_AVAILABLE_FAIL";
const SAVE_TOAST = "game/info/SAVE_TOAST";
const CLEAR_SAVED_TOAST = "game/info/CLEAR_SAVED_TOAST";
const SET_SHOW_STATISTICS = "game/info/SET_SHOW_STATISTICS";

const isLoaded = (globalState: IIsLoadedType): IIsLoaded => {
  return globalState.info && globalState.info.loaded;
};
const load = () => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    return dispatch({
      types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
      promise: ({ client }: any) =>
        client.get(`/${state.info.game}/game/info`, {
          params: {
            // asset: config.asset,
          },
        }),
    });
  };
};
const getAccessAvailable = (): IGetAccessAvailable => {
  return {
    types: [GET_ACCESS_AVAILABLE, GET_ACCESS_AVAILABLE_SUCCESS, GET_ACCESS_AVAILABLE_FAIL],
    promise: ({ client }) => client.get("/v1/ping"),
  };
};
const saveToast = (data: ISaveToastType): ISaveToast => {
  return {
    type: SAVE_TOAST,
    data,
  };
};
const clearSavedToast = (): IClearSavedToast => {
  return {
    type: CLEAR_SAVED_TOAST,
  };
};
const setShowStatistics = (state: ISetShowStatisticsType): ISetShowStatistics => {
  return {
    type: SET_SHOW_STATISTICS,
    state,
  };
};

export {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  GET_ACCESS_AVAILABLE,
  GET_ACCESS_AVAILABLE_SUCCESS,
  GET_ACCESS_AVAILABLE_FAIL,
  SAVE_TOAST,
  CLEAR_SAVED_TOAST,
  SET_SHOW_STATISTICS,
  isLoaded,
  load,
  getAccessAvailable,
  saveToast,
  clearSavedToast,
  setShowStatistics,
};
