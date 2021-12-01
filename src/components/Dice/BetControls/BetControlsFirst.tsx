import React, { Component } from "react";
import minmax from "../../../utils/minmax";
import numberFormat from "../../../utils/numberFormat";
import { isMobileOnly } from "react-device-detect";
import { ReactComponent as UpIcon } from "../../../assets/img/up.svg";
import { ReactComponent as DownIcon } from "../../../assets/img/down.svg";

import InputGroup from "./InputGroup";

import styled from "styled-components";
import { IBetControlsFirstProp, IBetControlsFirstState } from "../../../interface/IComponents/IBetControlsFirst";
import { IGenerateGroup } from "../../../interface/IComponents/IBetControls";
import { EthersContext } from "../../../context/ethersContext";
import * as BetStyled from "components/Dice/BetScroller/betScrollStyled/betScrollStyled";

const generateControls = (
  value: number,
  step: number,
  handler: Function,
  min: number,
  max: number,
  disabled = false
) => {
  const d = step.toString().split(".")[1]?.length || 0;

  return (
    <StyledControlInputAddonAndControlNumber>
      <StyledNumberControlsBtn
        type="button"
        aria-label="Up"
        onClick={() => handler(minmax(numberFormat(value + step, d), min, max))}
        disabled={disabled}
      >
        <UpIcon />
      </StyledNumberControlsBtn>
      <StyledNumberControlsBtn
        padding="9px"
        type="button"
        aria-label="Down"
        onClick={() => handler(minmax(numberFormat(value - step, d), min, max))}
        disabled={disabled}
      >
        <DownIcon />
      </StyledNumberControlsBtn>
    </StyledControlInputAddonAndControlNumber>
  );
};

class BetControlsFirst extends Component<IBetControlsFirstProp, IBetControlsFirstState, BetControlsFirst> {
  intervalId: any = 0;
  static contextType = EthersContext;

  private inputRoll: React.RefObject<HTMLInputElement>;
  private inputBet: React.RefObject<HTMLInputElement>;
  private inputChance: React.RefObject<HTMLInputElement>;
  private inputMultiplier: React.RefObject<HTMLInputElement>;
  private moneyButton: null;
  private updateTimeout: null;

  constructor(props: IBetControlsFirstProp) {
    super(props);
    this.state = {
      focusedInputId: null,
      buttonDisabled: false,
      active: false,
    };

    this.moneyButton = null;
    this.updateTimeout = null;

    this.inputRoll = React.createRef();
    this.inputBet = React.createRef();
    this.inputChance = React.createRef();
    this.inputMultiplier = React.createRef();
  }

  handleButtonClick() {
    const { onRoll, maintenance } = this.props;
    this.setState(
      (state) => ({
        ...state,
        active: !state.active,
      }),
      () => {
        if (this.state.active) {
          if (maintenance) {
            return;
          }

          onRoll({});
          this.intervalId = setInterval(() => {
            if (maintenance) {
              return;
            }

            onRoll({});
          }, 3000);
        } else {
          clearInterval(this.intervalId);
        }
      }
    );
  }

  componentDidUpdate({ amount: oldAmount }: any) {
    const { minBet, maxPayout, amount, onAmountChange, decimals, loading } = this.props;
    if (loading) {
      return;
    }
    const round = 10 ** decimals;
    const maxBet = maxPayout / this.multiplier;
    let newAmount = minmax(amount, minBet, maxBet);
    newAmount = Math.floor(newAmount * round) / round;
    if (newAmount && oldAmount === amount && newAmount !== amount) {
      onAmountChange(newAmount);
    }
  }

  get chance() {
    const { number, type } = this.props;
    const { _MaxNumber } = this.context.diceRollData;
    let chance;

    if (type === "over") {
      chance = ((_MaxNumber - number) / _MaxNumber) * 100;
    } else {
      chance = (number / _MaxNumber) * 100;
    }

    return numberFormat(chance, 4);
  }

  get multiplier() {
    const { edge } = this.context.diceRollData;
    return numberFormat((100 - edge) / this.chance, 4);
  }

  get payout() {
    const { amount, isrealmode } = this.props;

    const res = isrealmode ? amount * this.multiplier : 0;
    return numberFormat(res, 6);
  }

  generateGroup = ({
    label,
    payoutStyle,
    padding,
    value,
    handler,
    actionGenerator = () => null,
    step,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    disabled,
    format = (v: number) => v,
    readonly = false,
    hint = null,
    nextInput = null,
    handleRef = () => {},
    currencyName,
  }: IGenerateGroup) => (
    <InputGroup
      label={label}
      payoutStyle={payoutStyle}
      padding={padding}
      value={value}
      handler={handler}
      actionGenerator={actionGenerator}
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
      games={"multiplier"}
    />
  );

  handleRollClick = () => {
    const { onRoll, maintenance } = this.props;
    if (maintenance) {
      return;
    }

    onRoll({});
  };

  handleMultiplierChange = (v: number) => {
    const { type } = this.props;
    const { _MaxNumber } = this.context.diceRollData;

    let value = (0.99 / v) * _MaxNumber;

    if (type === "over") {
      value = 100 - value;
      value = v <= this.multiplier ? Math.floor(value) : Math.ceil(value);
    } else {
      value = v > this.multiplier ? Math.floor(value) : Math.ceil(value);
    }

    return this.handleNumberChange(value);
  };

  handleBetSwap = () => {
    const { type, onTypeChange, number } = this.props;

    onTypeChange(type === "over" ? "under" : "over");

    return this.handleNumberChange(100 - number);
  };

  handleWinChanceChange = (v: number) => {
    const { type } = this.props;
    const { _MaxNumber } = this.context.diceRollData;

    const chance = v / 100;
    let value;

    if (type === "over") {
      value = _MaxNumber - _MaxNumber * chance;
      value = v > this.chance ? Math.floor(value) : Math.ceil(value);
    } else {
      value = chance * _MaxNumber;
      value = v < this.chance ? Math.floor(value) : Math.ceil(value);
    }

    return this.handleNumberChange(value);
  };

  handleNumberChange = (v: number) => {
    const { onNumberChange } = this.props;

    return onNumberChange(v);
  };

  handleAmountChange = (v: number) => {
    const { onAmountChange } = this.props;

    return onAmountChange(v);
  };

  handleInputFocus(focusedInputId: any) {
    this.setState((state) => ({
      ...state,
      focusedInputId,
    }));
  }
  generateInput(value: string, label: string, order: string) {
    const { onTypeChange, type, disabled } = this.props;
    const id = `inputType${value}`;
    return (
      <>
        <BetStyled.StyledTypePickerRadio
          id={id}
          className={`radio ${type}`}
          type="radio"
          name="type"
          value={value}
          onChange={(e) => onTypeChange(e.target.value)}
          checked={type === value}
          disabled={disabled}
        />
        <label htmlFor={id} className={`label ${type} ${order}`}>
          <span>{label}</span>
        </label>
      </>
    );
  }
  render() {
    const { type, isRolling, betStep, minNumber, maxNumber, decimals } = this.props;
    const { _MaxNumber } = this.context.diceRollData;

    let minChance;
    let maxChance;
    if (type === "over") {
      minChance = numberFormat(((_MaxNumber - maxNumber) / _MaxNumber) * 100, decimals);
      maxChance = numberFormat(((_MaxNumber - minNumber) / _MaxNumber) * 100, decimals);
    } else {
      minChance = numberFormat((minNumber / _MaxNumber) * 100, decimals);
      maxChance = numberFormat((maxNumber / _MaxNumber) * 100, decimals);
    }
    return (
      <StyledControls>
        <BetStyled.StyledTypePicker gridArea="under">
          {this.generateInput("under", "ROLL UNDER", "order3")}
        </BetStyled.StyledTypePicker>
        {this.generateGroup({
          label: "Multiplier",
          value: this.multiplier,
          handler: this.handleMultiplierChange,
          step: betStep,
          min: numberFormat((100 / maxChance) * 0.99, decimals),
          max: numberFormat((100 / minChance) * 0.99, decimals),
          format: (v: number): any => `x ${v}`,
          disabled: isRolling,
          //@ts-ignore
          actionGenerator: generateControls,
          handleRef: (ref) => {
            this.inputMultiplier = ref;
            this.forceUpdate();
          },
          nextInput: this.inputRoll,
        })}
        {this.generateGroup({
          label: "Win Chance",
          value: this.chance,
          handler: this.handleWinChanceChange,
          step: 0.01,
          min: minChance,
          max: maxChance,
          disabled: isRolling,
          format: (v): any => `${v}%`,
          handleRef: (ref) => {
            this.inputChance = ref;
            this.forceUpdate();
          },
          nextInput: !isMobileOnly ? this.inputBet : null,
          //@ts-ignore
          actionGenerator: generateControls,
        })}
        <BetStyled.StyledTypePicker gridArea="over">
          {this.generateInput("over", "ROLL OVER", "order4")}
        </BetStyled.StyledTypePicker>
      </StyledControls>
    );
  }
}

const StyledControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "RollNumber WinChance" "under over";
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  min-height: 100%;
  height: fit-content;

  @media (min-width: 586px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "under RollNumber WinChance over";
    //grid-column-gap: 45px;
    grid-row-gap: 32px;
    padding: 0;
  }
  &:nth-of-type(4) {
    display: none;
  }

  .controls-group-payout {
    @media (min-width: 586px) {
      display: none;
    }
  }

  .addon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 12px;
    right: 6px;
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
`;

const StyledControlInputAddonAndControlNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translate(-50%, -50%);
  border-radius: 0 4px 4px 0;
  overflow: hidden;

  &-btn {
    appearance: none;
    background: rgba(#3c1b63, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;

    &:hover {
      background: rgba(#3c1b63, 0.6);
      transition: background 0.1s;
    }
  }
  @media (max-width: 920px) {
    right: -8px;
  }
`;

const StyledNumberControlsBtn = styled.button<{ padding?: string }>`
  appearance: none;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "default")};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #bebec2;
  border: none;
  padding-top: ${({ padding }) => padding};
  @media (max-width: 920px) {
    svg {
      width: 10px;
      height: 10px;
    }
  }
  @media (max-width: 520px) {
    padding-top: 5px;
    svg {
      width: 3.86px;
      height: 4.04px;
    }
  }

  &:hover {
    background: rgba(#3c1b63, 0.6);
    transition: background 0.1s;
  }

  &:focus {
    outline: none;
  }
`;

export default BetControlsFirst;
