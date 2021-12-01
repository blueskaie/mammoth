import styled from "styled-components";
import HEADS from "../assets/images/heads.png";
import TAILS from "../assets/images/tails.png";
import { StyledContainer, StyledIcon, StyledMultiplier, StyledName } from "./styled";
const ChoosePart = ({ isHeads, active, name, multiplier, onClick, disabled }: any) => {
  const data = { onClick, active, isHeads, disabled };
  return (
    <BorderedContainer className="gridItem" {...data}>
      <StyledName active={active} isHeads={isHeads}>
        {name}
      </StyledName>
      <StyledContainer>
        <StyledIcon src={isHeads ? HEADS : TAILS} />
        <StyledMultiplier>{multiplier}x</StyledMultiplier>
      </StyledContainer>
    </BorderedContainer>
  );
};

export default ChoosePart;

const BorderedContainer = styled.button<{ active?: boolean; isHeads?: boolean }>`
  border-radius: 10px;
  padding: 2px;
  cursor: pointer;
  width: auto;
  font-family: "Inter", sans-serif;
  grid-area: ${({ isHeads }) => (isHeads ? "heads" : "tails")};
  background-color: ${({ active, isHeads }) => (active ? (isHeads ? "#ccb436" : "#2f93c1") : "")};
  :disabled {
    cursor: default;
  }
  // @media (max-width: 623px) {
  //   :nth-child(1) {
  //     margin-right: 24px;
  //   }
  // }
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 630px) {
    margin: 0 0 0 0;
  }
`;
