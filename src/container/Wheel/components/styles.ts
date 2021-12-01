import styled, { css } from "styled-components";

//@ts-ignore
import wheelSpin from "../assets/sounds/wheelSpin.mp3";
//@ts-ignore
import wheelWin from "../assets/sounds/win.mp3";
//@ts-ignore
import wheelLose from "../assets/sounds/lose.mp3";
import { ReactComponent as Dropdown } from "../assets/Dropdown.svg";

export const StyledBodyWrapper = styled.div`
  @media (max-width: 1000px) {
    padding: 14px;
  }
`;

//WheelScore
export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 20px 10px 20px;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
`;

export const StyledDiv = styled.div`
  width: 64px;
  text-align: start;
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
`;
export const StyledMultiplier = styled(StyledDiv)<{ background: string; color?: string }>`
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  border-radius: 4px;
  padding: 2px;
  margin-left: 25px;
`;
export const StyledAmount = styled(StyledDiv)`
  font-weight: 600;
  font-size: 14px;
  text-align: end;
`;

//Multiplier
export const MultiplierWrapper = styled.div`
  width: 100%;
  max-width: 610px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button<{
  borderColor?: string;
  activeBorder?: string;
  filterColor?: string;
}>`
  width: 100%;
  height: 50px;
  background: #222934;
  border-radius: 2.27345px;
  margin: 0 3px 13px;
  font-family: "Proxima Nova", sans serif;
  font-weight: bold;
  font-size: 31.8193px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: ${({ borderColor }) => `8px solid ${borderColor}`};

  color: #ffffff;
  :hover {
  }
  &.active {
  }
`;

//Wheel
export const WheelWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  @media (max-width: 585px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;
export const WheelAnimation = styled.div<{ stop?: boolean }>`
  height: 409px;
  width: 409px;
  background: rgba(22, 7, 80, 0.3);
  border-radius: 50%;
  ${({ stop }) =>
    stop &&
    css`
      animation: roll 1.3s infinite linear forwards;
    `}
  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledIndicator = styled.img`
  position: absolute;
  left: 174px;
  top: -22px;
`;
export const WinLose = styled.div`
  position: absolute;
  left: 47px;
  top: 113px;
  z-index: 6;
`;
export const StyledControlsWheel = styled.div`
  margin: 20px auto;
  display: inline-flex;
  width: 100%;
`;

//ColorsResult
export const ColorsWrapper = styled.div`
  width: 48px;
  height: 214px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  order: 3;
  overflow: hidden;
  padding: 6px;
  margin-right: 2%;
  background: #212b37;
  border-radius: 8px;
  @media (max-width: 585px) {
    height: 278px;
    width: 31px;
    margin-top: 12px;
    margin-right: 0;
  }
`;
export const StyledColor = styled.div<{ width: string; background: string }>`
  padding: 1px 0;
  width: ${({ width }) => width};
  margin: 4px 0px;
  background: ${({ background }) => background};
  border-radius: 4px;
  @media (max-width: 585px) {
    margin: 8px 0px;
    max-width: 16px;
  }
`;

export const WheelContainer = styled.div`
  width: 100%;
  max-width: 938px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0f1a2b;
  border-radius: 4.93882px;
  margin-bottom: 24px;
  padding: 0 30px;
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background: #0f1a2a;
  border-radius: 50%;
  width: 299.42px;
  height: 299.42px;
  top: 54px;
  left: 54px;
  img {
    mix-blend-mode: overlay;
    opacity: 0.5;
  }
`;
export const StyledSectionBody = styled.div`
  display: flex;
  width: 100%;
  background: #162338;
  border-radius: 26px 13px 13px 26px;
  margin: 10px 0;
`;
export const StyledSection = styled.div<{ width: string; background?: string }>`
  position: relative;
  display: flex;

  width: ${({ width }) => width};
  height: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 41.8731px;
  line-height: 51px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ background }) => background};
  border-radius: 13px;
  color: #ffffff;
`;

export const StyledDropdown = styled(Dropdown)`
  position: absolute;
  right: 20px;
`;
export const mp3 = {
  wheelSpin,
  wheelWin,
  wheelLose,
};
