import { IConnectMMType, IConnectToMM, IIsOpen, IIsOpenPopUp } from "../../interface/IStore/actions/IConnect";

export const CONNECT_TO_MM = "CONNECT_TO_MM";
export const IS_CLOSED_POPUP = "IS_CLOSED_POPUP";

export const connectToMM = (isConnect: IConnectMMType): IConnectToMM => ({
  type: CONNECT_TO_MM,
  payload: isConnect,
});
export const isClosPopUp = (isOpen: IIsOpen): IIsOpenPopUp => ({
  type: IS_CLOSED_POPUP,
  payload: isOpen,
});
