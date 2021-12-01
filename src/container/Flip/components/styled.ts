import styled from "styled-components";

//@ts-ignore
import CoinFlip from "../assets/sounds/coin-flip.mp3";
//@ts-ignore
import FlipWin from "../assets/sounds/win.mp3";
//@ts-ignore
import FlipLose from "../assets/sounds/lose.mp3";

const StyledContainer = styled.div`
  background: #000000;
  border-radius: 10px;
  width: 231.85px;
  height: 223.27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 180px;
    height: 160px;
  }
  @media (max-width: 630px) {
    width: 101.87px;
    height: 98.19px;
  }
  @media (max-width: 375px) {
    width: 79.51px;
    height: 76.64px;
  }
`;

const StyledScoreContainer = styled(StyledContainer)`
  border-radius: 6px;
  padding: 25px 27px;
  :nth-child(1) {
    margin-right: 24px;
  }
`;

const StyledIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-top: 11px;
  }
  @media (max-width: 630px) {
    width: 65.91px;
    height: 65.97px;
    margin-top: 13px;
  }
  @media (max-width: 375px) {
    width: 51.44px;
    height: 51.49px;
    margin-top: 10px;
  }
`;

const StyledName = styled.p<{ active?: boolean; isHeads?: boolean }>`
  font-weight: 600;
  font-style: normal;
  font-family: Proxima Nova;
  font-weight: bold;
  margin: 0 0 5px;
  line-height: 17px;
  font-size: 16px;
  color: ${({ active, isHeads }) => (active ? (isHeads ? "#000000" : "#000000") : "#666668")};
  margin-top: 2px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 15px;
  }
  @media (max-width: 630px) {
    font-size: 10px;
    line-height: 12px;
  }
  @media (max-width: 375px) {
    font-size: 4.25973px;
    line-height: 3px;
  }
`;

const StyleScoreName = styled(StyledName)`
  font-size: 12px;
  margin: 8px 0 10px;
`;

const StyledMultiplier = styled(StyledName)`
  font-size: 36px;
  line-height: 44px;
  opacity: 0.6;
  margin: 0;
  color: #aab0ba;
  font-family: Proxima Nova;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 35px;
  }
  @media (max-width: 630px) {
    font-size: 16.09px;
    line-height: 20px;
  }
  @media (max-width: 630px) {
    font-size: 12.5581px;
    line-height: 15px;
  }
`;

const ScoreCount = styled(StyledName)<{ isHeads?: boolean }>`
  font-size: 24px;
  color: ${({ isHeads }) => (isHeads ? "#FF6D65" : "#2DD3BF")};
`;

const StyledMainImg = styled.img`
  width: 260px;
  height: 260px;
  padding: 25px;
`;

const StyledImage = styled.div<{ isTails?: boolean; isStopAnimation: boolean }>`
  width: 290px;
  height: 290px;
  margin: 10px 36px;
  position: relative;
  transition: transform 1s ease-in;
  -webkit-transition: transform 1s ease-in;
  -moz-transition: transform 1s ease-in;
  transform-style: preserve-3d;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 10xp;
  }
  @media (max-width: 630px) {
    width: 130.45px;
    height: 130.45px;
    margin: 0;
  }
  @media (max-width: 375px) {
    width: 101.82px;
    height: 101.56px;
    margin: 0 8px 0 8px;
  }
  @keyframes flipHeads {
    0% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      transform: rotateY(0);
    }
    50% {
      -webkit-transform: rotateY(1080deg);
      -moz-transform: rotateY(1080deg);
      transform: rotateY(1080deg);
    }
    100% {
      -webkit-transform: rotateY(1800deg);
      -moz-transform: rotateY(1800deg);
      transform: rotateY(1800deg);
    }
  }
  @keyframes flipTails {
    0% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      transform: rotateY(0);
    }
    50% {
      -webkit-transform: rotateY(720deg);
      -moz-transform: rotateY(720deg);
      transform: rotateY(720deg);
    }
    100% {
      -webkit-transform: rotateY(1440deg);
      -moz-transform: rotateY(1440deg);
      transform: rotateY(1440deg);
    }
  }
  .heads {
    -webkit-animation: flipHeads 2s ease-out forwards;
    -moz-animation: flipHeads 2s ease-out forwards;
    -o-animation: flipHeads 2s ease-out forwards;
    animation: flipHeads 2s ease-out forwards;
    animation-iteration-count: ${({ isStopAnimation }) => (isStopAnimation ? 1 : "infinite")};
  }
  .tails {
    -webkit-animation: flipTails 2s ease-out forwards;
    -moz-animation: flipTails 2s ease-out forwards;
    -o-animation: flipTails 2s ease-out forwards;
    animation: flipTails 2s ease-out forwards;
    animation-iteration-count: ${({ isStopAnimation }) => (isStopAnimation ? 1 : "infinite")};
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const StyledHeads = styled.div<{ isTails?: boolean; isWon?: boolean; index: number }>`
  position: absolute;
  background: #000000;
  text-align-last: center;
  border-radius: 50%;
  z-index: ${({ isWon, index }) => (isWon ? index + 6 : index)};
  width: 100%;
  height: 100%;
  img {
    padding: 28px;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      padding: 18px;
    }
    @media (max-width: 630px) {
      padding: 12.38px;
    }
    @media (max-width: 375px) {
      padding: 10px;
    }
  }
`;

const StyledTails = styled.div<{ isTails?: boolean; isWon?: boolean; index: number }>`
  position: absolute;
  background: #000000;
  text-align-last: center;
  border-radius: 50%;
  z-index: ${({ isWon, index }) => (isWon ? index + 6 : index)};
  width: 100%;
  height: 100%;
  img {
    padding: 28px;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      padding: 18px;
    }
    @media (max-width: 630px) {
      padding: 12.38px;
    }
    @media (max-width: 375px) {
      padding: 10px;
    }
  }
`;

const FlipContainer = styled.div`
  max-width: 938px;
  padding: 0px 20px;
  background: #0d1728;
  border-radius: 4.93882px;
  @media (max-width: 520px) {
    padding: 0px 7px;
  }
  @media (max-width: 375px) {
    padding: 0px 1px;
  }
`;

const CardContainer = styled.div`
  grid-area: card;
  margin-top: 0;
  @media (min-width: 623px) {
    margin-top: 0;
  }
`;

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  margin: 0 20px 0 20px;
  @media (max-width: 520px) {
    margin: 0 8px 0 8px;
  }
  @media (max-width: 375px) {
    margin: 0 5px 0 5px;
  }
`;

export {
  StyledContainer,
  StyledScoreContainer,
  StyledIcon,
  StyledName,
  StyleScoreName,
  StyledMultiplier,
  ScoreCount,
  StyledImage,
  StyledHeads,
  StyledTails,
  FlipContainer,
  CardContainer,
  StyledButton,
  StyledMainImg,
};

export const mp3 = {
  CoinFlip,
  FlipWin,
  FlipLose,
};
