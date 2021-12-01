import { MultiplierWrapper, StyledButton } from "./styles";
import { coefficientData } from "../data/coefficientData";
import { useDispatch, useSelector } from "react-redux";
import { clickCoefficient } from "../../../redux/actions/slotoWheel";

type IHandleClick = {
  coefficient: string;
  id: number;
};
export default function Multiplier({ isDisabled }: { isDisabled: boolean }) {
  const dispatch = useDispatch();
  const activeClass = useSelector((state: { slotoWheel: { activeClass: any } }) => state.slotoWheel.activeClass);
  const handleClick = ({ coefficient, id }: IHandleClick): void => {
    dispatch(clickCoefficient({ coefficient, id }));
  };
  return (
    <MultiplierWrapper>
      {coefficientData.map((item) => (
        <StyledButton
          onClick={() => handleClick({ ...item })}
          key={item.id}
          disabled={isDisabled}
          className={activeClass[item.id] ? "active" : ""}
          borderColor={item.borderColor}
        >
          {item.tittle}
        </StyledButton>
      ))}
    </MultiplierWrapper>
  );
}
