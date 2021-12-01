import React, { useState } from "react";
import * as ScStyled from "./scorboardStyled";
import ScoreboardHeader from "./ScoreboardHeader";

const ROUND_SLICES = [100];
const Scoreboard = ({ children }: any) => {
  const [dropdownOpen] = useState<null | boolean>(null);
  const [roundsCount] = useState(ROUND_SLICES[0]);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <ScStyled.StyledScoreBoard>
      <ScoreboardHeader dropdownOpen={dropdownOpen} roundsCount={roundsCount} />
      {children}
    </ScStyled.StyledScoreBoard>
  );
};

export default Scoreboard;
