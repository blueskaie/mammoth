type IInitialState = {
  iAmAdult: boolean;
  loaded: boolean;
  maintenance: IDefaultMaintenance;
  accessAvailable: boolean;
  game: null;
  oldGame: boolean;
  data: {
    totalPlayerCount: number;
    totalBalances: string;
    decimal_place: number;
  };
  savedToast: Array<any>;
  showStatistics: boolean;
  loading: boolean;
  error?: any;
};
type IDefaultMaintenance = {
  landing: boolean;
  lottery: boolean;
  turtlerace: boolean;
  laddergame: boolean;
  baccarat: boolean;
  dice: boolean;
};

export type { IDefaultMaintenance, IInitialState };
