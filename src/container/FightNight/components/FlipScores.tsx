import { StyledIcon, StyledScoreContainer, StyleScoreName, ScoreCount } from "./styled";
import HEADS from "../assets/images/HeadPart.svg";
import TAILS from "../assets/images/TailsPart.svg";
import styled from "styled-components";

export default function FlipScores(props: any) {
  const { HScore, TScore } = props;
  return (
    <FlexContainer>
      <StyledScoreContainer>
        <StyledIcon src={HEADS} />
        <StyleScoreName>HEADS</StyleScoreName>
        <ScoreCount isHeads>{HScore}</ScoreCount>
      </StyledScoreContainer>
      <StyledScoreContainer>
        <StyledIcon src={TAILS} />
        <StyleScoreName>TAILS</StyleScoreName>
        <ScoreCount>{TScore}</ScoreCount>
      </StyledScoreContainer>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  padding: 35px 20px 26px;
  @media (max-width: 999px) {
    padding: 30px 46px 32px;
  }
`;
