import React from "react";
import styled from "styled-components";
import SocialMedia from "components/WelcomePopUp/SocialMedia";
const SecondSlide = ({ handleOnClick }: { handleOnClick: () => void }) => {
  return (
    <>
      <StyledSecondSlideContainer>
        <h1>Stay tuned for a</h1>
        <h1>$1500 Giveaway</h1>
        <SocialMedia />
      </StyledSecondSlideContainer>
      <StyledButton onClick={() => handleOnClick()}>THANK YOU!</StyledButton>
    </>
  );
};

export default SecondSlide;

const StyledSecondSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 140px;
  > h1 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    color: #82bffd;
  }
`;
const StyledButton = styled.button`
  width: 30%;
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #0f6ccb;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  border-radius: 11px;
  padding: 10px 20px;
  position: absolute;
  bottom: -18px;
  z-index: 1;
  @media (max-width: 520px) {
    width: 60%;
  }
`;
