import { useState } from "react";
import Nav from "./components/Nav";
import Mammoth from "../../assets/images/MammothLogo.svg";
import { useSelector } from "react-redux";
import PopUp from "../Alert/PopUp";
import useScrollingElement from "../../hooks/useScrollingElement";
import Button from "./components/ConnectButton";
import { StyledLogo, StyledTopBar } from "./components/styles";

const TopBar = () => {
  const isPopUp: boolean = useSelector((state: { connect: { isPopUp: boolean } }) => state.connect.isPopUp);

  const [trigger] = useState<boolean>(false);

  useScrollingElement(trigger);
  return (
    <>
      {isPopUp && <PopUp />}
      <StyledTopBar>
        <StyledLogo to="/">
          <img src={Mammoth} alt="Logo" />
          <span>BETA</span>
        </StyledLogo>
        <Nav />
        <Button />
      </StyledTopBar>
    </>
  );
};
export default TopBar;
