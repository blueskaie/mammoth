import React, { useContext, useEffect, useRef, useState } from "react";
import { EthersContext } from "../../../context/ethersContext";
import * as HistoryStyled from "./historyStyled/historyStyled";
import { IHistoryProps } from "../../../interface/IComponents/IHistory";
import { TABS } from "./historyData";
import HistoryNav from "./HistoryNav";
import { allGamesRow, singleGameRow } from "./gameRow";
import { useGameHistory } from "../../../hooks/useGameHistory";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import styled from "styled-components";

type ISelector = {
  gameWin: { activeTab: number; scrollTo: { scroll: boolean; to: string } };
};

const History = ({
  currencyType,
  contractParams,
  paginationFalse,
  withGradient,
  margin,
  mobileMargin,
}: IHistoryProps) => {
  const contextType = useContext(EthersContext);
  const {
    activeTab,
    scrollTo: { scroll, to },
  } = useSelector((state: ISelector) => state.gameWin);
  const history: any = useRef(null);
  const { myGames, historyAll, highRollers } = useGameHistory({
    ...contractParams,
  });
  const { loaded } = contextType;
  const executeScroll = () => history.current.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scroll && executeScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts =
    TABS[activeTab].key === "all" ? historyAll : TABS[activeTab].key === "highrollers" ? highRollers : myGames;
  const [postsPerPage] = useState(8);
  const [value, setValue] = useState(postsPerPage);
  const changeValue = (e: any) => {
    setValue(e.target.value);
  };
  const indexOfLastPost = currentPage * value;
  const lastPageNumber =
    TABS[activeTab].key === "all"
      ? historyAll.length / value
      : TABS[activeTab].key === "highrollers"
      ? highRollers.length / value
      : myGames.length / value;
  const indexOfFirstPost = indexOfLastPost - value;
  const currentPosts =
    TABS[activeTab].key === "all"
      ? historyAll.slice(indexOfFirstPost, indexOfLastPost)
      : TABS[activeTab].key === "highrollers"
      ? highRollers.slice(indexOfFirstPost, indexOfLastPost)
      : myGames.slice(indexOfFirstPost, indexOfLastPost);
  const loading = "LOADING";
  const [dots, setDots] = useState("");
  const interval = setInterval(() => {
    setDots((initial) => initial + " 1");
  }, 1000);
  const back = () => {
    setCurrentPage((init) => init - 1);
  };
  const forward = () => {
    setCurrentPage((init) => init + 1);
  };
  if (!loaded) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    interval;
  } else {
    clearInterval(interval);
  }
  const load = loading + dots;
  const lastItemOfPage = currentPage * value;
  const firstItemOfPage = currentPage * value - value + 1;
  return (
    <StyledDiv margin={margin} mobileMargin={mobileMargin} paginationFalse={paginationFalse}>
      <HistoryNav activeTab={activeTab} paginationFalse={paginationFalse} />
      <HistoryStyled.StyledTable withGradient={withGradient} currencyType={currencyType}>
        <thead ref={history}>
          <tr className="landing">
            <th>{paginationFalse ? "GAME" : "Round Id"}</th>
            <th> {paginationFalse ? "USER" : "Amount(XBLZD)"}</th>
            <th> {paginationFalse ? "WAGER" : "Multiplier"}</th>
            <th> {paginationFalse ? "MULTIPLIER" : "Roll"}</th>
            {!paginationFalse && <th> Result</th>}
            <th> {paginationFalse ? "PAYOUT" : "Payout(XBLZD)"}</th>
          </tr>
          {!paginationFalse && (
            <tr className="emptyRow">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
          )}
        </thead>
        {TABS[activeTab].key === "mygames" && (
          <tbody>{loaded ? currentPosts?.map(!paginationFalse ? singleGameRow : allGamesRow) : load}</tbody>
        )}
        {TABS[activeTab].key === "all" && (
          <tbody>{loaded && currentPosts?.map(!paginationFalse ? singleGameRow : allGamesRow)}</tbody>
        )}
        {TABS[activeTab].key === "highrollers" && (
          <tbody>{loaded && currentPosts?.map(!paginationFalse ? singleGameRow : allGamesRow)}</tbody>
        )}
      </HistoryStyled.StyledTable>
      {!paginationFalse && loaded && totalPosts ? (
        <Pagination
          leftDisabled={currentPage === 1}
          rightDisabled={currentPage >= lastPageNumber}
          firstItemOfPage={totalPosts.length === 0 ? 0 : firstItemOfPage}
          lastItemOfPage={lastItemOfPage > totalPosts.length ? totalPosts.length : lastItemOfPage}
          totalPosts={totalPosts}
          pageBack={back}
          pageForward={forward}
          changeValue={changeValue}
          value={value}
        />
      ) : (
        load
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<{ margin?: string; mobileMargin?: string; paginationFalse?: boolean }>`
  max-width: ${({ paginationFalse }) => (paginationFalse ? "1550px" : " 1300px")};
  margin: ${({ margin }) => margin || "0 auto"};
  border-radius: 5px;
  @media (max-width: 520px) {
    margin: ${({ mobileMargin }) => mobileMargin};
  }
`;

export default History;
