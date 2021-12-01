import React, { Fragment, Component } from "react";
// import { connect } from 'react-redux';
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import Modal from "../BaseModal";
import TabsSwitcher from "../TabsSwitcher";
import Guide from "./Guide";
import styled from "styled-components";
import { ReactComponent as Rules } from "../../../../assets/img/gameRules.svg";
import { IFainessModalProp, ITabs, IState } from "../../../../interface/IComponents/IModals/Rules/IFainessModal";

const TABS: ITabs = {
  rules(props, state, close) {
    return <Guide {...props} {...state} onClose={close} />;
  },
  limits: ({ minBet, maxPayout }, state, close) => (
    <Fragment>
      <StyledLimits>
        <div className="row">
          <span className="param">MIN BET: </span>
          <span className="value">{minBet} XBLZD</span>
        </div>
        <div className="row">
          <span className="param">MAX PAYOUT:</span>
          <span className="value">{maxPayout} XBLZD</span>
        </div>
      </StyledLimits>

      {<PrimaryButton btnMargin={"auto"} onClick={close} text="START GAME" block />}
    </Fragment>
  ),
};

class FairnessModal extends Component<IFainessModalProp> {
  state: IState = {
    open: false,
    activeTab: Object.keys(TABS)[0],
  };

  get tabContent() {
    const { activeTab } = this.state;
    //@ts-ignore
    return TABS[activeTab]({ ...this.props }, { ...this.state }, this.toggle);
  }

  toggle = () => {
    this.setState((state: { open: boolean }) => ({
      ...state,
      open: !state.open,
      activeTab: Object.keys(TABS)[0],
    }));
  };

  setActiveTab = (activeTab: string) => {
    this.setState((state) => ({
      ...state,
      activeTab,
    }));
  };

  render() {
    const { open, activeTab } = this.state;
    const { btnClass } = this.props;

    return (
      <>
        <StyledBtn paddingRule="0 16px" className={btnClass} type="button" onClick={this.toggle}>
          <Rules />
        </StyledBtn>
        <Modal open={open} onClose={this.toggle} title="Help">
          <TabsSwitcher
            activeTab={activeTab}
            onTabChange={this.setActiveTab}
            tabs={Object.keys(TABS)}
            gridTemplatesColumn={""}
          />
          {this.tabContent}
        </Modal>
      </>
    );
  }
}

export default FairnessModal;

export const StyledBtn: any = styled.button<{ paddingRule?: string }>`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  border-radius: 4px;
  background: #11161f;
  &.toolbar-btn {
    background: #11161f;
    appearance: none;
    margin-left: 16px;
    height: 32px;
    width: auto;
    padding: ${({ paddingRule }) => (paddingRule ? paddingRule : "0 9px")};
    @media (max-width: 520px) {
      height: 28px;
      padding: 10px 5px;
      margin-left: 13px;
      > svg {
        width: 10px;
        height: 10px;
      }
    }
  }
  :hover {
    opacity: 0.7;
  }

  transition: opacity 0.5s ease;
  &.sound {
    opacity: 0.5;
    :hover {
      opacity: 0.7 !important;
    }
    &.active {
      opacity: 1;
      :hover {
        opacity: 0.7;
      }
      path {
        fill: rgba(255, 226, 102, 0);
        stroke: #fff;
      }
    }
  }
`;

const StyledLimits = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  font-style: normal;

  .row {
    height: 24px;
    display: flex;
    margin-bottom: 6px;
    width: 100%;
  }

  .param {
    display: block;
    padding-right: 4px;
    text-align: right;
    width: 50%;
  }

  .value {
    display: block;
    width: 50%;
  }
`;
