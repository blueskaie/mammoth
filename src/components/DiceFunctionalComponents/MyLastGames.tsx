import { DiceStyled } from "../../container/Dice/diceStyled";
import { useDispatch, useSelector } from "react-redux";
import { scrollToHistory, setActiveTab } from "../../redux/actions/gameWin";

const MyLastGames = () => {
  const gameWin = useSelector((state: { gameWin: any }) => state.gameWin);
  const { win, lus }: { win: number; lus: number } = gameWin;
  const dispatch = useDispatch();

  const goToHistory = () => {
    dispatch(setActiveTab(1));
    dispatch(scrollToHistory({ scroll: true }));
    const setTImeID = setTimeout(() => {
      dispatch(scrollToHistory({ scroll: false }));
    }, 10);
    return () => {
      dispatch(scrollToHistory({ scroll: false }));
      clearTimeout(setTImeID);
    };
  };

  return (
    <DiceStyled.StyledStatsContainerCard>
      <DiceStyled.StyledStatsContainerCardHeader>
        <DiceStyled.StyledH2>MY LAST GAMES</DiceStyled.StyledH2>
      </DiceStyled.StyledStatsContainerCardHeader>
      <DiceStyled.StyledStatsContainerCardFooter>
        <DiceStyled.StyledDiv color="rgba(45, 211, 191, 1)">
          <p>WINS</p>
          <span>{win}</span>
        </DiceStyled.StyledDiv>
        <DiceStyled.StyledDiv color="rgba(243, 71, 102, 1)">
          <p>LOSES</p>
          <span>{lus}</span>
        </DiceStyled.StyledDiv>
      </DiceStyled.StyledStatsContainerCardFooter>
      <DiceStyled.StyledLinkA onClick={() => goToHistory()}>View All</DiceStyled.StyledLinkA>
    </DiceStyled.StyledStatsContainerCard>
  );
};

export default MyLastGames;
