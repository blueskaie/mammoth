import React, { useRef } from "react";
import * as HomeSt from "./homeStyled/HomeStyled";
import GameLink from "./GameLink";
import { gameData } from "./gamesData";
import { Slider } from "./Slider";
import mammoth from "./assets/Mammoth.svg";
import History from "../Dice/History/History";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const myRef = useRef<any>(null);
  const handleSignUp = () => {
    console.log("clicked");
    window.location.href = "https://pancakeswap.finance/swap?outputCurrency=0x03fffb18c0ea6b0ad4fa3b5226512b334587686f";
  };
  return (
    <StyledDiv>
      <Helmet>
        <title>Mammoth.Bet</title>
        <meta property="og:title" content="Provably fair gambling!" />
        <meta name="description" content="Provably fair gambling!" />
      </Helmet>
      <HomeSt.Container>
        {/* <HomeSt.PlayNowBlock>
        <HomeSt.PlayBtn type="button" onClick={executeScroll}>
          PLAY NOW!
        </HomeSt.PlayBtn>
      </HomeSt.PlayNowBlock> */}
        <Slider />
        <HomeSt.GameBlocks ref={myRef}>
          {gameData.map((list) => (
            <GameLink key={list.id} {...list} />
          ))}
        </HomeSt.GameBlocks>
      </HomeSt.Container>
      <Container>
        <StyledMammoth mobileVisible="initial" visible="none" src={mammoth} alt="" />
        <HomeSt.InfoBlock>
          <StyledTextImageContainer>
            <StyledMammothContainer>
              <StyledMammoth src={mammoth} alt="" />
            </StyledMammothContainer>
            <StyledTextContainer>
              <StyledTitle>MAMMOTH.BET</StyledTitle>
              <StyledText>
                Mammoth.Bet is the most innovative online gaming platform on Binance Smart Chain.
                <br />
                We believe in building a decentralized future, starting with on-chain games that are transparent and
                provably fair. We are exclusively using the xBLZD token as the betting chip, with 10% of the house
                winnings burned and 50% distributed to the TUSK token staking pools. The goal is building a community
                platform governed by TUSK that brings additional utility to the xBLZD ecosystem.
              </StyledText>
              <StyledButton
                onClick={() => {
                  handleSignUp();
                }}
              >
                Get TUSK here!
              </StyledButton>
            </StyledTextContainer>
          </StyledTextImageContainer>
        </HomeSt.InfoBlock>
      </Container>
      <History
        margin="100px auto 0"
        currencyType={"XBLZD"}
        contractParams={{ ContractName: "DiceRoll", JSON_NAME: "DICE_JSON" }}
        paginationFalse
      />
      {/* <HomeSt.GetMoreBonus>
        <p>Get More Bonus</p>
        <HomeSt.PlayBtn type="button" onClick={executeScroll}>
          PLAY NOW!
        </HomeSt.PlayBtn>
      </HomeSt.GetMoreBonus> */}
    </StyledDiv>
  );
};

const StyledTitle = styled.div`
  width: 100%;
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #8497b8;
  margin: 0 0 10px;
  @media (max-width: 1440px) {
    color: #ffffff;
  }
  @media (max-width: 1151px) {
    text-align: center;
  }
`;

const StyledText = styled.p`
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #b9cae9;
  line-height: 30px;
  @media (max-width: 1440px) {
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 1151px) {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
  }
`;

const StyledMammothContainer = styled.div`
  position: relative;
  width: 40%;

  @media (max-width: 1440px) {
    width: 50%;
    // padding: 50px 0;
    // bottom: 110px;
  }
  @media (max-width: 1151px) {
    display: none;
  }
`;

const StyledMammoth = styled.img<{ visible?: string; mobileVisible?: string }>`
  width: 475px;
  height: 440px;
  object-fit: cover;
  object-position: top;
  display: ${({ visible }) => visible};
  @media (max-width: 1440px) {
    width: 380px;
    height: 360px;
    object-fit: cover;
    object-position: top;
  }
  @media (max-width: 1151px) {
    display: ${({ mobileVisible }) => mobileVisible};
  }
`;

const StyledButton = styled.button`
  background: #0f6ccb;
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  padding: 15px 30px;
  margin-top: 30px;
  justify-content: center;
  width: 50%;
  @media (max-width: 1440px) {
    width: 40%;
  }
  @media (max-width: 520px) {
    width: 180px;
  }
`;

const StyledDiv = styled.div`
  margin-bottom: 130px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  > img {
    position: absolute;
    width: 365px;
    height: 327px;
    left: 50%;
    top: -162px;
    transform: translate(-50%, -50%);
  }
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1020px;
`;

const StyledTextImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;
export default Home;
