import { Cookies } from "react-cookie";

type IDiceProps = {
  cookies: Cookies;
  user: any;
  gameId?: number;
  loadData: Function;
  address?: string;
  betStep?: number;
  betDecimals?: number;
  minBet?: number;
  maxPayout?: number;
  minNumber?: number;
  maxNumber?: number;
  historyAll?: Array<{}>;
  historyMy?: Array<{}>;
  historyHigh?: Array<{}>;
  accessAvailable: boolean;
  curBackground?: string;
  curColor?: string;
  curBorder?: string;
  curBorderRadius?: string;
  curOpacity?: string;
};

type IDiceState = {
  loading: boolean;
  isRealMode: boolean;
  isRolling: boolean;
  result: any;
  betAmount: any;
  betType: any;
  betNumber: any;
  isAudioEnabled: any;
  currencyValue: any;
  lemurBalance: number;
  apeBalance: number;
  trxBalance: number;
  lemurSupply: number;
  apeWagerRate: number;
  trxWagerRate: number;
  historyAll: [];
  historyResult: [];
};

export type { IDiceProps, IDiceState };
