import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import CheckBox from "components/CheckBox/CheckBox";
import storage from "utils/storage";
import Mammoth16 from "assets/img/Mammoth16.png";
import Yeti from "assets/img/Yeti1 1.png";
import Coin from "assets/img/CoinPile 1.png";
import logo from "assets/images/MammothLogo.svg";
import { ReactComponent as Close } from "assets/img/CloseSquareIcon.svg";
import FirstSlide from "components/WelcomePopUp/FirstSlide";
import SecondSlide from "components/WelcomePopUp/SecondSlide";

const sliderCount = [0, 1];
const renderSlider = (counter: number, handleOnClick: () => void) => {
  const sliders: { [key: string]: React.ReactNode } = {
    "0": <FirstSlide />,
    "1": <SecondSlide handleOnClick={handleOnClick} />,
  };

  return sliders[counter];
};

const WelcomePopUp = ({
  isVisible,
  isChecked,
  setIsVisible,
  setIsChecked,
}: {
  isVisible: boolean;
  isChecked: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}) => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    if (isChecked) {
      storage.set("welcome-popup", false);
    }
    setIsVisible(false);
  };

  const checkIsAvailable = storage.get("welcome-popup") === null || storage.get("welcome-popup") ? isVisible : false;

  return (
    <StyledWelcomePopupLayout isVisible={checkIsAvailable}>
      <StyledWelcomePopupContainer isVisible={checkIsAvailable}>
        <StyledWelcomePopupHeader>
          <img src={logo} alt="" />
          <Close onClick={() => handleOnClick()} />
        </StyledWelcomePopupHeader>
        <WelcomePopupButtons
          disabled={counter === 1}
          onClick={() => (counter < 1 ? setCounter((prev) => prev + 1) : null)}
        />
        <WelcomePopupButtons
          disabled={counter === 0}
          className="left"
          onClick={() => (counter > 0 ? setCounter((prev) => prev - 1) : null)}
        />
        <StyledWelcomePopupBody>{renderSlider(counter, handleOnClick)}</StyledWelcomePopupBody>
        <img className="mammoth" src={Mammoth16} alt="" />
        <img src={Yeti} className="yeti" alt="" />
        <img src={Coin} className="coin" alt="" />
      </StyledWelcomePopupContainer>
      <CheckBox setIsChecked={setIsChecked} isChecked={isChecked} />
      <StyledDotsContainer>
        {sliderCount.map((count) => (
          <StyledDots onClick={() => setCounter(count)} isActive={Number(count === counter)} key={count} />
        ))}
      </StyledDotsContainer>
    </StyledWelcomePopupLayout>
  );
};

const StyledWelcomePopupLayout = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 8, 22, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;
const StyledWelcomePopupContainer = styled.div<{ isVisible?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 450px;
  max-width: 900px;
  padding: 0 0 35px;
  border-radius: 10px;
  border: 4px solid #0085ff;
  background: #141a25;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease;
  .mammoth {
    position: absolute;
    width: 350px;
    right: -118px;
    bottom: -205px;
    z-index: 1;
  }
  .yeti {
    position: absolute;
    width: 350px;
    left: -118px;
    bottom: -205px;
    z-index: 1;
  }

  .coin {
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    left: 0;
  }
  @media (max-width: 520px) {
    .mammoth {
      display: none;
    }
    .yeti {
      display: none;
    }
  }
`;

const StyledWelcomePopupHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #162338;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  > svg {
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 18px;
    path {
      fill: #007eff;
    }
  }
`;

const StyledWelcomePopupBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
`;

const WelcomePopupButtons = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 40px solid #0084ff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -2px;
  transform: translate(100%, -50%);
  &.left {
    right: unset;
    left: -104px;
    transform: translate(100%, -50%) rotate(180deg);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  @media (max-width: 520px) {
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid #0084ff;
    &.left {
      left: -87px;
    }
  }
`;

const StyledDotsContainer = styled.div`
  display: flex;
  margin: 20px 0 0;
`;

const StyledDots = styled.div<{ isActive: number }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? "#fff" : "#213740")};
  transition: all 0.3s ease;
  border: 1px solid #f9e5e5;
  margin-right: 5px;
  cursor: pointer;
`;

export default WelcomePopUp;
