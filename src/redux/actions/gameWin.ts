export const GAME_WIN_OR_NOT = "GAME_WIN_OR_NOT";
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
export const SCROLL_TO_HISTORY = "SCROLL_TO_HISTORY";
export const CHANGE_CLASS_NAME = "CHANGE_CLASS_NAME";
export const CHANGE_ACTIVE_NAME = "CHANGE_ACTIVE_NAME";
export const CLEAR_WIN_LUS = "CLEAR_WIN_LUS";

export const gameWinOrNot = (win: boolean | null) => {
  return {
    type: GAME_WIN_OR_NOT,
    win,
  };
};
export const setActiveTab = (number: number): { type: typeof SET_ACTIVE_TAB; number: number } => {
  return {
    type: SET_ACTIVE_TAB,
    number,
  };
};
export const scrollToHistory = ({
  scroll,
}: {
  scroll: boolean;
}): { type: typeof SCROLL_TO_HISTORY; scroll: boolean } => ({
  type: SCROLL_TO_HISTORY,
  scroll,
});
export const changeActiveName = (name = "HEADS"): { type: typeof CHANGE_ACTIVE_NAME; name: string } => ({
  type: CHANGE_ACTIVE_NAME,
  name,
});
export const changeClassName = (name = ""): { type: typeof CHANGE_CLASS_NAME; name: string } => ({
  type: CHANGE_CLASS_NAME,
  name,
});
export const clearLastGames = (): { type: typeof CLEAR_WIN_LUS } => ({
  type: CLEAR_WIN_LUS,
});
