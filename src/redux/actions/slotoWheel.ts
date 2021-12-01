export const CLICK_TO_COEFFICIENT = "CLICK_TO_COEFFICIENT";
export const RUN_GAME = "RUN_GAME";
export const GET_MAY_COLOR = "GET_MAY_COLOR";
export const STOP_COLOR_NUMBER = "STOP_COLOR_NUMBER";

export const clickCoefficient = ({
  coefficient,
  id,
}: {
  coefficient: string;
  id: number;
}): {
  type: typeof CLICK_TO_COEFFICIENT;
  payload: { coefficient: string; id: number };
} => ({
  type: CLICK_TO_COEFFICIENT,
  payload: { coefficient, id },
});

export const runGame = (run: boolean): { type: typeof RUN_GAME; run: boolean } => ({
  type: RUN_GAME,
  run,
});
export const getColor = (
  color: string
): {
  type: typeof GET_MAY_COLOR;
  color: string;
} => ({
  type: GET_MAY_COLOR,
  color,
});

export const stopColorNumber = (
  number: number
): {
  type: typeof STOP_COLOR_NUMBER;
  number: number;
} => ({
  type: STOP_COLOR_NUMBER,
  number,
});
