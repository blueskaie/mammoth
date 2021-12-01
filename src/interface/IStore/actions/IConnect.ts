import { CONNECT_TO_MM, IS_CLOSED_POPUP } from "../../../redux/actions/connect";

type IConnectMMType = boolean;
type IIsOpen = boolean;

export interface IIsOpenPopUp {
  type: typeof IS_CLOSED_POPUP;
  payload: IIsOpen;
}
export interface IConnectToMM {
  type: typeof CONNECT_TO_MM;
  payload: IConnectMMType;
}

type ConnectReducers = IConnectToMM | IIsOpenPopUp;

export type { IConnectMMType, ConnectReducers, IIsOpen };
