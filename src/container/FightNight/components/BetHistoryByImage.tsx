import Crown from "../assets/images/Crown.svg";
import Ethereum from "../assets/images/Ethereum.svg";
import LoseHeads from "../assets/images/loseHeads.svg";
import LoseTails from "../assets/images/loseTails.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const BetHistoryByImage = (props: any) => {
  const { className, isWin } = props;
  const { win, lus } = useSelector((state: { gameWin: { win: number; lus: number } }) => state.gameWin);
  const [resultArray, setResult] = useState([]);
  const [imageClassName, setImageClassName] = useState("");

  useEffect(() => {
    const obj = {
      className,
      isWin,
    };
    setResult((prevState: any): any => [obj, ...prevState]);
    setImageClassName("active");
    if (resultArray.length >= 10) resultArray.pop();
  }, [win, lus]);

  return (
    <StyledHistory>
      {resultArray.map((item: any, index: any) =>
        item.className === "" ? null : (
          <StyledImage className={imageClassName + " img"} key={index}>
            <img
              id="img"
              src={
                item.isWin && item.className === "tails"
                  ? Ethereum
                  : item.isWin && item.className === "heads"
                  ? Crown
                  : !item.isWin && item.className === "tails"
                  ? LoseTails
                  : LoseHeads
              }
              alt=""
            />
          </StyledImage>
        )
      )}
    </StyledHistory>
  );
};

const StyledHistory = styled.div`
  background: #212b37;
  border-radius: 8px;
  max-height: 100%;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  grid-area: betHistory;
  max-width: 48px;
  position: relative;
  width: 48px;
  height: 391px;
  transition: all ease 0.2s;
`;

const StyledImage = styled.div<{ isLose?: boolean }>`
  width: 24px;
  height: 24px;
  /* margin-bottom: 10px; */
  transition: all 2s ease;
  /* position: absolute; */
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  :not(:nth-child(1)) {
    margin-top: 12px;
  }
`;
export default BetHistoryByImage;
