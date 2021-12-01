import React, { useEffect } from "react";
import styled from "styled-components";
import { gameWinOrNot } from "../../../redux/actions/gameWin";
import { useDispatch } from "react-redux";

const Result = ({ isWon, saund }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameWinOrNot(isWon));
    saund(isWon ? "audioWin" : "audioLose");
  }, [isWon]);

  return (
    <StyledContainer isWon={isWon}>
      <p>{isWon ? "YOU WON" : "YOU LOSE"}</p>
    </StyledContainer>
  );
};
const StyledContainer = styled.div<{ isWon?: boolean }>`
  z-index: 101;
  width: 178px;
  border-radius: 48px;
  background: ${({ isWon }) => (isWon ? "#2DD3BF" : "#F34766")};
  backdrop-filter: blur(14px);
  padding: ${({ isWon }) => (isWon ? "12px 30px" : "12px 29px")};
  position: absolute;
  bottom: -8px;
  left: 3px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  p {
    margin: 0;
    font-size: 22px;
    width: auto;
  }
  @media (max-width: 520px) {
    left: calc(50% - 65px);
    bottom: -4px;
    padding: ${({ isWon }) => (isWon ? "6px 20px" : "6px 19px")};
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 375px) {
    left: calc(50% - 50px);
    bottom: -4px;
    padding: ${({ isWon }) => (isWon ? "6px 20px" : "6px 19px")};
    p {
      font-size: 10px;
    }
  }
`;

export default Result;
