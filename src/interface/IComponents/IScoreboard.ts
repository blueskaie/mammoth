type IScoreboardProp = {
  historyData: Array<number>;
} & typeof defaultProps;
const defaultProps = {
  historyData: [],
};

type IScoreboardState = {
  dropdownOpen: null | string;
  roundsCount: number;
  activeType: number;
};

export type { IScoreboardProp, IScoreboardState };
