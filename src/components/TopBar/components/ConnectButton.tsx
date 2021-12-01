import { useContext } from "react";
import { useDispatch } from "react-redux";
import { CurrentAddressContext, SymfoniContext } from "hardhat/SymfoniContext";
import { connectToMM } from "redux/actions/connect";
import { useChainId } from "hooks/useChainId";
import { isMobile } from "utils/isMobile";
import { connectToMMMobile } from "utils/sendConnectBetMobile";
import PrimaryButton from "../../Dice/PrimaryButton/PrimaryButton";
import styled from "styled-components";
import { ReactComponent as WalletIcon } from "assets/img/walletIcon.svg";
import token from "assets/img/Token.svg";
import { useTokenBalance } from "hooks/useTokenBalance";

const Button = () => {
  const dispatch = useDispatch();
  const { init } = useContext(SymfoniContext);
  const [currentAddress] = useContext(CurrentAddressContext);
  const { isSupportedChain, switchChain, isSwitching } = useChainId(process.env.REACT_APP_CHAIN_ID);
  const balance = useTokenBalance();

  const onClickConnect = async () => {
    try {
      if (isMobile()) {
        if (window.ethereum) {
          init("web3modal");
          dispatch(connectToMM(true));
        } else {
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
        // connectToMMMobile();
      } else {
        connectToMMMobile();
        init("web3modal");
        dispatch(connectToMM(true));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {currentAddress && currentAddress.length ? (
        <>
          {isSupportedChain ? (
            <StyledWalletContainer>
              <LefPartContainer>
                <img src={token} alt="" />
                <p>{balance.toFixed(2)}</p>
              </LefPartContainer>
              <StyledWalletButton>
                <WalletIcon />
                Wallet
              </StyledWalletButton>
            </StyledWalletContainer>
          ) : (
            <PrimaryButton
              fontSize="12px"
              fontWeight="600"
              btnPadding="10px 20px"
              onClick={switchChain}
              connectWidth="137px"
              tabletWidth="70%"
              disabled={isSwitching}
            >
              Switch Network
            </PrimaryButton>
          )}
        </>
      ) : (
        <PrimaryButton
          landing
          btnPadding="10px 20px"
          connectWidth="150px"
          btnColor="#FFFFFF"
          fontSize="16px"
          btnBorder="1px solid transparent"
          onClick={onClickConnect}
          isHover={!isSupportedChain ? "red" : ""}
          btnBackgroundColor="#0F6CCB"
        >
          Sign In
        </PrimaryButton>
      )}
    </>
  );
};
export default Button;

const StyledWalletContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  background: #000;
  border-radius: 3px;
  align-items: center;
`;
const LefPartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  > p {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  > img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

const StyledWalletButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #00af31;
  border-radius: 3px;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  font-family: "Inter", sans-serif;
`;
