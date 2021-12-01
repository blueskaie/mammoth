import React from "react";
import { ColorsWrapper, StyledColor } from "./styles";

const colors = [
  { name: "PURPLE", color: " linear-gradient(97.01deg, #6536F1 1.37%, #5422ED 100%)", width: "12px", key: 1 },
  { name: "RED", color: " linear-gradient(97.01deg, #F7768E 1.37%, #F32A66 100%)", width: "24px", key: 2 },
  { name: "GREEN", color: "  linear-gradient(97.01deg, #36F1B9 1.37%, #2298ED 100%)", width: "24px", key: 3 },
  { name: "YELLOW", color: "linear-gradient(97.88deg, #FFBA68 1.52%, #FF6464 84.31%)", width: "36px", key: 4 },
  { name: "BONUS", color: " #FFFFFF", width: "36px" },
];

export default function ColorsComponent() {
  return (
    <ColorsWrapper>
      {colors.map((e, i) => (
        <StyledColor background={e.color} width={e.width} key={i} />
      ))}
    </ColorsWrapper>
  );
}
