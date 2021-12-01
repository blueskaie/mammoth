import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Dice from "assets/img/dice.svg";
import DiceGif from "assets/img/Dice.gif";

type TProps = {
  betType: string;
  result: number;
  betNumber: number;
  triggerLuckyNumber: boolean;
};

const TopBar = ({ betType, result, betNumber, triggerLuckyNumber }: TProps) => {
  const [randomLuckyNumber, setRandomLuckyNumber] = useState(0);
  const intervalId = useRef<any>(0);
  useEffect(() => {
    if (triggerLuckyNumber) {
      setRandomLuckyNumber(Math.round(Math.random() * 100));
      intervalId.current = setInterval(() => {
        setRandomLuckyNumber(Math.round(Math.random() * 100));
      }, 100);
    }
    return () => clearInterval(intervalId.current);
  }, [triggerLuckyNumber]);
  return (
    <StyledContainer betType={betType}>
      <ValueContainer>
        <h1>{betNumber}</h1>
        <span>PREDICTION</span>
      </ValueContainer>
      {/*<DiceLogoContainer>*/}
      {triggerLuckyNumber ? (
        <DiceLogoContainer>
          <img src={DiceGif} alt="" />
        </DiceLogoContainer>
      ) : (
        <img src={Dice} alt="" />
      )}

      {/*</DiceLogoContainer>*/}
      <ValueContainer>
        <h1>{!result ? (triggerLuckyNumber ? randomLuckyNumber : "00") : result}</h1>
        <span>LUCKY NUMBER</span>
      </ValueContainer>
    </StyledContainer>
  );
};

export default TopBar;

const StyledContainer = styled.div<{ betType: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  margin-bottom: 20px;
  background: ${({ betType }) =>
    betType === "over"
      ? " linear-gradient(180deg, #a30fd7 0%, rgba(8, 34, 48, 0) 100%)"
      : "linear-gradient(180deg, #D70F63 0%, rgba(8, 34, 48, 0) 100%)"};
  border-radius: 6px;
  @media (max-width: 920px) {
    > img {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 520px) {
    > img {
      width: 80px;
      height: 80px;
    }
  }
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;

  > h1 {
    margin: 0;
    color: #eaf1f7;
    font-size: 70px;
    font-weight: bold;
  }

  > span {
    color: #bbbbbb;
    font-size: 24px;
    font-weight: bold;
    white-space: nowrap;
  }
  @media (max-width: 920px) {
    > h1 {
      font-size: 35px;
    }
    > span {
      font-size: 15px;
    }
  }

  @media (max-width: 520px) {
    > span {
      font-size: 9px;
    }
  }
`;

const DiceLogoContainer = styled.div`
  background: #11161f;
  border-radius: 50%;
  width: 239px;
  height: 239px;
  > img {
    width: 240px;
  }
  @media (max-width: 920px) {
    width: 150px;
    height: 150px;
    > img {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 520px) {
    width: 80px;
    height: 80px;
    > img {
      width: 80px;
      height: 80px;
    }
  }
`;
