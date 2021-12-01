import React from "react";
import { ScoreWrapper, Section, StyledAmount, StyledDiv, StyledMultiplier } from "./styles";

const props = [
  {
    id: 1,
    name: "PURPLE",
    color: "linear-gradient(97.01deg, #6536F1 1.37%, #5422ED 100%)",
    multiplier: "2.00x",
    amount: 4,
  },
  {
    id: 2,
    name: "RED",
    color: "linear-gradient(97.01deg, #F7768E 1.37%, #F32A66 100%)",
    multiplier: "3.00x",
    amount: 4,
  },
  {
    id: 3,
    name: "GREEN",
    color: "linear-gradient(97.01deg, #36F1B9 1.37%, #2298ED 100%)",
    multiplier: "5.00x",
    amount: 4,
  },
  {
    id: 4,
    name: "YELLOW",
    color: "linear-gradient(97.88deg, #FFBA68 1.52%, #FF6464 84.31%)",
    multiplier: "50.00x",
    amount: 4,
  },
  {
    id: 5,
    name: "BONUS",
    color: "linear-gradient(98deg, #FFFFFF 0%, #F1F3FD 100%)",
    textColor: "rgb(33, 43, 55)",
    multiplier: "1.20x",
    amount: 4,
  },
];

export default function BetHistory() {
  return (
    <ScoreWrapper>
      {props.map((e) => (
        <Section key={e.id}>
          <StyledDiv>{e.name}</StyledDiv>
          <StyledMultiplier color={e.textColor && e.textColor} background={e.color}>
            {e.multiplier}{" "}
          </StyledMultiplier>
          <StyledAmount>{e.amount}</StyledAmount>
        </Section>
      ))}
    </ScoreWrapper>
  );
}
