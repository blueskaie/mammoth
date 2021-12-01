import styled from "styled-components";

const StyledTable: any = styled.table<{ withGradient?: boolean }>`
  tr {
    background: linear-gradient(270deg, rgba(105, 0, 50, 0.37) 0%, rgba(0, 0, 0, 0) 101.01%);
    &.won {
      background: linear-gradient(270deg, rgba(0, 105, 17, 0.37) 0%, rgba(0, 0, 0, 0) 101.01%);
    }
    &.landing {
      background: #191b30;
      th {
        color: #a0988b;
      }
    }
    width: 100%;

    th {
      &:nth-child(3),
      &:nth-child(4) {
        display: table-cell;
        @media (max-width: 568px) {
          display: none;
        }
      }
    }
  }
  .emptyRow {
    background: #222934;
    > th {
      padding: 30px 0;
    }
  }

  th {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    font-style: normal;
    padding: 19px 17px;
    color: #fff;
    letter-spacing: 0.2px;
    text-align: start;
    @media (max-width: 768px) {
      padding: 12px 7px;

      font-size: 12px;
      line-height: 14px;
    }
    &:last-child {
      text-align: end;
    }
    &.greenText {
      color: #6fb651;
    }
    &.paginationFalse {
      color: #a0988b;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledTabsBtn = styled.button<{ paginationFalse?: boolean }>`
  appearance: none;
  color: #7e7d84;
  font-family: "Proxima Nova", sans-serif;
  font-weight: bold;
  font-size: ${({ paginationFalse }) => (paginationFalse ? "20px" : "15px")};
  line-height: 24px;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  padding: 10px 15px;
  &:focus,
  &::-moz-focus-inner {
    text-decoration: none;
    border: 0;
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    padding: 19px 10px;
    font-size: 14px;
    line-height: 16px;
  }
  &.active {
    color: #fff;
    border-bottom: 1px solid ${({ paginationFalse }) => (paginationFalse ? "none" : "#0d6eff")};
  }
`;
export { StyledTable, StyledNav, StyledTabsBtn };
