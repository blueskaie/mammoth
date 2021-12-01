import React, { useState } from "react";
import styled from "styled-components";
import { IModeSwitcherProps } from "interface/IComponents/iModeSwitcher/IModeSwitcher";

const ModeSwitcher = ({ isRealMode, onChange, disabled }: IModeSwitcherProps) => {
  const [isCheckedDemo, setIsCheckedDemo] = useState(!isRealMode);
  const [isChecked, setIsChecked] = useState(isRealMode);
  return (
    <StyledSwitcher>
      <StyledButton
        isRealMode={isChecked}
        margin="0 15px 0 0"
        disabled={disabled}
        onClick={() => {
          setIsCheckedDemo(false);
          setIsChecked(true);
          onChange(true);
        }}
      >
        Real Mode
      </StyledButton>
      <StyledButton
        disabled={disabled}
        onClick={() => {
          setIsCheckedDemo(true);
          setIsChecked(false);
          onChange(false);
        }}
        isRealMode={isCheckedDemo}
      >
        Demo Mode
      </StyledButton>
    </StyledSwitcher>
  );
};

export default ModeSwitcher;

const StyledSwitcher = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const StyledButton = styled.button<{
  margin?: string;
  isRealMode: boolean;
}>`
  background: ${({ isRealMode }) => (isRealMode ? "#4CFC92" : "#11161F")};
  color: ${({ isRealMode }) => (isRealMode ? "#202224" : "#EAF1F7")};
  font-family: "Proxima Nova";
  width: 109px;
  margin: ${({ margin }) => margin};
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid ${({ isRealMode }) => (isRealMode ? "transparency" : "#0F72D7")};
  transition: all 0.3s ease;
  @media (max-width: 520px) {
    width: 80px;
    font-size: 12px;
  }
`;
