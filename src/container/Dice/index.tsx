import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";
import { DiceStyled } from "./diceStyled";
import { Helmet } from "react-helmet-async";
import History from "../../components/Dice/History/History";
import BetScrollControl from "./components/BetScrollControl";
import { clearLastGames } from "../../redux/actions/gameWin";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Dice = ({ historyHigh, user }: any) => {
  const loading = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const [currencyValue] = useState(storage.get("currency") || "XBLZD");

  const handleClickLogin = () => {
    if (user) {
      return;
    }
  };

  useEffect(() => {
    dispatch(clearLastGames());
  }, [history]);

  return (
    <DiceStyled.StyledBodyWrapper>
      <Helmet
        bodyAttributes={{
          //@ts-ignore
          style: "#E5E5E5;",
        }}
      >
        <title>Dice</title>
        <meta property="og:title" content="Provably fair gambling!" />
        <meta name="description" content="Provably fair gambling!" />
      </Helmet>

      <DiceStyled.StyledDiceContainer>
        <BetScrollControl loading={loading} currencyValue={currencyValue} />
        <DiceStyled.StyledHistoryContainer>
          <History
            high={historyHigh}
            onLogin={handleClickLogin}
            loading={loading}
            currencyType={currencyValue}
            withGradient
            contractParams={{ ContractName: "DiceRoll", JSON_NAME: "DICE_JSON" }}
          />
        </DiceStyled.StyledHistoryContainer>
      </DiceStyled.StyledDiceContainer>
    </DiceStyled.StyledBodyWrapper>
  );
};

export default Dice;
