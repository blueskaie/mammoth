import styled from "styled-components";
import { NavLink } from "react-router-dom";
import indicator from "assets/img/Indicator.png";

export const StyledNav = styled.nav`
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 27px 0 29px;
  display: none;
  @media (min-width: 1255px) {
    display: flex;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  width: 183px;
  display: flex;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #465269;
  div {
    position: absolute;
    height: 13px;
    width: 100%;
    background: transparent;
    bottom: -12px;
  }
  :hover {
    color: white;
  }
  &.active {
    color: white;
    div {
      background-image: ${`url(${indicator})`};
      background-size: 100%;
    }
  }
  @media (max-width: 1399px) {
    width: 143px;
    line-height: 20px;
    div {
      height: 6px;
    }
  }
`;

export const StyledLinkInactive = styled("span")`
  position: relative;
  width: 183px;
  display: flex;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #465269;
  div {
    position: absolute;
    height: 9px;
    width: 100%;
    background: transparent;
    bottom: 0;
  }
  &.active {
    color: white;
    div {
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        #cddbff 0%,
        rgba(62, 167, 244, 0.901042) 36.46%,
        rgba(0, 102, 255, 0) 100%
      );
      mix-blend-mode: color-dodge;
    }
  }
  @media (max-width: 1399px) {
    width: 143px;
    line-height: 20px;
    div {
      height: 6px;
    }
  }
`;

export const StyledBorder = styled.div`
  width: 2px;
  height: 64px;
  background: #02334f;
  border-radius: 10px;
`;
export const StyledTopBar: any = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  background: #141a25;
  width: 100%;
  margin: auto;
  top: 0;
  height: 64px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 0 1px rgba(0, 0, 0, 0.25);
  padding: 1px 25px;
  @media (max-width: 1255px) {
    justify-content: space-between;
  }
  @media (max-width: 620px) {
    padding: 0 10px;
  }
`;

export const StyledLogo = styled(NavLink)`
  position: relative;
  > span {
    position: absolute;
    bottom: -15px;
    right: 0;
    font-size: 16px;
    font-weight: 700;
    color: #465269;
  }

  @media (max-width: 620px) {
    > img {
      width: 100px;
    }
    > span {
      font-size: 12px;
    }
  }
`;

export const StyledImg = styled.img<{ opacity?: number }>`
  position: absolute;

  &.full {
    display: none;
    width: 70%;
    z-index: -1;
    @media (max-width: 1600px) {
      display: flex;
    }
  }
  &.half {
    width: 173px;
    height: 86%;
    right: 0;
    bottom: -55px;
    object-fit: cover;
    object-position: bottom;
    opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
    transition: opacity 0.3s ease;
  }
`;

export const Notification = styled.div`
  width: 29px;
  height: 37px;
  margin-left: 36px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1399px) {
    margin-left: 26px;
  }
`;
