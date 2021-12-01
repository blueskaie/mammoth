import React from "react";
import styled from "styled-components";
import { IFairnessModalProps } from "../../../interface/IComponents/IModals/iFairnessModal";

const FairnessModal = ({ tabs, activeTab, onTabChange, gridTemplatesColumn }: IFairnessModalProps) => {
  return (
    <StyledTabs gridTemplatesColumn={gridTemplatesColumn}>
      {tabs.map((key: string) => (
        <StyledTabsBtn
          className={`${activeTab === key && "active"}`}
          type="button"
          key={key}
          onClick={() => onTabChange(key)}
        >
          {key}
        </StyledTabsBtn>
      ))}
    </StyledTabs>
  );
};

export default FairnessModal;

const StyledTabs = styled.nav<{ gridTemplatesColumn?: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplatesColumn }) => (gridTemplatesColumn ? gridTemplatesColumn : "1fr 1fr")};
  grid-gap: 16px;
  margin-bottom: 32px;
`;
const StyledTabsBtn = styled.button`
  position: relative;

  appearance: none;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.2px;
  text-transform: capitalize;
  padding: 0;
  width: 100%;
  font-style: normal;
  padding-bottom: 13px;

  &.active {
    color: #fff;
    font-weight: 600;
    &:after {
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 2px;
      position: absolute;
      left: 0px;
      bottom: -5px;
      background: linear-gradient(
        129.62deg,
        #15f1b2 -12.9%,
        #20e2b8 2.06%,
        #3ebac7 30.89%,
        #6e7bdf 70.31%,
        #9547f3 100%
      );
    }
  }
`;
