import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const CheckBox = ({
  setIsChecked,
  isChecked,
}: {
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  isChecked: boolean;
}) => {
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <StyledInputContainer>
        <StyledLabel>
          <StyledCheckBox type="checkbox" onChange={() => handleOnChange()} />
          <StyledSpan isChecked={isChecked} />
        </StyledLabel>
        <label>Don’t show again</label>
      </StyledInputContainer>
    </>
  );
};

export default CheckBox;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  > label {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 61px;
  height: 28px;
`;

const StyledCheckBox = styled.input`
  opacity: 0;
  height: 40px;
  width: 60px;
  position: absolute;
  cursor: pointer;
  z-index: 1;
`;

const StyledSpan = styled.span<{ isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: #191b30;
  transition: all 0.3s ease;
  ${({ isChecked }) =>
    isChecked &&
    `
      background-color: #76EE59;
    `};
  &::before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    border-radius: 50%;
    transition: all 0.3s ease;
    ${({ isChecked }) =>
      isChecked &&
      `
     -webkit-transform: translateX(29px);
     -ms-transform: translateX(29px);
     transform: translateX(29px);
    `};
  }
`;
