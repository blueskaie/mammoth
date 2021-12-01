export const singleGameRow = ({ id, choice, bet, over, prize, result }: any) => {
  return (
    //td change to th for border-radius
    <tr key={id} className={`${prize > 0 ? "won" : "lost"}`}>
      <th>{id}</th>
      <th>{bet.toFixed(4)}</th>
      <th>{(prize / bet).toFixed(4)}X</th>
      <th>
        {over ? "<" : ">"} {choice}
      </th>
      <th>{result}</th>
      <th className={` ${prize > 0 ? "won" : "lost"}`}>{prize.toFixed(4)}</th>
    </tr>
  );
};

export const allGamesRow = ({ game, player, id, bet, prize }: any) => {
  return (
    //td change to th for border-radius
    <tr key={id} className={`${prize > 0 ? "won" : "lost"}`}>
      <th>{game || "Dice"}</th>
      <th>
        {player.substr(0, 5)}...{player.substr(-5)}
      </th>
      <th>{bet.toFixed(4)}</th>
      <th>{(prize / bet).toFixed(4)}X</th>
      {/* <th>
        {over ? "<" : ">"} {choice}
      </th>
      <th>{result}</th> */}
      <th className={` ${prize > 0 ? "won" : "lost"}`}>{prize.toFixed(4)}</th>
    </tr>
  );
};
