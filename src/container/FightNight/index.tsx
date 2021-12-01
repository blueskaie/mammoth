import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";
import { Helmet } from "react-helmet-async";
// import Scoreboard from "../../components/Dice/Scoreboard/Scoreboard";
import { DiceStyled } from "../Dice/diceStyled";
// import FlipScores from "./components/FlipScores";
import History from "../../components/Dice/History/History";
import { StyledBodyWrapper } from "../Wheel/components/styles";
// import MyLastGames from "../../components/DiceFunctionalComponents/MyLastGames";
import FightNight from "./components/FightNightGame";
import { clearLastGames } from "../../redux/actions/gameWin";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Flip = () => {
  const loading = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const [currencyValue] = useState(storage.get("currency") || "XBLZD");

  useEffect(() => {
    dispatch(clearLastGames());
  }, [history]);

  return (
    <StyledBodyWrapper>
      <Helmet>
        <title>Fight Night</title>
        <meta property="og:title" content="Provably fair gambling!" />
        <meta name="description" content="Provably fair gambling!" />
      </Helmet>
      <DiceStyled.StyledDiceContainer>
        <DiceStyled.StyledGlobalStats />
        <FightNight currencyValue={currencyValue} />
        <DiceStyled.StyledHistoryContainer>
          <History
            currencyType={"XBLZD"}
            loading={loading}
            contractParams={{ ContractName: "CoinFlip", JSON_NAME: "FLIP_JSON" }}
          />
        </DiceStyled.StyledHistoryContainer>
      </DiceStyled.StyledDiceContainer>
    </StyledBodyWrapper>
  );
};

export default Flip;
