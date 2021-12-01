import React, { useContext } from "react";

import numberFormat from "../../../utils/numberFormat";
import styled from "styled-components";
import { EthersContext } from "../../../context/ethersContext";
type IStates = {
  isRealMode: boolean;
  data: any[];
  reset: Function;
  decimals?: number;
};

const Stats = ({ isRealMode, data, reset, decimals }: IStates) => {
  const {
    data: { _MaxNumber },
  } = useContext(EthersContext);

  const getDataBlock = () => {
    return [1, 2, 3].slice(0, 5).map((g) => {
      //@ts-ignore
      const bet: any = g.winner_list[0];
      const { area } = bet;
      const won = bet.winner === "Y";
      const under = area.side === "DOWN";
      let chance;
      if (!under) {
        chance = ((_MaxNumber - 1 - area.roll) / _MaxNumber) * 100;
      } else {
        chance = (area.roll / _MaxNumber) * 100;
      }
      const multiplier = numberFormat((100 / chance) * 0.99, decimals);
      return (
        <li key={bet.id}>
          <span>
            {under ? "<" : ">"} {area.roll}
          </span>
          <span>x {multiplier.toFixed(decimals)}</span>
          <span className={`${{ won, lost: !won }} text-right`}>{bet.payout_balance.toFixed(6)} BSV</span>
        </li>
      );
    });
  };

  const getWinsCount = () => {
    return data.filter((g) => g.winner_list[0].winner === "Y").length;
  };

  const getLosesCount = () => {
    return data.filter((g) => g.winner_list[0].winner === "N").length;
  };

  const getContent = () => {
    if (!isRealMode) {
      return <StyledDemoText>You are playing Demo Mode</StyledDemoText>;
    }
    return <StyledStatsList>{getDataBlock}</StyledStatsList>;
  };

  return (
    <StyledStats className={`stats ${{ demo: !isRealMode }}`}>
      <h2 className="title">My Stats</h2>
      <StyledBtnReset type="button" onClick={reset}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path fill="#ECE3F7" fillRule="evenodd" d="M23 3h-6v5h1V4h4l1-1z" clipRule="evenodd" />
          <path
            fill="#ECE3F7"
            fillRule="evenodd"
            d="M1 12C1 6 6 1 12 1v1a10 10 0 106 2V3a11 11 0 11-17 9z"
            clipRule="evenodd"
          />
        </svg>
      </StyledBtnReset>
      {getContent}
      <div className="stats-bottom">
        <div className="stats-bottom-cell">
          <span>Wins</span>
          <StyledWon className="stats-bottom-value">{getWinsCount}</StyledWon>
        </div>
        <div className="stats-bottom-cell">
          <span>Losses</span>
          <StyledLost className="stats-bottom-value">{getLosesCount}</StyledLost>
        </div>
      </div>
    </StyledStats>
  );
};

export default Stats;

const StyledStats = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 24px 24px 0;

  .title {
    margin: 0;
  }

  &.demo {
    background-image: url("./images/dice-bg.png");
    background-position: center;
    background-size: 66px 66px;
    background-repeat: no-repeat;
  }

  .demo-text {
    height: calc(100% - 88px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #d4bdef;
  }

  &-list {
    display: flex;
    flex-direction: column;
    height: calc(100% - 88px);
    // justify-content: space-between;
    list-style: none;
    padding: 16px 0 19px;
    margin: 0;
    overflow: hidden;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 8px;
      line-height: 22px;

      span:nth-child(1) {
        min-width: 40px;
      }

      span:nth-child(2) {
        min-width: 55px;
        margin: 0 8px;
        text-align: right;
      }

      span:nth-child(3) {
        min-width: 90px;
        text-align: right;
      }
    }
  }

  &-bottom {
    border-top: 1px solid #593781;
    color: #d4bdef;
    height: 64px;
    display: flex;
    margin: 0 -24px;
    width: calc(100% + 48px);
    padding: 0 8px;

    &-cell {
      padding: 16px 16px 24px;
      display: flex;
      justify-content: space-between;
      width: 50%;
    }

    &-value {
      font-weight: bold;
      font-size: 16px;
      text-align: right;
    }
  }
`;
const StyledBtnReset: any = styled.button`
  appearance: none;
  position: absolute;
  top: 25px;
  right: 25px;
  height: 22px;
  width: 22px;
`;
const StyledWon = styled.span`
  color: #a8fff5;
`;
const StyledLost = styled.span`
  color: #ff80ba;
`;
const StyledDemoText = styled.div`
  height: calc(100% - 88px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #d4bdef;
`;

const StyledStatsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100% - 88px);
  // justify-content: space-between;
  list-style: none;
  padding: 16px 0 19px;
  margin: 0;
  overflow: hidden;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 8px;
    line-height: 22px;

    span:nth-child(1) {
      min-width: 40px;
    }

    span:nth-child(2) {
      min-width: 55px;
      margin: 0 8px;
      text-align: right;
    }

    span:nth-child(3) {
      min-width: 90px;
      text-align: right;
    }
  }
`;
