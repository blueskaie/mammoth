export const chainIdToNumber = (_chineID: string) => {
  const id = _chineID.split("x")[1];
  return parseInt(id, 16);
};
