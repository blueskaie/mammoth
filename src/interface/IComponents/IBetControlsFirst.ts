import { Cookies } from "react-cookie";

type IBetControlsFirstProp = {
  isrealmode: boolean;
  number: number;
  type: string;
  amount: number;
  address: string;
  isRolling: boolean;
  onRoll: Function;
  betStep: number;
  minBet: number;
  maxPayout: number;
  onNumberChange: Function;
  onTypeChange: Function;
  onAmountChange: Function;
  accessAvailable: boolean;
  minNumber: number;
  maxNumber: number;
  maintenance: boolean;
  decimals: number;
  loading: boolean;
  cookies: Cookies;
  currencyValue: string;
  disabled: boolean;
};
type IBetControlsFirstState = {
  focusedInputId: null;
  buttonDisabled: boolean;
  active: boolean;
};

export type { IBetControlsFirstProp, IBetControlsFirstState };
