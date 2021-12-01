import styled from "styled-components";

//@ts-ignore
import audioClickSound from "../../static/assets/dice/scroller.mp3";
//@ts-ignore
import audioRollingSound from "../../static/assets/dice/rolling2.mp3";
//@ts-ignore
import audioWinSound from "../../static/assets/dice/win.mp3";
//@ts-ignore
import audioLoseSound from "../../static/assets/dice/lose.mp3";

const StyledGlobalStats = styled.div`
  grid-area: globalStats;
`;

const StyledFlipContainer = styled.div`
  margin: 50px auto 180px;
  padding: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 938px;
  position: relative;
  z-index: 200;

  @media (min-width: 1000px) {
    margin: 0 auto 180px;
    display: flex;
    flex-direction: column;
  }
  @media (min-height: 1080px) {
    margin-bottom: calc(100vh - 985px);
  }

  @media (max-width: 400px) {
    justify-content: space-around;
  }
`;

const StyledChangeModeDiv = styled.div`
  display: grid;
  grid-area: win;
`;

const StyledChangeModeContainer: any = styled.div<{ marginBottom?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  grid-area: toolbar;
  margin-bottom: 20px;
`;

const StyledBettingContainerCard = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  padding: 0 0 23px;
  h2 {
    color: #242424;
    font-weight: 700;
    font-size: 14px;
  }

  grid-area: betting;

  @media (max-width: 586px) {
    grid-template-areas: "scroller scroller scroller" "win win win" "controls controls controls" "sidebarToggler currency currency" "toolbar toolbar toolbar";
  }
`;

const StyledFlipBettingContainer = styled.div`
  margin: 0 auto;
`;

const StyledBetiingFlipCards = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;
  flex-wrap: wrap;
  grid-area: card;

  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const StyledBettingWheel = styled(StyledBetiingFlipCards)`
  flex-direction: column;
`;

const StyledSidebarTogglerContainer = styled.div`
  grid-area: sidebarToggler;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledBettingScrollerContainer = styled.div`
  border-radius: 12px;
  grid-area: scroller;
`;

const StyledBettingControlsContainer = styled.div`
  margin-top: 40px;
  grid-area: controls;
  @media (max-width: 585px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const StyledBettingToolbar = styled.div`
  margin-top: 26px;
  width: 100%;
  @media (max-width: 585px) {
    margin-top: 10px;
    padding: 0 5px;
  }
`;

const StyledCurBox = styled.div`
  display: grid;
  width: 138px;
  grid-template-areas: "sidebarToggler currency";
  margin-top: 24px;
`;

const StyledCurrencyButton: any = styled.div`
  border-radius: ${({ borderRadius }: any) => (borderRadius ? borderRadius : "8px 0 0 8px")};
  background-color: ${({ backgroundColor }: any) => (backgroundColor ? "#43BC9C" : "#ffffff")};
  width: 69px;
  color: ${({ colorValue }: any) => (colorValue ? "#ffffff" : "#43BC9C")};
  border: ${({ border }: any) => (border ? border : "1px solid #43BC9C")};
  opacity: ${({ opacityValue }: any) => (opacityValue ? "" : "0.4")};
  line-height: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 32px;
`;
const StyledHistoryContainer = styled.div`
  border-radius: 6px;
  background-color: #162338;
  grid-area: history;
  margin: 0 auto;
  width: 100%;
  max-width: 938px;
  @media (max-width: 585px) {
    margin-top: 10px;
  }
`;
const StyledSidebarContainer: any = styled.div`
  border-radius: 6px;
  overflow-y: auto;
  top: 0;
  grid-area: sidebar;
  z-index: 300;
  width: 100%;
  max-width: 360px;
  transition: left 0.3s;
  background: transparent;
  padding: 0;
  position: relative;
  left: unset;
  @media (max-width: 999px) {
    display: flex;
    max-width: 100%;
    background: #2a3341;
    justify-content: space-around;
    margin: auto;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    background: transparent;
    width: 100%;
    /* max-width: max-content; */
  }
`;

const StyledStatsContainerCard = styled.div`
  padding: 0px 20px 15px 20px;
  grid-area: stats;
  margin-bottom: 20px;
  background: #2a3341;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  color: #252733;
  @media (max-width: 600px) {
    margin-bottom: 32px;
  }
`;

const StyledStatsContainerCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledStatsContainerCardFooter = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 6px;

  & > div > p {
    font-size: 14px;
  }

  & > div > span {
    font-size: 14px;
  }
`;
const StyledH2 = styled.h2`
  margin: 0;
  font-size: 12px;
  line-height: 15px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #fff;
  padding: 17px 18px 17px 18px;
  margin-left: -20px;
  background: #212b37;
  border-radius: 6px 0px;
  @media (max-width: 585px) {
    padding-right: 50px;
  }
`;

const StyledScoreboardContainerCard = styled(StyledStatsContainerCard)`
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
  margin: 0;
  grid-area: scoreboard;
  height: auto;
  background-color: #2a3341;
  border-radius: 6px;
`;
const StyledDiv = styled.div<{ color?: string }>`
  width: 114px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #212b37;
  margin: 6px;
  text-align: center;

  p {
    padding: 20px 38px 0 38px;
    color: #fff;
    font-size: 12px !important;
    line-height: 20px;
    letter-spacing: 0.2px;
  }
  span {
    padding: 10px 35px 32px 35px;
    color: ${({ color }) => color && color};
    font-weight: 600;
    font-size: 24px !important;
    letter-spacing: 0.2px;
    line-height: 20px;
  }
`;

const StyledLinkA = styled.span`
  padding-top: 16px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  color: #ffffff;
  opacity: 0.4;
  cursor: pointer;
`;
const StyledBodyWrapper = styled.div`
  @media (max-width: 1000px) {
    padding: 14px;
  }
`;
const StyledTransactionWait = styled.div`
  width: 100%;
  display: ${({ hidden }: any) => (hidden ? "none" : "block")};
  grid-area: controls;
  background: #1f2f49;
  text-align-last: center;
  padding: 6px;
  margin: 21px 15px 0 15px;
  border-radius: 5px;
  @media (max-width: 630px) {
    margin: 11px 0 0 0;
    padding: 0;
  }
  @media (max-width: 375px) {
    border-radius: 2px;
  }
`;

const StyledTransactionWaitText = styled.span`
  font-size: 16px;
  color: #6b83aa;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  @media (max-width: 630px) {
    font-size: 7.13594px;
    line-height: 0;
  }
`;
const RookiexbtTitle = styled.span<{fontSize?:string; lineHeight?: string; color?: string}>`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  margin: 0 0 5px 0;
  font-size: ${({fontSize}) => (fontSize ? fontSize : "22.6289px")};
  line-height: ${({lineHeight}) => (lineHeight ? lineHeight : "28px")};
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  color: ${({color}) => (color ? color : "#4E4950")};
`;

const LoomdartTitle = styled.span<{fontSize?:string; lineHeight?: string; color?: string}>`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  margin: 14px 0 5px 0;
  font-size: ${({fontSize}) => (fontSize ? fontSize : "22.6289px")};
  line-height: ${({lineHeight}) => (lineHeight ? lineHeight : "28px")};
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  color: ${({color}) => (color ? color : "#4E4950")};
`;
const CoinName = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 22.6289px;
  line-height: 28px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  margin-left: 80px;
`;
const CoinValue = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 22.6289px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Coin = styled.div`
  width: 318.28px;
  display: flex;
  position: relative;
  grid-area: controls;
  background: #000000;
  text-align-last: center;
  padding: 7px 0 7px 22px;
  margin: 1px 0 5px 0;
  border-radius: 15px;
`;
export const FlipStyled = {
  RookiexbtTitle,
  Coin,
  CoinName,
  CoinValue,
  StyledGlobalStats,
  StyledFlipContainer,
  StyledChangeModeDiv,
  StyledChangeModeContainer,
  StyledBettingContainerCard,
  StyledFlipBettingContainer,
  StyledBetiingFlipCards,
  StyledSidebarTogglerContainer,
  StyledBettingScrollerContainer,
  StyledBettingControlsContainer,
  StyledBettingToolbar,
  StyledCurBox,
  StyledCurrencyButton,
  StyledHistoryContainer,
  StyledSidebarContainer,
  StyledStatsContainerCard,
  StyledStatsContainerCardHeader,
  StyledStatsContainerCardFooter,
  StyledH2,
  StyledScoreboardContainerCard,
  StyledDiv,
  StyledLinkA,
  StyledBettingWheel,
  StyledBodyWrapper,
  StyledTransactionWait,
  StyledTransactionWaitText,
  LoomdartTitle,
};

export const mp3 = {
  audioClickSound,
  audioRollingSound,
  audioWinSound,
  audioLoseSound,
};
