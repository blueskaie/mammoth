import * as HistoryStyled from "./historyStyled/historyStyled";
import React from "react";
import { TABS } from "./historyData";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../redux/actions/gameWin";

const HistoryNav = ({ activeTab, paginationFalse }: { activeTab: number; paginationFalse?: boolean }) => {
  const dispatch = useDispatch();

  return (
    <HistoryStyled.StyledNav>
      {TABS.map(({ key, title }, ind) => (
        <HistoryStyled.StyledTabsBtn
          paginationFalse={paginationFalse}
          key={key}
          className={`${activeTab === ind ? "active" : ""}`}
          type="button"
          onClick={() => dispatch(setActiveTab(ind))}
        >
          {title}
        </HistoryStyled.StyledTabsBtn>
      ))}
    </HistoryStyled.StyledNav>
  );
};

export default HistoryNav;
