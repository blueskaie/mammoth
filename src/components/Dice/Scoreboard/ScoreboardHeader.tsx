import * as ScStyled from "./scorboardStyled";
import { ReactComponent as Icon } from "./assets/images/icon .svg";
export default function ScoreboardHeader(props: any) {
  const { dropdownOpen, toggleDropdown, roundsCount } = props;
  return (
    <ScStyled.StyledTopBar>
      <ScStyled.StyledH2 className="title">SCOREBOARD</ScStyled.StyledH2>
      <ScStyled.StyledDropDown className={`dropdown ${{ open: dropdownOpen }}`}>
        <ScStyled.StyledButtonSecond className="dropdown-title" onClick={toggleDropdown} type="button">
          <ScStyled.StyledP color="rgba(104, 213, 215, 1)" fontSize="12px">
            {roundsCount} Rounds <Icon />
          </ScStyled.StyledP>
        </ScStyled.StyledButtonSecond>
      </ScStyled.StyledDropDown>
    </ScStyled.StyledTopBar>
  );
}
