import React, { Component } from "react";
import minmax from "../../../utils/minmax";
import styled from "styled-components";
import { IInputGroupProp, IInputGroupState } from "interface/IComponents/IInputGroup";
import { EthersContext } from "context/ethersContext";

class InputGroup extends Component<IInputGroupProp, IInputGroupState> {
  private input: React.RefObject<HTMLInputElement>;
  static contextType = EthersContext;

  constructor(props: IInputGroupProp) {
    super(props);

    this.state = {
      focused: false,
      value: props.value,
    };

    this.input = React.createRef();
  }
  componentDidMount() {
    const { handleRef }: any = this.props;
    handleRef(this.input.current);
  }

  shouldComponentUpdate({ value: newPropsValue }: IInputGroupProp, { value: newStateValue }: IInputGroupState) {
    const { value } = this.state;

    if (value === newStateValue && newPropsValue !== value) {
      this.setState((state): any => ({
        ...state,
        value: newPropsValue,
      }));
      return false;
    }
    return true;
  }

  handleValueChange = (value: number) => {
    const { handler = () => {}} = this.props;
    handler();
    this.setState((state) => ({
      ...state,
      value,
    }));
  };

  handleKeyDown = (event: { target: { value: string }; key: string; preventDefault: Function }) => {
    const { maxLength = 10 } = this.props;
    if (event.target.value.length >= maxLength) {
      event.preventDefault();
    }
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      //@ts-ignore
      this.input.current.blur();
      if (event.key === "Tab") {
        const { nextInput } = this.props;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  handleInputBlur() {
    const { handler = () => {}, min = Number.MIN_VALUE, max = Number.MAX_VALUE, value: propsValue } = this.props;
    const { value } = this.state;
    if (propsValue !== value) {
      handler(minmax(value, min, max));
    }
    this.handleInputFocus(false);
  }
  handleInputFocus(focused: boolean) {
    this.setState((state) => ({
      ...state,
      focused,
    }));
  }

  render() {
    const {
      payoutStyle,
      padding,
      label,
      handler,
      actionGenerator = () => null,
      step = 1,
      min = Number.MIN_VALUE,
      max = Number.MAX_VALUE,
      disabled = false,
      format = (v: number) => v,
      readonly,
      hint,
      maxLength,
      currencyName,
      mobilePadding,
      borderRadios,
      games,
      fontSize,
      inputType,
    } = this.props;
    const { value, focused } = this.state;
    //@ts-ignore
    const slug = label === "Payout/Multiplier" ? "multiplier" : label?.split(" ")[0].toLowerCase();
    const id = `input${slug}`;    
    return (
      <StyledControlsGroup
        padding={padding}
        mobilePadding={mobilePadding}
        payoutStyle={payoutStyle}
        className={`controls-group controls-group-${slug} ${disabled}`}
        games={games}
        fontSize={fontSize}
        inputType={inputType}
      >
        {games !== "multiplier" ? (
          <Container>
            <InputImgContainer borderRadios={borderRadios}>
              <input
                id={id}
                className={`input input-${slug}`}
                ref={this.input}
                value={focused ? value : format(value)}
                type={focused ? "number" : "text"}
                onChange={(e: any) => this.handleValueChange(e.target.value)}
                //@ts-ignore
                onKeyDown={this.handleKeyDown}
                step={step}
                min={min}
                max={max}
                onFocus={() => this.handleInputFocus(true)}
                onBlur={() => this.handleInputBlur()}
                disabled={disabled}
                readOnly={readonly}
                maxLength={maxLength}
                fontSize={fontSize}
              />
              <TokenImg src={"/static/media/Token.c046e372.svg"} />
            </InputImgContainer>
            <label htmlFor={id} className="label">
              {label}
              {hint}
            </label>
          </Container>
        ) : (
          <Container games={games} inputType={inputType}>
            <input
              id={id}
              className={`input input-${slug}`}
              ref={this.input}
              value={focused ? value : format(value)}
              type={inputType ? inputType :(focused ? "number" : "text")}
              onChange={(e: any) => this.handleValueChange(e.target.value)}
              //@ts-ignore
              onKeyDown={this.handleKeyDown}
              step={step}
              min={min}
              max={max}
              onFocus={() => this.handleInputFocus(true)}
              onBlur={() => this.handleInputBlur()}
              disabled={disabled}
              readOnly={readonly}
              maxLength={maxLength}
              fontSize={fontSize}
              checked={value ? true : false}
            />
            <label htmlFor={id} className="label">
              {label}
              {hint}
            </label>
          </Container>
        )}
        {currencyName && <StyledCurrencyName>{currencyName}</StyledCurrencyName>}
        {actionGenerator(
          //@ts-ignore
          value,
          step,
          handler,
          min,
          max,
          disabled,
        )}
      </StyledControlsGroup>
    );
  }
}

export default InputGroup;

const StyledControlsGroup = styled.div<{
  padding?: string;
  payoutStyle?: boolean;
  mobilePadding?: string;
  games?: string;
  fontSize?: string;
  inputType?: string
}>`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  &.controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "Bet Bet"
      "Button Button"
      "Separator Separator"
      "Multiplier RollNumber"
      "WinChance Payout";
    grid-row-gap: 16px;
    grid-column-gap: 8px;
    min-height: 100%;

    @media (min-width: 586px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "RollNumber RollNumber Multiplier Multiplier  WinChance WinChance"
        "Separator Separator Separator Separator Separator Separator"
        "Payout Payout Payout Bet Bet Bet"
        "Button Button Button Button Button Button";
      grid-column-gap: 16px;
      grid-row-gap: 32px;
      grid-template-rows: 82px;
    }

    &-group {
      position: relative;
      border: 0;
      padding: 0;

      &.disabled {
        opacity: 0.5;
      }

      &-multiplier {
        grid-area: RollNumber;
        align-self: flex-end;
      }

      &-roll {
        grid-area: Multiplier;
      }

      &-win {
        grid-area: WinChance;
        align-self: flex-end;
      }

      &-payout {
        grid-area: Payout;
        align-self: flex-start;
        width: 100%;
      }

      &-bet {
        grid-area: Bet;
        width: 100%;
        align-self: flex-start;
      }

      &-payout:before,
      &-bet:before {
        background: no-repeat center / 100% 100%;
        content: "";
        position: absolute;
        display: block;
        bottom: 0;
        left: 24px;
        height: 60px;
        width: 16px;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.56;
        z-index: 10;
      }
    }

    &-bet,
    &-payout {
      padding-left: 56px;
    }
  }

  .label {
    font-size: 16px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    position: absolute;
    z-index: 2;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #a9b1bd;
  }
  .input {
    font-style: normal;
    text-align: center;
    background: ${({ inputType }) => inputType ? "none" : "#000000"};
    border: 1px solid transparent;
    color: #fff;
    font-weight: bold;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "26px")};
    font-family: Proxima Nova;
    position: relative;
    padding: ${({ padding }) => (padding ? padding : "8px 0 18px")};
    margin: ${({ games }) => (games ? "0 0 0 0" : "0 0 0 55px")};
    line-height: 25px;
    display: block;
    width: ${({ inputType }) => inputType ? "42px" : "100%"};
    height: ${({ inputType }) => inputType && "42px"};
    &:focus {
      outline: none !important;
      border-radius: 6px;
      width: ${({ inputType }) => inputType ? "42px" : "117px"};
    }
    &:disabled {
      cursor: not-allowed;
      margin-left: ${({ games }) => (games ? "0 0 0 0" : "0 0 0 55px")};
    }

    &-addon {
      stroke: #bebec2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 56px;
      width: 48px;
      margin: 2px;
      border-radius: 0 4px 4px 0;
      overflow: hidden;

      &-advaced {
        border-radius: 0;
        right: 50px;

        &:nth-of-type(2) {
          right: 100px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .input {
      font-size: 21px;
      padding: ${({ padding }) => padding || "0 0 0"};
      margin: ${({ games }) => (games ? "0 0 0 0" : "0 0 0 30px")};
      &:focus {
        width: 105px;
      }
      &:disabled {
        background: #000000;
        cursor: not-allowed;
        margin-left: 30px;
      }
    }
    .label {
      font-size: 14px;
      line-height: 9px;
    }
  }
  @media (max-width: 520px) {
    .input {
      font-size: 12.8125px;
      padding: ${({ mobilePadding }) => mobilePadding || "0 0 0"};
      margin: ${({ games }) => (games ? "0 0 0 0" : "0 0 0 20px")};
      &:focus {
        width: 41px;
      }
      &:disabled {
        background: #000000;
        cursor: not-allowed;
        margin-left: 20px;
      }
    }
    .label {
      font-size: 7px;
      line-height: 9px;
    }
  }
  @media (max-width: 375px) {
    .input {
      font-size: 10px;
      padding: ${({ mobilePadding }) => mobilePadding || "0 0 0"};
      margin: ${({ games }) => (games ? "0 0 0 0" : "0 0 0 20px")};
      height: 18px;
      &:focus {
        width: 33px;
      }
      &:disabled {
        background: #000000;
        cursor: not-allowed;
        margin-left: 20px;
      }
    }
    .label {
      font-size: 7px;
      line-height: 1px;
    }
  }
`;
const StyledCurrencyName = styled.span`
  color: #fff;
  font-style: normal;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -80%);
  @media (max-width: 920px) {
    font-size: 12px;
    top: 25px;
  }
`;

const Container = styled.div<{ borderRadios?: string; games?: string; inputType?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${({ inputType }) => inputType ? "none" : "#000000"};
  border-radius: ${({ borderRadios }) => borderRadios || "8px"};
  padding: 0 0 3px;
  > input {
    border-radius: ${({ borderRadios }) => borderRadios || "8px"};
    width: ${({ inputType }) => inputType && "42px"};
    heigth: ${({ inputType }) => inputType && "42px"};
  }
  @media (max-width: 520px) {
    border-radius: ${({ borderRadios }) => borderRadios || "3.29119px"};
  }
`;

const InputImgContainer = styled.div<{ borderRadios?: string }>`
  display: flex;
  border-radius: ${({ borderRadios }) => borderRadios || "8px"};
  padding: 0 0 3px;
  > input {
    border-radius: ${({ borderRadios }) => borderRadios || "8px"};
  }
`;
const TokenImg = styled.img`
  width: 30px;
  justify-content: flex-end;
  margin-right: 26px;
  @media (max-width: 768px) {
    width: 25px;
    margin-right: 10px;
  }
  @media (max-width: 520px) {
    width: 14px;
    margin-right: 10px;
  }
  @media (max-width: 375px) {
    width: 11px;
    margin-right: 8px;
  }
`;
