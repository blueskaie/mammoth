import { useContext, useEffect, useState } from "react";
import Toolbar from "../../components/Dice/Toolbar/Toolbar";
import { DiceStyled } from "../Dice/diceStyled";
import History from "../../components/Dice/History/History";
import storage from "../../utils/storage";
import { StyledBodyWrapper, WheelContainer, StyledControlsWheel } from "./components/styles";
import Multiplier from "./components/Multiplier";
import WheelComponent from "./components/Wheel";
import GenerateGroup from "../input/GenerateGroup";
import { useDispatch, useSelector } from "react-redux";
import { runGame, stopColorNumber } from "../../redux/actions/slotoWheel";
import { generateStopRandom } from "../../utils/generateStopRandom";
import { rotate } from "./data/rotate";
import { EthersContext } from "../../context/ethersContext";
import sleep from "../../utils/sleep";
import { Helmet } from "react-helmet-async";
import { clearLastGames, gameWinOrNot } from "../../redux/actions/gameWin";
import { useHistory } from "react-router-dom";
import { GenerateAdvancedControls } from "components/Dice/BetControls/BetControls";
import Button from "../../components/Dice/BetControls/Button";
import { StyledButton } from "container/Flip/components/styled";
import { FlipStyled } from "container/Flip/flipStyled";
import { useGame } from "../../hooks/useGame";
import { STATUS } from "constants/gameStatus";

type IStoreType = {
  slotoWheel: {
    coefficientButton: { color: string; coefficient: string };
    run: boolean;
    colorName: string;
    colorNumber: number;
    stopNumber: number;
  };
};

const Wheel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    coefficientButton: { coefficient },
    colorName,
    colorNumber,
    stopNumber,
  } = useSelector((state: IStoreType) => state.slotoWheel);
  const {
    wheelOData: { maxBet, minBet },
    account,
    loaded,
  } = useContext(EthersContext);
  const [isRealMode, setIsRealMode] = useState<any>(!storage.has("wheel"));
  const [winNumber, setWinNumber] = useState<number>(0);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [betAmount, setBetAmount] = useState<number>(minBet);
  const [isAudioEnabled, setIsAudioEnabled] = useState(!storage.has("wheel.sound"));
  const [winOrNot, setWinOrNot] = useState<boolean | null>(null);
  const { play, status, contract, game } = useGame("WHEEL");

  const isRolling = status === STATUS.PENDING_USER_TRANSACTION || status === STATUS.PENDING_CROUPIER_TRANSACTION;

  const setPayout = () => {};

  const handleAudioToggle = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (isAudioEnabled) {
      storage.set("wheel.sound", true);
    } else {
      storage.remove("wheel.sound");
    }
  };

  const handleModeChange = (isRealMode: boolean) => {
    if (isRealMode) {
      storage.remove("wheel");
    } else {
      storage.set("wheel", true);
    }
    setIsRealMode(isRealMode);
  };
  const isWeen = async (won: any, resolve: any) => {
    await sleep(2000);
    resolve();
  };

  const handleResult = (nameType: number) => {
    return new Promise((resolve: Function) => {
      const win: boolean = colorNumber === nameType;
      dispatch(stopColorNumber(nameType));
      isWeen(win, resolve);
      setDisabled(false);
      setWinOrNot(win);
    });
  };

  useEffect(() => {
    switch (status) {
      case STATUS.NONE: {
        dispatch(runGame(false));
        break;
      }
      case STATUS.PENDING_USER: {
        dispatch(runGame(false));
        break;
      }
      case STATUS.PENDING_USER_TRANSACTION: {
        dispatch(runGame(true));
        break;
      }
      case STATUS.PENDING_CROUPIER_TRANSACTION: {
        dispatch(runGame(true));
        break;
      }
      case STATUS.CONFIRMED: {
        console.log(stopNumber, winOrNot);
        setWinNumber(stopNumber);
        dispatch(gameWinOrNot(winOrNot));
        break;
      }
    }
  }, [status, stopNumber]);

  const isBet = async () => {
    if (!isRealMode) {
      await sleep(300);
    } else {
      try {
        await play(colorNumber, betAmount);

        await handleResult(game?.result?.toNumber());
      } catch (e) {
        console.error(e);
        //  setIsRolling(false);
      }
    }
  };

  const handleRollClick = async () => {
    setWinOrNot(null);
    isBet();
    setDisabled(true);
    if (!isRealMode) {
      const { color, number } = generateStopRandom(rotate);
      setWinNumber(number);
      setTimeout(() => {
        const won = colorName === color;
        dispatch(gameWinOrNot(won));
        setDisabled(false);
        setWinOrNot(won);
        dispatch(runGame(false));
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(clearLastGames());
  }, [history]);

  return (
    <StyledBodyWrapper>
      <Helmet>
        <title>Lotto Wheel</title>
        <meta property="og:title" content="Provably fair gambling!" />
        <meta name="description" content="Provably fair gambling!" />
      </Helmet>
      <DiceStyled.StyledDiceContainer>
        <DiceStyled.StyledSidebarTogglerContainer />
        <DiceStyled.StyledChangeModeContainer marginBottom="0px" isRealMode>
          <DiceStyled.StyledBettingToolbar>
            <Toolbar
              isRealMode={isRealMode}
              isRolling={false}
              isAudioEnabled={isAudioEnabled}
              onModeChange={handleModeChange}
              onAudioToggle={() => handleAudioToggle()}
              currencyValue={"4000"}
            />
          </DiceStyled.StyledBettingToolbar>
        </DiceStyled.StyledChangeModeContainer>
        <WheelContainer>
          <WheelComponent isRolling={isRolling} degree={winNumber} win={winOrNot} isAudioEnabled={isAudioEnabled} />
          <Multiplier isDisabled={isDisabled} />
          <FlipStyled.StyledTransactionWait hidden={!isRolling}>
            <FlipStyled.StyledTransactionWaitText>
              Waiting for your transaction to confirm...
            </FlipStyled.StyledTransactionWaitText>
          </FlipStyled.StyledTransactionWait>
          <StyledControlsWheel>
            {/*@ts-ignore*/}
            <GenerateGroup
              borderRadios="9px"
              padding={"10px 0 15px 0px"}
              label={"Bet Amount"}
              value={betAmount}
              handler={setBetAmount}
              step={10}
              min={minBet}
              max={maxBet}
              nextInput={null}
              disabled={!isRealMode}
            />
            <StyledButton>
              <Button
                {...{
                  title: { demo: "BET", real: `BET ${coefficient}.00X` },
                  account,
                  loaded,
                  isRealMode,
                  active: isRolling,
                  handleRollClick,
                  gameContract: contract,
                }}
              />
            </StyledButton>
            <GenerateGroup
              borderRadios="9px"
              padding={"10px 0 15px 0px"}
              label={"Payout"}
              value={betAmount}
              handler={setPayout}
              step={10}
              min={minBet}
              max={maxBet}
              nextInput={null}
              disabled={true}
            />
          </StyledControlsWheel>
          {GenerateAdvancedControls(betAmount, 10, setBetAmount, minBet, maxBet, !isRealMode, true)}

          {/* <ColorsComponent /> */}
        </WheelContainer>
        <DiceStyled.StyledHistoryContainer>
          <History
            high={[]}
            onLogin={() => {}}
            loading={true}
            currencyType={"XBLZD"}
            contractParams={{ ContractName: "WheelOfFortune", JSON_NAME: "WHEEL_JSON" }}
          />
        </DiceStyled.StyledHistoryContainer>
      </DiceStyled.StyledDiceContainer>
    </StyledBodyWrapper>
  );
};

export default Wheel;
