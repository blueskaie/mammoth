import React from "react";
import styled from "styled-components";
import { ReactComponent as Facebook } from "assets/img/Facebook.svg";
import { ReactComponent as Instagram } from "assets/img/Instagram.svg";
import { ReactComponent as Twitter } from "assets/img/Twitter.svg";

const SocialMedia = () => {
  return (
    <StyledSocialMediaContainer>
      <StyledTitle>Join us on Social Media!</StyledTitle>
      <StyledIconContainer>
        <a href="https://twitter.com/mammothbet?lang=en" target="__blank" rel="noreferrer">
          <Twitter />
        </a>
        <a href="https://www.facebook.com/Mammoth-Gaming-105102838542245/" target="__blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/mammoth.bet/" target="__blank" rel="noreferrer">
          <Instagram />
        </a>
      </StyledIconContainer>
    </StyledSocialMediaContainer>
  );
};

export default SocialMedia;

const StyledTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 20px;
  z-index: 1;
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  > a {
    width: 40px;
    height: 40px;
    > svg {
      width: 40px;
      height: 40px;
    }
  }
`;
