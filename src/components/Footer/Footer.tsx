import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Token } from "./assets/Token.svg";
import Logo from "../../assets/images/MammothLogo.svg";
import dropdown from "./assets/Vector.svg";
import top from "./assets/top.svg";

function Footer() {
  const [show, setShow] = useState(false);
  const divRef = useRef(null);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (show) {
      //@ts-ignore
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);
  return (
    <StyledFooter ref={divRef}>
      <TopButton onClick={scrollTop}>
        <img src={top} alt="" />
      </TopButton>
      <ShowDiv className={show ? "show" : ""}>
        <StyledImg src={Logo} />
        <Dropdown
          onClick={() => {
            return setShow(!show);
          }}
        >
          <img src={dropdown} alt="" />
        </Dropdown>
      </ShowDiv>
      <HiddenDiv className={show ? "show" : ""}>
        <StyledDiv direction="column">
          <StyledDiv>
            <StyledImg src={Logo} />
            <Dropdown
              onClick={() => {
                return setShow(!show);
              }}
            >
              <img src={dropdown} alt="" />
            </Dropdown>
          </StyledDiv>

          <StyledText margin="10px 0 0 0">
            Mammoth.Bet believes in building a decentralized future.
            <br /> Starting with games that are on-chain and provably fair. <br />
            <br />
            Trusted Blockchain Gaming
          </StyledText>
        </StyledDiv>
        <StyledBorder />
        <StyledDiv direction="column" padding="40px 0 0px 0">
          <StyledLink mobilePadding="0 0 10px" to="/" target="_blank">
            TUSK TOKEN
          </StyledLink>
          <StyledLink mobilePadding="0 0 10px" to="/" target="_blank">
            TWITTER
          </StyledLink>
          <StyledLink mobilePadding="0 0 10px" to="/" target="_blank">
            TELEGRAM
          </StyledLink>
          <StyledLink mobilePadding="0 0 10px" to="/" target="_blank">
            BLOG
          </StyledLink>
        </StyledDiv>
        <StyledDiv direction="column" margin="0 0 0 80px" padding="35px 0 0px 0">
          <StyledText fontWeigth="bold" fontSize="16.8px" >
            CONTACT US
          </StyledText>
          <StyledText lineHeight="25px" fontSize="16.8px">
            Contact:&nbsp;
            <StyledLink to="/" color="#0F6CCB" padding="0" fontSize="16.84px">
              support@mammoth.bet
            </StyledLink>
          </StyledText>   
          <StyledText fontSize="16.84px" lineHeight="21px" margin="20px 0 0 0">
            ACCEPTED CURRENCIES
            <StyledToken />
          </StyledText>
        </StyledDiv>
      </HiddenDiv>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background: #141a25;
  box-shadow: 2.52938px 5.05876px 0 1.26469px rgba(0, 0, 0, 0.25);
`;

const StyledImg = styled.img`
  width: 300px;
  @media (max-width: 640px) {
    width: 120px;
  }
`;
const Dropdown = styled.button`
  margin: 5px 0 0 8px;
  padding: 0;
  width: 17px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 10px;
    margin: 2px 0 0 8px;
  }
`;
const TopButton = styled.button`
  position: absolute;
  z-index: 1;
  padding: 0;
  width: 94px;
  height: auto;
  right: 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1200px) {
    right: 5%;
    width: 70px;
  }
  @media (max-width: 620px) {
    width: 60px;
  }
`;

const HiddenDiv = styled.div`
  position: relative;

  display: none;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;

  &.show {
    display: flex;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const ShowDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  &.show {
    display: none;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;
const StyledDiv = styled.div<{ direction?: string; margin?: string; padding?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  @media (max-width: 920px) {
    margin: 0;
  }
`;

const StyledText = styled.div<{ margin?: string; fontSize?: string; fontWeigth?: string; lineHeight?: string }>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
  font-family: Proxima Nova, sans-serif;
  font-weight: ${({ fontWeigth }) => (fontWeigth ? fontWeigth : "normal")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "13.9919px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "25px")};
  letter-spacing: 0.05em;
  color: white;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const StyledBorder = styled.div`
  width: 3.5px;
  height: 178px;
  background: #353e50;
  margin: 60px 0 0 50px;
  @media (max-width: 920px) {
    display: none;
  }
`;

const StyledLink = styled(Link)<{
  padding?: string;
  fontSize?: string;
  fontWeigth?: string;
  lineHeight?: string;
  mobilePadding?: string;
}>`
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: ${({ fontWeigth }) => (fontWeigth ? fontWeigth : "bold")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16.838px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "25px")};
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ color }) => (color ? color : "#fff")};
  padding: ${({ padding }) => padding || "0 0 0 59px"};
  @media (max-width: 1200px) {
    font-size: 12px;
    padding: 0 0 0 10px;
  }
  @media (max-width: 920px) {
    padding: ${({ mobilePadding }) => mobilePadding || "0 0 0 10px"};
  }
`;
const StyledToken = styled(Token)`
  height: 42px;
  width: 42px;
  margin-left: 12px;
  @media (max-width: 920px) {
    width: 25px;
    height: 25px;
  }
`;
export default Footer;
