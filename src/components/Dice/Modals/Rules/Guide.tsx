import React, { Fragment, Component } from "react";
import styled from "styled-components";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import ImageStep1 from "../assets/images/rules-1.png";
import ImageStep2 from "../assets/images/rules-2.png";
import ImageStep3 from "../assets/images/rules-3.png";
import { IState } from "../../../../interface/IComponents/IModals/Rules/IGuide";

const P = styled.p`
  font-size: 14px;
  margin: 0 0 8px;

  &.rules-step-text {
    margin: 24px 0;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;

const STEPS = [
  <div>
    <img src={ImageStep1} alt="" style={{ maxWidth: "100%" }} />
    <P>
      Start by setting your Bet Amount.
      <br />
      You can set Win Chance, Prediction Number and Multiplier by using the slider.
    </P>
  </div>,
  <div>
    <img src={ImageStep2} alt="" style={{ maxWidth: "100%" }} />
    <P>
      You can also adjust parameters manually by changing input values. After you are ALL set, place your bet and swipe
      the MONEYBUTTON to start the game.
    </P>
  </div>,
  <div>
    <img src={ImageStep3} alt="" style={{ maxWidth: "100%" }} />
    <P>
      Roll starts and “one” number will be drawn from 0 to 9999. You win if the roll outcome is within the chosen area.
    </P>
  </div>,
];

class Guide extends Component<any> {
  timeId: any = 0;
  mounted = false;

  state: IState = {
    step: 1,
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate() {
    const { open } = this.props;

    if (!open) {
      this.timeId = setTimeout(() => {
        if (this.mounted) {
          this.setState((state) => ({
            ...state,
            step: 1,
          }));
        }
      }, 100);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeId);
    this.mounted = false;
  }

  nextStep = () =>
    this.setState((state: { step: number }) => ({
      ...state,
      step: state.step + 1,
    }));

  render() {
    const { step } = this.state;
    const { onClose } = this.props;

    return (
      <Fragment>
        <div>{STEPS[step - 1]}</div>
        {step < STEPS.length ? (
          <PrimaryButton btnMargin="auto" onClick={this.nextStep} text={`NEXT STEP ${step}/3`} block />
        ) : (
          <PrimaryButton btnMargin="auto" onClick={onClose} text="PLAY NOW" block />
        )}
      </Fragment>
    );
  }
}

export default Guide;
