export const getRandomNumber = (arr: Array<string | number>) => Math.floor(Math.random() * arr.length);

export const generateStopRandom = (data: any): { color: string; number: number } => {
  const colorsArr = Object.keys(data);
  const color = getRandomNumber(colorsArr);
  const number = getRandomNumber(data[colorsArr[color]]);
  return {
    color: colorsArr[color],
    number: data[colorsArr[color]][number],
  };
};
