export const getToken = (tok: string) => {
  const n = 5;
  const strLast = tok.substr(-4, 4);
  return tok.length > n ? tok.substr(0, n) + `...${strLast}` : tok;
};
