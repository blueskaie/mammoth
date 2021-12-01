import {
  CLEAR_SAVED_TOAST,
  GET_ACCESS_AVAILABLE,
  GET_ACCESS_AVAILABLE_FAIL,
  GET_ACCESS_AVAILABLE_SUCCESS,
  SAVE_TOAST,
  SET_SHOW_STATISTICS,
} from "../../../redux/actions/info";

type IIsLoadedType = any;
type ISaveToastType = any;
type ISetShowStatisticsType = any;

const IGetAccessAvailableType = [GET_ACCESS_AVAILABLE, GET_ACCESS_AVAILABLE_SUCCESS, GET_ACCESS_AVAILABLE_FAIL];

export interface IIsLoaded {
  globalState: { info: { loaded: boolean } };
}
export interface IGetAccessAvailable {
  types: typeof IGetAccessAvailableType;
  promise: ({ client }: any) => any;
}
export interface ISaveToast {
  type: typeof SAVE_TOAST;
  data: any;
}
export interface IClearSavedToast {
  type: typeof CLEAR_SAVED_TOAST;
}
export interface ISetShowStatistics {
  type: typeof SET_SHOW_STATISTICS;
  state: ISetShowStatisticsType;
}

export type IInfo = IIsLoaded | IGetAccessAvailable | ISaveToast | IClearSavedToast | ISetShowStatistics;

export type { IIsLoadedType, ISaveToastType, ISetShowStatisticsType };
