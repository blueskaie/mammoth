type IVerifyProps = {
  loadGames: Function;
  historyHasMore: boolean;
  historyData: Array<any>;
} & typeof defaultProps;
const defaultProps = {
  historyData: [],
};

type IState = {
  historyLoading: boolean;
};
export type { IVerifyProps, IState };
