import React from "react";
import * as HomeSt from "components/Home/homeStyled/HomeStyled";
import { gameData } from "components/Home/gamesData";
import GameLink from "components/Home/GameLink";
import styled from "styled-components";
import History from "components/Dice/History/History";

const Originals = () => {
  return (
    <StyledOriginalsContainer>
      <HomeSt.GameBlocks>
        {gameData.map((list) => (
          <GameLink key={list.id} {...list} />
        ))}
      </HomeSt.GameBlocks>
      <History
        margin="100px auto 0"
        currencyType={"XBLZD"}
        contractParams={{ ContractName: "DiceRoll", JSON_NAME: "DICE_JSON" }}
        paginationFalse
      />
    </StyledOriginalsContainer>
  );
};

export default Originals;

const StyledOriginalsContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 0 70px;
`;
