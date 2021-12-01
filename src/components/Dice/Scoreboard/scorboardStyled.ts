import styled from "styled-components";

const StyledScoreBoard = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .title {
    margin: 0;
  }
`;
const StyledTopBar = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #fff;
  padding: 17px 36px 17px 18px;
  margin-left: -20px !important;
  background: #212b37;
  border-radius: 6px 0;
  @media (max-width: 585px) {
    padding-right: 68px;
  }
`;

const StyledP: any = styled.p`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ fontSize }: any) => (fontSize ? fontSize : "14px")};
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.3px;
`;

const StyledDropDown = styled.div`
  position: relative;
  z-index: 100;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  &-title {
    appearance: none;
    font-size: 12px;
    line-height: 22px;
    text-align: right;
    color: #ece3f7;
    width: 100%;

    svg {
      margin-left: 4px;
      vertical-align: middle;
    }
  }

  &-list {
    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(31, 8, 57, 0.6);
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 30px;
    padding: 16px 16px 8px;
    width: 124px;
    transform: rotateX(90deg) translateY(-50%);
  }

  &-btn {
    appearance: none;
    display: block;
    text-align: left;
    font-size: 14px;
    margin: 0 0 8px;
    line-height: 22px;
    color: #2a0b4f;
  }

  &.open {
    .dropdown-list {
      transform: rotateX(0) translateY(0);
      transition: all 0.2s;
    }
  }
`;

const StyledButtonSecond: any = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  -webkit-appearance: none;
`;

const StyledButton: any = styled.div`
  position: relative;
  border-radius: 6px;
  -webkit-appearance: none;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.5px;
  width: 63px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 6px 0;
  cursor: pointer;
  &.active {
    color: #ffffff;
    font-weight: 600;
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -4px;
      left: 0;
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

const StyledTypeSwitcher = styled.div`
  margin-top: 7px;
  padding: 4px 24px;
  display: flex;
  justify-content: space-between;
  background: #212b37;
`;

const StyledData = styled.div`
  padding: 0 24px;
  margin-top: 7px;
  display: flex;
  height: 180px;
  flex-direction: column;
  &-row {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const StyledDataContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #bebec2;
  padding: 12px 0;
  :not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-width: 80%;
  }
  .label {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #ffffff;
  }
  .count {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #68d5d7;
  }
  .percent {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export {
  StyledScoreBoard,
  StyledTopBar,
  StyledH2,
  StyledP,
  StyledDropDown,
  StyledButtonSecond,
  StyledButton,
  StyledTypeSwitcher,
  StyledData,
  StyledDataContainer,
};
