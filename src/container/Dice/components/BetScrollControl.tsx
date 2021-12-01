import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DiceStyled, mp3 } from "../diceStyled";
import BetScroller from "../../../components/Dice/BetScroller/BetScroller";
import BetControls from "../../../components/Dice/BetControls/BetControls";
import Toolbar from "../../../components/Dice/Toolbar/Toolbar";
import BetControlsFirst from "../../../components/Dice/BetControls/BetControlsFirst";
import storage from "../../../utils/storage";
import { EthersContext } from "context/ethersContext";
import { useDispatch, useSelector } from "react-redux";
import minmax from "../../../utils/minmax";
import numberFormat from "../../../utils/numberFormat";
import sleep from "../../../utils/sleep";
import { gameWinOrNot } from "redux/actions/gameWin";
import { contractDicePlay } from "hooks/contractDicePlay";
import styled from "styled-components";
import TopBar from "../../../components/Dice/TopBar/TopBar";
import { useTokenBalance } from "hooks/useTokenBalance";
import Alert from "components/Alert/Alert";
import useAlert from "hooks/useAlert";

const audio: any = {
  audioClick: new Audio(`${mp3.audioClickSound}`),
  audioRolling: new Audio(`${mp3.audioRollingSound}`),
  audioWin: new Audio(`${mp3.audioWinSound}`),
  audioLose: new Audio(`${mp3.audioLoseSound}`),
};

const BetScrollControl = ({ loading, currencyValue }: any) => {
  const balance = useTokenBalance();
  const resetTimeout: any = null;
  const dispatch = useDispatch();
  const {
    data: { decimal_place, gameId },
    accessAvailable,
  } = useSelector(
    (state: { info: { data: { decimal_place: number; gameId: number }; accessAvailable: boolean } }) => state.info
  );
  const {
    diceRollData: { maxPayout, minNumber, address, minBet, maxBet, maxNumber },
    diceRoll,
    account,
  } = useContext(EthersContext);
  const betStep = useMemo(() => {
    const pow = 10 ** decimal_place;
    return 1 / pow;
  }, [decimal_place]);
  const [isRealMode, setIsRealMode] = useState(!storage.has("dice"));
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [betAmount, setBetAmount] = useState(storage.get("dice.bet") || 1);
  const [betType, setBetType] = useState(() => storage.get("dice.area") || "over");
  const [betNumber, setBetNumber] = useState(storage.get("dice.roll") || 51);
  const [isAudioEnabled, setIsAudioEnabled] = useState(!storage.has("dice.muted"));
  const [triggerLuckyNumber, setTriggerLuckyNumber] = useState(false);
  const [betCount, setBetCount] = useState(1);
  const { alert, showAlert, hideAlert } = useAlert(5000);
  const audioPlay = (name: string) => {
    if (!isAudioEnabled) {
      return;
    }
    audio[name].play();
  };

  const handleBetNumberChange = (v: {}) => {
    const bNumber = minmax(v, minNumber, maxNumber);
    if (betNumber < 5) {
      storage.set("dice.roll", "5");
      setBetNumber(5);
    } else {
      storage.set("dice.roll", bNumber);
      setBetNumber(bNumber);
    }
  };

  const handleBetAmountChange = (v: string | number) => {
    const betAmount = Math.max(minBet, numberFormat(v));
    storage.set("dice.bet", betAmount);
    setBetAmount(betAmount);
  };
  const audioStop = (name: string) => {
    if (!isAudioEnabled) {
      return;
    }
    audio[name].pause();
    audio[name].currentTime = 0;
  };

  const func = async (callback = () => {}) => {
    if (!isRealMode) {
      audioPlay("audioRolling");
      await sleep(300);
      setTimeout(() => {
        handleResult(Math.round(Math.random() * 100));
      }, 600);
      setBetCount(betCount + 1);
    } else {
      try {
        const game = await contractDicePlay(
          {
            diceRoll,
            currentAddress: account,
          },
          betNumber,
          betType,
          betAmount,
          () => {
            audioPlay("audioRolling");
            setTriggerLuckyNumber(true);
          }
        );
        await handleResult(game.result.toNumber(), game.id.toNumber());
      } catch (error) {
        if (error.error.code === -32603) {
          showAlert(true, `Insufficient ${currencyValue} balance`, "warning");
        }
        setIsRolling(false);
        setTriggerLuckyNumber(false);
        setResult(null);
        //@ts-ignore
        callback(error);
      }
    }
  };
  const handleRoll = () => {
    audioPlay("audioClick");
    if (resetTimeout) {
      clearTimeout(resetTimeout);
    }
    setIsRolling(true);
    setResult(null);
    if (!isRealMode) {
      setTriggerLuckyNumber(true);
    }
    func();
  };
  const handleResult = (result: number, betId?: number) => {
    return new Promise((resolve: Function) => {
      const resultArea = result > betNumber ? "over" : "under";
      const won = betType === resultArea;
      dispatch(gameWinOrNot(won));
      setResult(result);
      setIsRolling(false);
      setTriggerLuckyNumber(false);
      isWon(won, resolve, betId);
    });
  };
  const isWon = async (won: any, resolve: any, betId?: any) => {
    audioStop("audioRolling");
    setTriggerLuckyNumber(false);
    won ? showAlert(true, `Dice Bet ${betId || betCount} - WIN`, "success") : showAlert(true, `Dice Bet ${betId || betCount} - Loss`, "error");
    won ? audioPlay("audioWin") : audioPlay("audioLose");
    await sleep(2000);
    resolve();
  };
  const handleBetTypeChange = useCallback(
    (betTyp: string) => {
      setBetType(betTyp);
      storage.set("dice.area", betTyp === "under" ? "under" : "over");
    },
    [betType]
  );
  const handleModeChange = (isRealMod: boolean) => {
    if (isRealMod) {
      storage.remove("dice");
    } else {
      storage.set("dice", true);
    }
    setIsRealMode(isRealMod);
  };
  const handleAudioToggle = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  useEffect(() => {
    if (!isAudioEnabled) {
      storage.set("dice.muted", true);
    } else {
      storage.remove("dice.muted");
    }
  }, [isAudioEnabled]);
  useEffect(() => {
    setBetNumber(minmax(betNumber, minNumber, maxNumber));
    return () => {
      setBetNumber(5049);
    };
  }, [betType]);

  // useEffect(() => {
  //   storage.remove("dice");
  //   setIsRealMode(isRealMode);
  // }, []);
  return (
    <div>
      <Alert alert={alert.isOpen} alertType={alert.type} message={alert.message} hideAlert={hideAlert} />
      <DiceStyled.StyledBettingContainerCard>
        <DiceStyled.StyledSidebarTogglerContainer />
        <DiceStyled.StyledChangeModeContainer isRealMode>
          <DiceStyled.StyledBettingToolbar>
            <Toolbar
              isRealMode={isRealMode}
              isRolling={isRolling}
              isAudioEnabled={isAudioEnabled}
              onModeChange={handleModeChange}
              onAudioToggle={handleAudioToggle}
              currencyValue={currencyValue}
              minBet={minBet}
              maxPayout={maxPayout}
            />
          </DiceStyled.StyledBettingToolbar>
        </DiceStyled.StyledChangeModeContainer>
        <StyledContainer>
          <TopBar triggerLuckyNumber={triggerLuckyNumber} betType={betType} result={result} betNumber={betNumber} />
          <DiceStyled.StyledChangeModeDiv>
            <BetControlsFirst
              isrealmode={isRealMode}
              amount={betAmount}
              type={betType}
              disabled={isRolling}
              number={betNumber}
              isRolling={isRolling}
              betStep={betStep}
              minBet={minBet}
              maxPayout={maxPayout}
              address={address}
              //@ts-ignore
              gameId={gameId}
              decimals={4}
              minNumber={minNumber}
              maxNumber={maxNumber}
              onNumberChange={handleBetNumberChange}
              onAmountChange={handleBetAmountChange}
              onTypeChange={handleBetTypeChange}
              onRoll={handleRoll}
              accessAvailable={accessAvailable}
              loading={loading}
              currencyValue={currencyValue}
            />
          </DiceStyled.StyledChangeModeDiv>
          <DiceStyled.StyledBettingScrollerContainer>
            <BetScroller
              type={betType}
              result={result}
              number={betNumber}
              minNumber={minNumber}
              maxNumber={maxNumber}
              disabled={isRolling}
              audioPlay={audioPlay}
              onNumberChange={handleBetNumberChange}
              onTypeChange={handleBetTypeChange}
              loading={loading}
            />
          </DiceStyled.StyledBettingScrollerContainer>
          <DiceStyled.StyledBettingControlsContainer>
            <BetControls
              //@ts-ignore
              isRealMode={isRealMode}
              amount={betAmount}
              balance={balance}
              type={betType}
              number={betNumber}
              isRolling={isRolling}
              betStep={betStep}
              minBet={minBet}
              maxBet={maxBet}
              maxPayout={maxPayout}
              address={address}
              gameId={gameId}
              minNumber={minNumber}
              maxNumber={maxNumber}
              onNumberChange={handleBetNumberChange}
              onAmountChange={handleBetAmountChange}
              onTypeChange={handleBetTypeChange}
              onRoll={handleRoll}
              decimals={4}
              accessAvailable={accessAvailable}
              loading={loading}
              currencyValue={currencyValue}
            />
          </DiceStyled.StyledBettingControlsContainer>
        </StyledContainer>
      </DiceStyled.StyledBettingContainerCard>
    </div>
  );
};

export default BetScrollControl;

const StyledContainer = styled.div`
  background: #162338;
  padding: 24px 60px 16px;
  border-radius: 5px;
  @media (max-width: 920px) {
    padding: 24px 30px 70px;
  }

  @media (max-width: 520px) {
    padding: 24px 20px 70px;
  }
`;
