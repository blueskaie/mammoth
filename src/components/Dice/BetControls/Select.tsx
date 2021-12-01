import * as BetControlStyled from "./betControlsStyled/BetControls";
import PrimarySelect from "../PrimarySelect/PrimarySelect";

const Select = ({
  isRolling,
  active,
  handleRollClick,
}: any) => {
  return (
      <BetControlStyled.StyledPrimarySelectDiv>
              <>
                <PrimarySelect
                  btnBackgroundColor={"#0F6CCB"}
                  connectWidth="142px"
                  onchange={() =>
                    handleRollClick()
                  }
                  disabled={active || isRolling}
                />
              </>
      </BetControlStyled.StyledPrimarySelectDiv>
  )
};

export default Select;
