import React from "react";
import { DiceStyled } from "../diceStyled";
import MyLastGames from "../../../components/DiceFunctionalComponents/MyLastGames";
import Scoreboard from "../../../components/Dice/Scoreboard/Scoreboard";
import DiceScoreboard from "../../../components/Dice/Scoreboard/DiceScores";

const ImagesAndHistoryMap = () => {
  const historyAll: [] = [];

  return (
    <>
      <DiceStyled.StyledGlobalStats />
      <DiceStyled.StyledSidebarContainer>
        <MyLastGames />
        <DiceStyled.StyledScoreboardContainerCard>
          <Scoreboard>
            <DiceScoreboard historyData={historyAll.length ? historyAll.map(({ result }) => result) : []} />
          </Scoreboard>
        </DiceStyled.StyledScoreboardContainerCard>
      </DiceStyled.StyledSidebarContainer>
    </>
  );
};

export default ImagesAndHistoryMap;
