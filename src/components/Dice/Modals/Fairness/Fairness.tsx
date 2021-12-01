import React, { Component } from "react";
import TabsSwitcher from "../TabsSwitcher";
import Modal from "../BaseModal";
// import Verify from "./Verify";
import { ReactComponent as VerifyIcon } from "../../../../assets/img/fairness.svg";
import { IFairnessProps, IFaoremssState } from "../../../../interface/IComponents/IModals/IFairness";
import { StyledBtn } from "../Rules/Rules";
import styled from "styled-components";

const TABS: any = {
  fairness: () => (
    <StyledDiv>
      <h2>Signidice Algorithm</h2>
      <p>
        Mammoth uses the{" "}
        <b>
          <a
            href="https://github.com/gluk256/misc/blob/master/rng4ethereum/signidice.md"
            target="_blank"
            rel="noreferrer"
          >
            signidice algorithm
          </a>
        </b>{" "}
        for a provably fair gambling experince.
      </p>
      <p>
        Every time user makes a bet a random seed is generated from the client side. Once the game is created the{" "}
        <a
          href="https://bscscan.com/address/0xbd1A1ba1ceB8bd42fDc44a604df5022Ce693002d"
          target="_blank"
          rel="noopener noreferrer"
        >
          croupier
        </a>{" "}
        uses his private key to sign the seed and sends it to the smart contract in order to confirm game.
      </p>
      <h2>Randomness</h2>
      <p>
        The game result depends on the client's seed and the croupier's private key, so can't be predicted by any of the
        parties.
      </p>

      <blockquote>
        Random number=hash(current round's seed +<br /> previous round's TxID)
      </blockquote>
      <h2>Game Result</h2>
      <p>
        Random number for the round result is derived <br /> from the seed signed by the croupier private key.
        <br /> Then the random number is divided by 100,
        <br /> which results in 100 different game scenarios{" "}
      </p>
    </StyledDiv>
  ),
  //@ts-ignore
  // verify: () => <Verify />,
};

class FairnessModal extends Component<IFairnessProps, IFaoremssState> {
  constructor(props: IFairnessProps) {
    super(props);
    this.state = {
      open: false,
      activeTab: Object.keys(TABS)[0],
    };
  }

  get tabContent() {
    const { activeTab } = this.state;
    return TABS[activeTab]();
  }

  toggle = () => {
    this.setState((state) => ({
      ...state,
      open: !state.open,
      activeTab: Object.keys(TABS)[0],
    }));
  };

  setActiveTab = (activeTab: any) => {
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
        <StyledBtn className={btnClass} type="button" onClick={this.toggle}>
          <VerifyIcon />
        </StyledBtn>
        <Modal open={open} onClose={this.toggle}>
          <TabsSwitcher
            gridTemplatesColumn="1fr"
            activeTab={activeTab}
            onTabChange={this.setActiveTab}
            tabs={Object.keys(TABS)}
          />
          {this.tabContent}
        </Modal>
      </>
    );
  }
}

const StyledDiv = styled.div`
  h2 {
    color: white !important;
    line-height: 20px;
  }
`;
export default FairnessModal;
