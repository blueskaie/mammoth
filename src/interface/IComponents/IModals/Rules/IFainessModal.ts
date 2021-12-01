type IFainessModalProp = {
  btnClass?: string;
  minBet?: number;
  maxPayout?: number;
  decimals?: number;
};
type ITabs = {
  rules: (props: IFainessModalProp, state: IState, close: Function) => any;
  limits: (
    { minBet, maxPayout, decimals }: { minBet: number; maxPayout: number; decimals: number },
    state: any,
    close: Function
  ) => any;
};
type IState = {
  open: boolean;
  activeTab: string;
};

export type { IFainessModalProp, ITabs, IState };
