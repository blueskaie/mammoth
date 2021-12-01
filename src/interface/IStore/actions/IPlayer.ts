import { CLEAR, CONFIRM, LOAD, LOAD_FAIL, LOAD_SUCCESS } from "../../../redux/actions/player";

type IMakeLoadType =
  | ({
      color: string;
      types: typeof MakeLoadTypes;
      page?: number | undefined;
      size?: number | undefined;
    } & typeof MakeLoadTypeDefault)
  | any;
const MakeLoadTypeDefault = {};
const MakeLoadTypes = [LOAD, LOAD_SUCCESS, LOAD_FAIL];

type IBittoParticipateConfirmType = any;
export interface IBittoParticipateConfirm {
  type: typeof CONFIRM;
  txid: any;
}

export interface IClear {
  type: typeof CLEAR;
}

export type { IBittoParticipateConfirmType, IMakeLoadType };
