import { useContext, useEffect, useState } from "react";
import { DiceStyled } from "../../Dice/diceStyled";
import { FlipStyled } from "../flipStyled";
import FightNight from "../assets/images/FightNight.png";
import { FightNightContainer, BetAmount, mp3, RookiexbtStyled, StyledButton, StyledSelect, CheckBoxGroup, Input } from "./styled";
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
import Select from "../../../components/Dice/BetControls/Select";
import Alert from "components/Alert/Alert";
import useAlert from "hooks/useAlert";

const audio: any = {
  audioFlip: new Audio(`${mp3.CoinFlip}`),
  audioWin: new Audio(`${mp3.FlipWin}`),
  audioLose: new Audio(`${mp3.FlipLose}`),
};

const FightNightGame = ({currencyValue} : any) => {
  let timeOutId: any = null;
  const {
    coinFlipData: { maxBet, minBet },
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
  const [isRealMode] = useState(!storage.has("flip"));
  const [isAudioEnabled] = useState(!storage.has("flip.muted"));
  const [betAmount, setBetAmount] = useState<number>(minBet);
  const [isRolling, setIsRolling] = useState(false);
  const [isClick, setIsClick] = useState<null | boolean>(null);
  const [flipMax, setMaxBetFlip] = useState(maxBet);
  const [betCount, setBetCount] = useState(1);
  const [currentToken, setCurrentToken] = useState("BNB");
  const [isRookiexbt, setIsRookiexbt] = useState<boolean | undefined>(true);
  const { alert, showAlert, hideAlert } = useAlert(2500);
  const changeCurrentToken = () => {
    currentToken === "BNB" ? setCurrentToken('xBLDZ') : setCurrentToken("BNB");
  }
  const choosePlayer = () =>{
    setIsRookiexbt(isRookiexbt ? false: true);
  } 
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
  const generateResult = () => {
    if (isClick === null) {
      setIsClick(true);
    } else {
      setIsClick(!isClick);
    }
  };
  const handleChangeToTails = () => {
    dispatch(changeActiveName("TAILS"));
  };
  const handleResult = (nameType: string) => {
    return new Promise((resolve: Function) => {
      const winClassName = activeName === "HEADS" ? 0 : 1;
      const win: boolean = nameType === winClassName.toString();
      isWon(win, resolve);
      setIsRolling(false);
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
          setIsRolling(false);
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
    dispatch(changeClassName(""));
    generateResult();
    setIsRolling(true);
    isBet();
    if (!isRealMode) {
      timeOutId = setTimeout(() => {
        setIsRolling(false);
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
      <FightNightContainer>
        <DiceStyled.StyledBetiingFightNightCards>
          <RookiexbtStyled>
            <FlipStyled.RookiexbtTitle>
              ROOKIEXBT
            </FlipStyled.RookiexbtTitle>
            <FlipStyled.Coin>
              <FlipStyled.CoinValue>
                500.005463
              </FlipStyled.CoinValue>
              <FlipStyled.CoinName>
                BNB
              </FlipStyled.CoinName>
            </FlipStyled.Coin>
            <FlipStyled.Coin>
              <FlipStyled.CoinValue>
                500.005463
              </FlipStyled.CoinValue>
              <FlipStyled.CoinName>
                xBLZD
              </FlipStyled.CoinName>
            </FlipStyled.Coin>
          </RookiexbtStyled>
          <RookiexbtStyled>
            <FlipStyled.RookiexbtTitle>
              LOOMDART
            </FlipStyled.RookiexbtTitle>
            <FlipStyled.Coin>
              <FlipStyled.CoinValue>
                500.005463
              </FlipStyled.CoinValue>
              <FlipStyled.CoinName>
                BNB
              </FlipStyled.CoinName>
            </FlipStyled.Coin>
            <FlipStyled.Coin>
              <FlipStyled.CoinValue>
                500.005463
              </FlipStyled.CoinValue>
              <FlipStyled.CoinName>
              xBLZD
              </FlipStyled.CoinName>
            </FlipStyled.Coin>
          </RookiexbtStyled>
        </DiceStyled.StyledBetiingFightNightCards>
        <FightNightContainer>
        <img width="683px" src={FightNight} alt="" />
          <BetControlStyled.StyledControlsFightNight>
            <FlipStyled.RookiexbtTitle fontSize={"16px"} lineHeight={"19px"}>
              Enter Bet Amount
            </FlipStyled.RookiexbtTitle>
            <BetAmount>
              <StyledSelect>
              {/*@ts-ignore*/}
              <GenerateGroup
                borderRadios="14.143px"
                padding={"8px 0 8px 0px"}
                value={balance && betAmount}
                handler={setBetAmount}
                step={10}
                min={minBet}
                max={flipMax}
                nextInput={null}
                handleRef={handleChangeToTails}
                disabled={!isRealMode}
                games="multiplier"
                fontSize="22px"
              />
              <Select
                {...{
                  title: { demo: "Flip", real: "BNB" },
                  account,
                  loaded,
                  isRealMode,
                  isRolling,
                  alert: { isOpen: false, message: "" },
                  active: false,
                  handleRollClick: changeCurrentToken,
                  gameContract: flipContract,
                }}
              />
            </StyledSelect>
            </BetAmount>
            <StyledButton>
              <Button
                {...{
                  title: { demo: "FightNight", real: "APPROVE CONTRACT" },
                  account,
                  loaded,
                  isRealMode: true,
                  isRolling,
                  alert: { isOpen: false, message: "" },
                  active: false,
                  handleRollClick: handleClick,
                  gameContract: flipContract,
                  approveButton: true
                }}
              />
            </StyledButton>
            <FlipStyled.LoomdartTitle fontSize={"16px"} lineHeight={"19px"}>
              Select Fighter
            </FlipStyled.LoomdartTitle>
            <CheckBoxGroup>
            <RookiexbtStyled fight={true}>
              <FlipStyled.RookiexbtTitle color="#ffffff">
                ROOKIEXBT
              </FlipStyled.RookiexbtTitle>
              <Input
                //@ts-ignore
                onClick={choosePlayer}
                type="checkbox"
                checked={isRookiexbt ? true : false}
              />
          </RookiexbtStyled>
          <RookiexbtStyled fight={true}>
              <FlipStyled.RookiexbtTitle color="#ffffff">
                LOOMDART
              </FlipStyled.RookiexbtTitle>
              <Input
                //@ts-ignore
                onClick={choosePlayer}
                type="checkbox"
                checked={isRookiexbt ? false : true}
              />
          </RookiexbtStyled>
            </CheckBoxGroup>
            <StyledButton>
                <Button
                  {...{
                    title: { demo: "FightNight", real: "Place Bet" },
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
            <FlipStyled.LoomdartTitle fontSize={"10px"} lineHeight={"19px"}>
              10% take goes to commmunity house reserves
            </FlipStyled.LoomdartTitle>
            <FlipStyled.LoomdartTitle fontSize={"10px"} lineHeight={"19px"}>
              Mammoth.Bet is not affiliated with the fight sponsors.
            </FlipStyled.LoomdartTitle>
            <FlipStyled.LoomdartTitle fontSize={"16px"} lineHeight={"19px"} color={"#b74d00"}>
              Betting is open until Oct 16 @ 4pm UTC
            </FlipStyled.LoomdartTitle>
          </BetControlStyled.StyledControlsFightNight>
        </FightNightContainer>
      </FightNightContainer>
    </DiceStyled.StyledBettingContainerCard>
  );
};

export default FightNightGame;
