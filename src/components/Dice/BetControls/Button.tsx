import * as BetControlStyled from "./betControlsStyled/BetControls";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ReactComponent as RollDiceIcon } from "assets/img/rollDice.svg";
import { useContext } from "react";
import { CurrentAddressContext, SymfoniContext } from "hardhat/SymfoniContext";
import { useDispatch } from "react-redux";
import { connectToMM } from "redux/actions/connect";
import Loader from "../../Loader/Loader";
import { useChainId } from "hooks/useChainId";
import MetaMaskOnboarding from "@metamask/onboarding";
import { isMobile } from "utils/isMobile";
// import { connectToMMMobile } from "utils/sendConnectBetMobile";
// import { getMobileOperatingSystem } from "utils/getMobileSistem";
import { useAllowance } from "hooks/useAllowance";
import { DiceRollContext } from "hardhat/SymfoniContext";

const Button = ({
  title: { demo, real, auto },
  isRolling,
  isRealMode,
  active,
  loaded,
  handleRollClick,
  flip,
  gameContract,
  approveButton,
}: any) => {
  const diceRoll = useContext(DiceRollContext);
  if (!gameContract) {
    gameContract = diceRoll;
  }
  const dispatch = useDispatch();
  const { init } = useContext(SymfoniContext);
  const { isSupportedChain, switchChain, isSwitching } = useChainId(process.env.REACT_APP_CHAIN_ID);

  const [currentAddress] = useContext(CurrentAddressContext);
  const onboarding = new MetaMaskOnboarding();
  const { allowance, approve, approving } = useAllowance(gameContract);
  const onClickConnect = () => {
    try {
      // if (isMobile()) {
      //   connectToMMMobile();
      // } else {
        init("web3modal");
        dispatch(connectToMM(true));
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const installMetaMask = () => {
    if (!isMobile()) {
      onboarding.startOnboarding();
    } else {
      // getMobileOperatingSystem();
      // setTimeout(function () {
      //   //@ts-ignore
      //   window.location = "https://itunes.apple.com/appdir";
      // }, 25);
      // //@ts-ignore
      // window.location = "appname://metamask";
      //@ts-ignore
      const { opera }: any = window;
      const userAgent = navigator.userAgent || navigator.vendor || opera;
      if (/android/i.test(userAgent)) {
        window.location.replace("intent://mammoth-casion.netlify.app#Intent;scheme=https;package=io.metamask;end");
      }
      //@ts-ignore
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace("metamask-blockchain-wallet://");
        setTimeout(() => {
          window.location.replace("https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202");
        }, 8000);
      }
    }
  };
  return (
    <>
      <BetControlStyled.StyledPrimaryButtonDiv>
        {isRealMode ? (
          (loaded && !approving) ? (
            !currentAddress?.length ? (
              <PrimaryButton
                btnPadding="25px 0 25px"
                btnBorder={"revert"}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                mobilePadding="12px 0 12px"
                btnBackgroundColor={"linear-gradient(180deg, #0FB3D7 0%, #0F3BD7 81.77%, #0F72D7 100%)"}
                onClick={() =>
                  window.ethereum ? (isSupportedChain ? onClickConnect() : switchChain()) : installMetaMask()
                }
              >
                {window.ethereum ? (!isSupportedChain ? "Switch Network" : "CONNECT") : "Install MetaMask"}
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton
                  type="button"
                  btnBorder={"revert"}
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  btnPadding={approveButton? "5px 0 5px" : "25px 0 25px"}
                  btnBackgroundColor={approveButton ? "#0f6ccb" : "linear-gradient(180deg, #0FB3D7 0%, #0F3BD7 81.77%, #0F72D7 100%)"}
                  connectWidth={approveButton && "365px"}
                  lineHeight={approveButton && "19px"}
                  onClick={() =>
                    !isSupportedChain ? switchChain() : allowance.isZero() ? approve() : handleRollClick()
                  }
                  disabled={active || isRolling || isSwitching}
                  mobilePadding="12px 0 12px"
                  fontSize={approveButton && "16px"}
                  btnBorderRadius={approveButton && "8px"}
                >
                  {isRolling ? <Loader /> : (demo !== "FightNight") && <RollDiceIcon />}
                  <BetControlStyled.StyledDivider />
                  {isRolling ? demo : !isSupportedChain ? "Switch Network" : allowance.isZero() ? "Unlock XBLZD" : real}
                </PrimaryButton>
              </>
            )
          ) : (
            <PrimaryButton
              type="button"
              btnBorder={"revert"}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              btnPadding="25px 0 25px"
              btnBackgroundColor={"linear-gradient(180deg, #0FB3D7 0%, #0F3BD7 81.77%, #0F72D7 100%)"}
              disabled={true}
              mobilePadding="12px 0 12px"
            >
              Loading...
            </PrimaryButton>
          )
        ) : (
          <>
            <PrimaryButton
              type="button"
              onClick={handleRollClick}
              disabled={active || isRolling}
              btnBorder={"revert"}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              mobilePadding={active || isRolling ? "12px 0 12px" : ""}
              btnBackgroundColor={"linear-gradient(180deg, #0FB3D7 0%, #0F3BD7 81.77%, #0F72D7 100%)"}
              lineHeight={active || isRolling ? "21px" : "5px"}
            >
              {active || isRolling ? <Loader /> : flip ? "" : <RollDiceIcon />} <BetControlStyled.StyledDivider />{" "}
              {isRolling ? (
                demo
              ) : (
                <BetControlStyled.StyledBtnContent>
                  <BetControlStyled.StyledBtnBet>{real}</BetControlStyled.StyledBtnBet>
                  <BetControlStyled.StyledBtnText>{auto}</BetControlStyled.StyledBtnText>
                </BetControlStyled.StyledBtnContent>
              )}
            </PrimaryButton>
          </>
        )}
      </BetControlStyled.StyledPrimaryButtonDiv>
    </>
  );
};

export default Button;
