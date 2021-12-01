type IHistoryProps = {
  user?: Object;
  onLogin?: Function;
  decimals?: number;
  loading?: boolean;
  currencyType?: string;
  loadGames?: (arg: any) => any;
  margin?: string;
  mobileMargin?: string;
  high?: any;
  paginationFalse?: boolean;
  withGradient?: boolean;
  contractParams?: {
    ContractName: string;
    JSON_NAME: string;
  };
};

type ITabs = {
  key: string;
  title: string;
};

export type { IHistoryProps, ITabs };
