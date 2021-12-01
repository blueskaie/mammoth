import { useContext, useEffect, useState } from "react";
import { DiceStyled } from "../../Dice/diceStyled";
import { FlipStyled } from "../flipStyled";
import Toolbar from "../../../components/Dice/Toolbar/Toolbar";
import { FlipContainer, mp3, StyledHeads, StyledImage, StyledTails, StyledButton } from "./styled";
import ChoosePart from "./ChoosePart";
import HEADS from "../assets/images/heads.png";
import TAILS from "../assets/images/tails.png";
import * as BetControlStyled from "../../../components/Dice/BetControls/betControlsStyled/BetControls";
import { EthersContext } from "../../../context/ethersContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import storage from "../../../utils/storage";
import { changeActiveName, changeClassName, clearLastGames } from "../../../redux/actions/gameWin";
import sleep from "../../../utils/sleep";
import { useGame } from "hooks/useGame";
import { CoinFlipContext } from "hardhat/SymfoniContext";
import { useTokenBalance } from "hooks/useTokenBalance";
import GenerateGroup from "container/input/GenerateGroup";
import Button from "../../../components/Dice/BetControls/Button";
import { GenerateAdvancedControls } from "components/Dice/BetControls/BetControls";
import Alert from "components/Alert/Alert";
import useAlert from "hooks/useAlert";

const audio: any = {
  audioFlip: new Audio(`${mp3.CoinFlip}`),
  audioWin: new Audio(`${mp3.FlipWin}`),
  audioLose: new Audio(`${mp3.FlipLose}`),
};

const FlipGame = ({currencyValue} : any) => {
  let timeOutId: any = null;
  const {
    coinFlipData: { maxBet, minBet, winCoefficient },
    account,
    loaded,
  } = useContext(EthersContext);
  const dispatch = useDispatch();
  const balance = useTokenBalance();
  const { activeName, className } = useSelector(
    (state: { gameWin: { activeName: string; className: string; win: number; lus: number } }) => state.gameWin
  );

  const flipContract = useContext(CoinFlipContext);
  const history = useHistory();
  const [isRealMode, setIsRealMode] = useState(!storage.has("flip"));
  const [isAudioEnabled, setIsAudioEnabled] = useState(!storage.has("flip.muted"));
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState(false);
  const [betAmount, setBetAmount] = useState<number>(minBet);
  const [isRolling, setIsRolling] = useState(false);
  const [isClick, setIsClick] = useState<null | boolean>(null);
  const [stopAnimation, setStopAnimation] = useState(true);
  const [flipMax, setMaxBetFlip] = useState(maxBet);
  const [selectedHead, setSelectedHead] = useState<number>(10);
  const [selectedTail, setSelectedTail] = useState<number>(20);
  const [betCount, setBetCount] = useState(1);
  const [wonHeads, setWonHeads] = useState<boolean>(true);
  const { alert, showAlert, hideAlert } = useAlert(2500);
  const setPayout = () => {};

  const { play, game } = useGame("FLIP");
  const audioPlay = (name: string) => {
    if (!isAudioEnabled) {
      return;
    }
    audio[name].play();
  };
  const audioStop = (name: string) => {
    if (!isAudioEnabled) {
      return;
    }
    audio[name].pause();
    audio[name].currentTime = 0;
  };
  const handleAudioToggle = () => {
    setIsAudioEnabled((prev) => !prev);
    if (!isAudioEnabled) {
      storage.set("flip.muted", true);
    } else {
      storage.remove("flip.muted");
    }
  };

  const generateResult = () => {
    setResult(false);
    setDisabled(true);
    if (isClick === null) {
      setIsClick(true);
    } else {
      setIsClick(!isClick);
    }
  };
  const handleChangeToTails = () => {
    setResult(false);
    setSelectedHead(10);
    setSelectedTail(15);
    dispatch(changeActiveName("TAILS"));
  };
  const handleChangeToHeads = () => {
    setResult(false);
    setSelectedHead(15);
    setSelectedTail(10);
    dispatch(changeActiveName("HEADS"));
  };
  const handleModeChange = (isRealMode: boolean) => {
    if (isRealMode) {
      storage.remove("flip");
    } else {
      storage.set("flip", true);
    }
    setIsRealMode(isRealMode);
  };
  const handleResult = (nameType: string) => {
    return new Promise((resolve: Function) => {
      const winClassName = activeName === "HEADS" ? 0 : 1;
      const win: boolean = nameType === winClassName.toString();
      // dispatch(changeClassName(nameType === "0" ? "heads" : "tails"));
      setWonHeads(nameType === "0" ? true : false);
      isWon(win, resolve);
      setDisabled(false);
      setResult(true);
      setIsRolling(false);
      setStopAnimation(true);
      audioStop("audioFlip");
    });
  };
  const isWon = async (won: any, resolve: any, betId?: any) => {
    audioStop("audioFlip");
    won ? showAlert(true, `Coin Flip Bet ${betId || betCount} - WIN`, "success") : showAlert(true, `Coin Flip Bet ${betId || betCount} - Loss`, "error");
    won ? audioPlay("audioWin") : audioPlay("audioLose");
    await sleep(2000);
    resolve();
  };
  const isBet = async () => {
    if (!isRealMode) {
      await sleep(2300);
      !isRolling && handleResult(className.toUpperCase() === activeName.toUpperCase() ? "0" : "1");
    } else {
      try {
        await play(activeName === "HEADS" ? 0 : 1, betAmount);
        await handleResult(game?.result.toString());
        timeOutId = setTimeout(() => {
          setDisabled(false);
          setResult(true);
          setIsRolling(false);
          setStopAnimation(true);
          audioStop("audioFlip");
        }, 2000);
      } catch (e) {
        if (e.code === -32603) {
          showAlert(true, `Insufficient ${currencyValue} balance`, "warning");
        }
        console.error(e);
        setIsRolling(false);
        dispatch(changeClassName(""))
      }
    }
  };
  const handleClick = () => {
    storage.set("flip", false);
    audioPlay("audioFlip");
    setStopAnimation(false);
    dispatch(changeClassName(""));
    generateResult();
    setIsRolling(true);
    isBet();
    if (!isRealMode) {
      timeOutId = setTimeout(() => {
        setDisabled(false);
        setResult(true);
        setIsRolling(false);
        setStopAnimation(true);
        audioStop("audioFlip");
        setBetCount(betCount + 1);
      }, 2000);
    }

  };

  useEffect(() => {
    setIsClick(null);
    dispatch(changeClassName(""));
    dispatch(clearLastGames());
    return () => {
      clearTimeout(timeOutId);
    };
  }, [history]);

  useEffect(() => {
    if (isClick !== null) {
      const flipResult = Math.random();
      if (flipResult <= 0.5) {
        dispatch(changeClassName("heads"));
      } else {
        dispatch(changeClassName("tails"));
      }
    }
  }, [isClick]);

  useEffect(() => {
    const _maxBet = (balance > maxBet && maxBet) || balance;
    setMaxBetFlip(_maxBet);
  }, [balance]);
  return (
    <DiceStyled.StyledBettingContainerCard>
      <Alert alert={alert.isOpen} alertType={alert.type} message={alert.message} hideAlert={hideAlert} />
      <DiceStyled.StyledChangeModeContainer isRealMode>
        <DiceStyled.StyledBettingToolbar>
          <Toolbar
            isRealMode={isRealMode}
            isRolling={false}
            isAudioEnabled={isAudioEnabled}
            onModeChange={handleModeChange}
            onAudioToggle={() => handleAudioToggle()}
            currencyValue={"4000"}
            minBet={minBet}
            maxPayout={maxBet * winCoefficient}
          />
        </DiceStyled.StyledBettingToolbar>
      </DiceStyled.StyledChangeModeContainer>
      <FlipContainer>
        <DiceStyled.StyledBetiingFlipCards>
          <ChoosePart
            className="tailsPart"
            onClick={handleChangeToTails}
            active={activeName === "TAILS"}
            name="TAILS"
            multiplier={winCoefficient}
            disabled={activeName === "TAILS" || disabled}
          />
          <StyledImage isTails={className === "tails"} isStopAnimation={stopAnimation}>
            <StyledHeads
              isTails={activeName === "HEADS"}
              className={className}
              isWon={result && wonHeads}
              index={selectedHead}
            >
              <img src={HEADS} alt="" />
            </StyledHeads>
            <StyledTails
              isTails={activeName === "TAILS"}
              className={className}
              isWon={result && !wonHeads}
              index={selectedTail}
            >
              <img src={TAILS} alt="" />
            </StyledTails>
          </StyledImage>
          <ChoosePart
            className="headsPart"
            onClick={handleChangeToHeads}
            isHeads
            active={activeName === "HEADS"}
            name="HEADS"
            multiplier={winCoefficient}
            disabled={activeName === "HEADS" || disabled}
          />
        </DiceStyled.StyledBetiingFlipCards>
        <FlipContainer>
          <FlipStyled.StyledTransactionWait hidden={!isRolling}>
            <FlipStyled.StyledTransactionWaitText>
              Waiting for your transaction to confirm...
            </FlipStyled.StyledTransactionWaitText>
          </FlipStyled.StyledTransactionWait>
          <BetControlStyled.StyledControlsFlip>
            {/*@ts-ignore*/}
            <GenerateGroup
              borderRadios="9px"
              padding={"10px 0 15px 0px"}
              label={"Bet Amount"}
              value={balance && betAmount}
              handler={setBetAmount}
              step={10}
              min={minBet}
              max={flipMax}
              nextInput={null}
              handleRef={handleChangeToTails}
              disabled={!isRealMode}
            />
            <StyledButton>
              <Button
                {...{
                  title: { demo: "Flip", real: "BET" },
                  account,
                  loaded,
                  isRealMode,
                  isRolling,
                  alert: { isOpen: false, message: "" },
                  active: false,
                  handleRollClick: handleClick,
                  gameContract: flipContract,
                }}
                flip
              />
            </StyledButton>
            <GenerateGroup
              borderRadios="9px"
              padding={"10px 0 15px 0px"}
              label={"Payout"}
              value={balance && (betAmount * winCoefficient)}
              handler={setPayout}
              step={10}
              min={minBet}
              max={flipMax}
              nextInput={null}
              handleRef={handleChangeToTails}
              disabled={true}
            />
          </BetControlStyled.StyledControlsFlip>
          {GenerateAdvancedControls(betAmount, 10, setBetAmount, minBet, flipMax, !isRealMode, true)}
          {/* <BetHistoryByImage className={className} isWin={className.toUpperCase() === activeName.toUpperCase()} /> */}
        </FlipContainer>
      </FlipContainer>
    </DiceStyled.StyledBettingContainerCard>
  );
};

export default FlipGame;
