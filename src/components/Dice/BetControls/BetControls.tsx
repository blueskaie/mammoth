import React, { Component } from "react";
import * as BetControlStyled from "./betControlsStyled/BetControls";
import minmax from "../../../utils/minmax";
import { connect } from "react-redux";
import numberFormat from "../../../utils/numberFormat";
import { withCookies } from "react-cookie";
import InputGroup from "./InputGroup";
import { EthersContext } from "context/ethersContext";
import { IGenerateGroup, IMapStateType, IProps, IshuldUpdate, IState } from "interface/IComponents/IBetControls";
import Button from "./Button";

export const GenerateAdvancedControls = (
  value: number,
  step: number,
  handler: any,
  min: number,
  max: number,
  disabled: boolean,
  long?: boolean
) => {
  const d = step.toString().split(".")[1]?.length || 0;
  return (
    <>
      <BetControlStyled.StyledControlContainer className={long ? "long" : ""}>
        <BetControlStyled.StyledControlInputAddonAdvance margin="0 5px 0 0">
          <BetControlStyled.StyledBtnBetAmount
            className={long ? "long" : ""}
            type="button"
            aria-label="Min"
            onClick={() => handler(min)}
            disabled={disabled}
          >
            Min
          </BetControlStyled.StyledBtnBetAmount>
        </BetControlStyled.StyledControlInputAddonAdvance>
        <BetControlStyled.StyledControlInputAddonAdvance margin="0 5px 0 0">
          <BetControlStyled.StyledBtnBetAmount
            className={long ? "long" : ""}
            type="button"
            aria-label="Divide"
            onClick={() => handler(minmax(numberFormat(value / 2, d), min, max))}
            disabled={disabled}
          >
            1/2
          </BetControlStyled.StyledBtnBetAmount>
        </BetControlStyled.StyledControlInputAddonAdvance>
        <BetControlStyled.StyledControlInputAddonAdvance margin="0 5px 0 0">
          <BetControlStyled.StyledBtnBetAmount
            className={long ? "long" : ""}
            type="button"
            aria-label="Double"
            onClick={() => handler(minmax(numberFormat(value * 2, d), min, max))}
            disabled={disabled}
          >
            2x
          </BetControlStyled.StyledBtnBetAmount>
        </BetControlStyled.StyledControlInputAddonAdvance>
        <BetControlStyled.StyledControlInputAddonAdvance>
          <BetControlStyled.StyledBtnBetAmount
            className={long ? "long" : ""}
            type="button"
            aria-label="Max"
            onClick={() => handler(max)}
            disabled={disabled}
          >
            Max
          </BetControlStyled.StyledBtnBetAmount>
        </BetControlStyled.StyledControlInputAddonAdvance>
      </BetControlStyled.StyledControlContainer>
    </>
  );
};

class BetControls extends Component<IProps, IState> {
  intervalId = 0;
  timerId: any = 0;

  static contextType = EthersContext;
  private inputRoll: React.RefObject<HTMLInputElement>;
  private inputBet: React.RefObject<HTMLInputElement>;
  private inputChance: React.RefObject<HTMLInputElement>;
  private inputMultiplier: React.RefObject<HTMLInputElement>;
  private updateTimeout: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      focusedInputId: null,
      buttonDisabled: false,
      active: false,
      alert: { isOpen: false, message: "" },
      allowance: null,
      isLoad: true,
      approve: false,
      amount: this.props.amount,
    };

    this.updateTimeout = null;

    this.inputRoll = React.createRef();
    this.inputBet = React.createRef();
    this.inputChance = React.createRef();
    this.inputMultiplier = React.createRef();
  }

  shouldComponentUpdate({ amount: newAmount, number: oldNumber, type: oldType }: IshuldUpdate): boolean {
    const { amount, number, type } = this.props;
    if (newAmount !== amount || type !== oldType) {
    }
    if (number !== oldNumber) {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.setState(
        (state) => ({
          ...state,
          buttonDisabled: true,
        }),
        () => {
          this.updateTimeout = setTimeout(() => {
            this.setState((state) => ({
              ...state,
              buttonDisabled: false,
            }));
          }, 1000);
        }
      );
    }

    return true;
  }

  componentDidUpdate({ amount: oldAmount }: any): void {
    const { minBet, maxPayout, amount, onAmountChange, decimals, loading }: any = this.props;
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
    const { amount, isRealMode } = this.props;
    const res = isRealMode ? amount * this.multiplier : 0;
    return numberFormat(res, 6);
  }

  generateGroup = ({
    padding,
    payoutStyle,
    label,
    value,
    handler,
    actionGenerator = () => null,
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
    mobilePadding,
  }: IGenerateGroup) => {
    return (
      <InputGroup
        padding={padding}
        payoutStyle={payoutStyle}
        label={label}
        value={value}
        handler={handler}
        mobilePadding={mobilePadding}
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
      />
    );
  };

  handleRollClick = () => {
    const { onRoll } = this.props;
    onRoll();
  };

  handleAutorollClick = () => {
    this.setState(
      (state) => ({
        ...state,
        active: !state.active,
      }),
      () => {
        if (this.state.active) {
          this.autoRoll();
        }
      }
    );
  };

  autoRoll = () => {
    const { onRoll } = this.props;
    if (this.state.active) {
      onRoll((err: boolean) => {
        if (!err) {
          this.autoRoll();
        }
      });
    }
  };

  handleAmountChange = (v: number) => {
    const { onAmountChange } = this.props;
    this.setState((state) => ({ ...state, amount: v }));
    return onAmountChange(v);
  };

  render() {
    const {
      isRealMode,
      isRolling,
      betStep,
      minBet,
      maxBet,
      maxPayout,
      // decimals,
      // currencyValue,
      accessAvailable,
      maintenance,
      balance,
      games,
    } = this.props;
    const {
      alert: { isOpen, message },
      active,
    } = this.state;
    const { account, loaded } = this.context;
    const title = { demo: "ROLLING", real: "ROLL DICE" };
    const buttonData = {
      accessAvailable,
      isRolling,
      maintenance,
      isRealMode,
      alert: { isOpen, message },
      account,
      loaded,
      active,
      title,
      handleRollClick: this.handleRollClick,
    };
    // const round: number = 10 ** decimals;
    // const _maxBet: number = Math.floor((maxPayout / this.multiplier) * round) / round;
    const _maxBet = Math.min(balance, maxBet);
    return (
      <BetControlStyled.StyledControls>
        {this.generateGroup({
          games: games,
          label: "Bet Amount",
          value: balance && this.state.amount,
          padding: "8px 0 18px 15px",
          handler: this.handleAmountChange,
          step: betStep,
          min: minBet,
          max: _maxBet,
          disabled: !isRealMode || isRolling,
        })}
        {this.generateGroup({
          games: games,
          label: "Payout",
          payoutStyle: true,
          value: balance && this.payout,
          padding: "8px 0 18px 15px",
          handler: () => {}, // this.handlePayoutChange,
          step: 0.0001,
          min: minBet,
          max: maxPayout,
          disabled: true,
          readonly: true,
          //@ts-ignore
          // currencyName: currencyValue,
        })}
        <BetControlStyled.StyledBtnRollContainer>
          <Button {...buttonData} />
        </BetControlStyled.StyledBtnRollContainer>
        {GenerateAdvancedControls(
          this.state.amount,
          betStep,
          this.handleAmountChange,
          minBet,
          _maxBet,
          !isRealMode || isRolling
        )}
      </BetControlStyled.StyledControls>
    );
  }
}

const mapStateToProps = (state: any): IMapStateType => ({
  maintenance: state.info?.maintenance?.dice || false,
  decimals: state.info.data.decimal_place,
});

// @ts-ignore
export default connect(mapStateToProps, null)(withCookies(BetControls));
