import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import FairnessModal from "../Modals/Fairness/Fairness";
import RulesModal, { StyledBtn } from "../Modals/Rules/Rules";
import styled from "styled-components";
import { ReactComponent as AudioIcon } from "assets/img/soundOn.svg";
import { IToolBarProps } from "interface/IComponents/IToolBar";

const Toolbar = ({ isRealMode, isRolling, onModeChange, isAudioEnabled, onAudioToggle, minBet, maxPayout }: IToolBarProps) => {
  return (
    <StyledContainer>
      <ModeSwitcher isRealMode={isRealMode} onChange={onModeChange} disabled={isRolling} />
      <StyledNav>
        <FairnessModal btnClass="toolbar-btn" />
        <RulesModal btnClass="toolbar-btn" minBet={minBet} maxPayout={maxPayout} />
        <StyledBtn
          className={`toolbar-btn toolbar-btn sound ${isAudioEnabled && "active"}`}
          type="button"
          onClick={onAudioToggle}
        >
          <AudioIcon />
        </StyledBtn>
      </StyledNav>
    </StyledContainer>
  );
};

export default Toolbar;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;
const StyledNav = styled.div`
  display: flex;
`;
