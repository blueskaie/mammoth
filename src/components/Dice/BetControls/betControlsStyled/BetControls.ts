import styled from "styled-components";

const StyledControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "controls controls"
    "Bet Payout"
    "Button Button";
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  min-height: 100%;
  margin-top: 6px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "Bet Button Payout"
      "controls controls controls";
    grid-column-gap: 16px;
    grid-row-gap: 24px;
  }
  .addon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -8px;
    right: 0;
    border-radius: 0 4px 4px 0;
    overflow: hidden;
    padding: 0 11px 8px 0;

    &-advaced {
      border-radius: 0;
      right: 50px;

      &:nth-of-type(2) {
        right: 100px;
      }
    }
  }
`;

const StyledControlsFlip = styled.div`
  margin: 21px 0 0 0;
  display: inline-flex;
  width: 100%;
  padding: 0 15px;
  @media (max-width: 520px) {
    margin: 10px 0 0 0;
    padding: 0 0;
  }
`;
const StyledControlsFightNight = styled.div`
  background-color: #0e0e0e;
  padding: 5px 0 0 0;
  text-align: -webkit-center;
  width: 683px;
  @media (max-width: 520px) {
    margin: 10px 0 0 0;
    padding: 0 0;
  }
`;

const StyledControlsWheel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0f1a2b;
  width: 100%;
  margin: 0 auto;
  padding: 0 10%;
`;
const StyledPrimarySelectDiv = styled.div`
  display: flex;
`;
const StyledPrimaryButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 165px;
    }
  }
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 132px;
    }
  }
`;

const StyledBtnRollContainer = styled.div`
  border-radius: 40px 40px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 0 auto 0;
  max-width: 100%;
  width: 100%;
  justify-content: space-around;
  grid-area: Button;

  .money-button-container {
    position: absolute;
    top: -22px;
    left: calc(50% - 80px);
  }

  &-note {
    color: #d4bdef;
    display: block;
    font-size: 12px;
    line-height: 1.33;
    margin: 8px auto;

    @media (min-width: 768px) {
      margin-bottom: 16px;
    }
  }
`;

const StyledBtnBetAmount = styled.button`
  appearance: none;
  width: 36px;
  height: 36px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 25px;
  color: #95a0b2;
  border: none;
  font-weight: bold;
  stroke: #bebec2;
  background-color: #000000;
  padding: 24px 34px;
  border-radius: 6px;
  transition: all 0.3s ease;
  &.long {
    width: 75px;
    height: 55px;
    background: #000000;
    border-radius: 7.89255px;
  }
  &:hover:enabled {
    background: linear-gradient(180deg, #0fb3d7 0%, #0f3bd7 81.77%, #0f72d7 100%);
    color: #fff;
  }

  &:focus {
    outline: none;
    background: linear-gradient(180deg, #0fb3d7 0%, #0f3bd7 81.77%, #0f72d7 100%);
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  @media (max-width: 520px) {
    font-size: 18px;
    &.long {
      width: 48.99px;
      height: 37.99px;
    }
  }
  @media (max-width: 375px) {
    line-height: 17px;
    padding: 10px 19px;
    &.long {
      width: 39.02px;
      height: 29.45px;
      font-size: 14.3493px;
      border-radius: 3.29119px;
    }
  }
`;

const StyledBtnNoAccess = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  max-width: 240px;
  text-align: center;
  position: relative;
  top: -20px;
`;

const StyledControlContainer = styled.div`
  display: flex;
  grid-area: controls;
  justify-self: center;
  justify-content: center;
  &.long {
    margin: 12px 0 20px;
  }
  @media (max-width: 520px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledControlInputAddonAdvance = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  right: 10px;
  bottom: 11px;
  margin: ${({ margin }) => margin};
  @media (max-width: 585px) {
    bottom: 8px;
  }
  &:nth-of-type(2) {
    right: 50px;
  }
  &:nth-of-type(3) {
    right: 90px;
  }
  &:nth-of-type(4) {
    right: 130px;
  }
`;

const StyledDivider = styled.div`
  width: 5px;
  height: auto;
  display: inline-block;
`;
const RollingLoader = styled.div`
  width: 5px;
  height: auto;
  display: inline-block;
`;
const StyledBtnContent = styled.div`
  background: none;
`;
const StyledBtnText = styled.span`
  color: #13224a;
  font-size: 15px;
  font-family: Proxima Nova;
  @media (max-width: 520px) {
    font-size: 7.50991px;
  }
  @media (max-width: 375px) {
    font-size: 6px;
  }
`;
const StyledBtnBet = styled.span`
  display: block;
  font-size: 20px;
  font-family: Proxima Nova;
  padding: 15px 0px 15px 0px;
  @media (max-width: 520px) {
    font-size: 17.2102px;
    line-height: 17px;
    padding: 0 0 0px 0px;
  }
  @media (max-width: 375px) {
    font-size: 13.8711px;
    line-height: 17px;
    padding: 0 0 0 0;
  }
`;
export {
  StyledControls,
  StyledControlsFlip,
  StyledControlsFightNight,
  StyledControlsWheel,
  StyledPrimaryButtonDiv,
  StyledBtnRollContainer,
  StyledBtnBetAmount,
  StyledBtnNoAccess,
  StyledControlInputAddonAdvance,
  StyledDivider,
  RollingLoader,
  StyledControlContainer,
  StyledBtnText,
  StyledBtnContent,
  StyledBtnBet,
  StyledPrimarySelectDiv,
};
