type IPreviousProps = {
  btnClass?: string;
  loadGames: Function;
  historyHasMore: boolean;
  historyData: Array<any>;
  lastLoadedGameId: number;
  searchHistory: (searchTxId: string) => any;
  search: {
    loaded: boolean;
    hasMore: boolean;
    data: any;
  };
  currencyValue: string;
} & typeof defaultProps;

const defaultProps = {
  historyData: [],
  btnClass: null,
};
type IStoreState = {
  info: { oldGame: null | string; game: boolean };
  player: {
    hasMore: boolean;
    data: Array<any>;
    search: {
      loaded: boolean;
      hasMore: boolean;
      data: Object;
    };
  };
  historyData: [];
};
export type { IPreviousProps, IStoreState };
