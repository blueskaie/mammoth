import { IGenerateGroup } from "../../interface/IComponents/IBetControls";
import InputGroup from "../../components/Dice/BetControls/InputGroup";

const GenerateGroup = ({
  padding,
  games,
  label,
  value,
  handler,
  step,
  min = Number.MIN_VALUE,
  max = Number.MAX_VALUE,
  disabled,
  format = (v) => v,
  readonly = false,
  hint = null,
  nextInput = null,
  handleRef = () => {},
  currencyName,
  borderRadios,
  fontSize,
  inputType,
}: IGenerateGroup) => (
  <InputGroup
    games={games}
    borderRadios={borderRadios}
    padding={padding}
    label={label}
    value={value}
    handler={handler}
    step={step}
    min={min}
    max={max}
    disabled={disabled}
    format={format}
    readonly={readonly}
    hint={hint}
    nextInput={nextInput}
    handleRef={handleRef}
    currencyName={currencyName}
    fontSize={fontSize}
    inputType={inputType}
  />
);

export default GenerateGroup;
