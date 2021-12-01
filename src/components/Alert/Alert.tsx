import React from "react";
import { IAlertGetProps } from "interface/IComponents/IAlert";
import styled from "styled-components";

const bgState: { [key: string]: string } = {
  success: "#4CFC92",
  error: "#FC4C4C",
  warning: "#FCAB4C",
};

const Alert = ({ message, alert, alertType = "success", hideAlert }: IAlertGetProps) => {
  return (
    <StyledAlertContainer bgState={bgState[alertType]} isOpen={alert}>
      <div>
        <span onClick={() => hideAlert(false)}>X</span>
        <p>{message}</p>
      </div>
    </StyledAlertContainer>
  );
};

export default Alert;

const StyledAlertContainer = styled.div<{ bgState: string; isOpen: boolean }>`
  position: fixed;
  width: 436px;
  background: ${({ bgState }) => bgState};
  border-radius: 10px;
  z-index: 4;
  left: 50%;
  transform: ${({ isOpen }) => (isOpen ? "translate(-50%, 50%)" : "translate(-50%, -400px)")};
  transition: all 0.3s ease;
  > div {
    padding: 25px 10px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    > span {
      position: absolute;
      right: 9px;
      top: 9px;
      color: #091627;
      font-weight: bold;
      cursor: pointer;
    }
    > p {
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 32px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #091627;
    }
  }
`;
