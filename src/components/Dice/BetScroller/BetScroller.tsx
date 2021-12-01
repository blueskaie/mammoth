import React, { Component } from "react";
import minmax from "../../../utils/minmax";
import * as BetStyled from "./betScrollStyled/betScrollStyled";
import { IBetScrollProps } from "interface/IComponents/IBetScroll";
import { EthersContext } from "context/ethersContext";
import styled from "styled-components";
class BetScroller extends Component<IBetScrollProps> {
  sideClass: null | string = null;
  static contextType = EthersContext;

  shouldComponentUpdate({ result = null, disabled = false }: any): boolean {
    const { result: prevResult } = this.props;
    const { _MaxNumber } = this.context.diceRollData;
    if (!disabled && !result && !prevResult) {
      this.sideClass = null;
    } else if (result) {
      this.sideClass = result > _MaxNumber / 2 ? "left" : "right";
    }
    return true;
  }

  handleNumberChange = (e: { target: { value: string } }) => {
    const { onNumberChange, minNumber, maxNumber, audioPlay } = this.props;
    const newValue = Number(e.target.value);
    audioPlay("audioClick");
    return onNumberChange(minmax(newValue, minNumber, maxNumber));
  };

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
        <label htmlFor={id} className={`label ${type} ${order}`} style={{ fontSize: "9px" }}>
          <span>{label}</span>
        </label>
      </>
    );
  }

  render() {
    const { number, type, disabled } = this.props;
    const { _MinNumber, _MaxNumber } = this.context.diceRollData;
    let backgroundSize = `${number}% 24px`;

    if (type === "over") {
      backgroundSize = `${100 - number}% 24px`;
    }
    return (
      <BetStyled.StyledContainer>
        <BetStyled.StyledTypePicker>
          <Container>
            <InputContainer>
              <BetStyled.StyledScroller
                className={`scroller ${type}`}
                style={{ backgroundSize }}
                type="range"
                min={_MinNumber}
                max={_MaxNumber}
                onChange={this.handleNumberChange}
                value={number}
                disabled={disabled}
              />
            </InputContainer>
            <NumberContainer>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </NumberContainer>
          </Container>
        </BetStyled.StyledTypePicker>
      </BetStyled.StyledContainer>
    );
  }
}
export default BetScroller;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  background: #11161f;
  padding: 15px 23px;
  border-radius: 8px;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 23px;
  align-items: center;
  > span {
    font-weight: bold;
    font-size: 10px;
    color: #90b6cb;
  }
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
