//@ts-ignore
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.png";
import { ReactComponent as Right } from "./assets/Right.svg";
import { ReactComponent as Left } from "./assets/Left.svg";
import styled from "styled-components";
import { useState } from "react";

export const Slider = () => {
  const slideImages = [first, third, second];

  const [autoplay] = useState(true);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    //@ts-ignore
    indicators: () => <StyledCircle />,

    prevArrow: <StyledLeft />,
    nextArrow: <StyledRight />,
  };

  return (
    <StyledDiv>
      <div>
        <Slide autoplay={autoplay} {...properties}>
          {slideImages.map((each, index) => (
            <div key={index}>
              <StyledImg src={each} />
            </div>
          ))}
        </Slide>
      </div>
    </StyledDiv>
  );
};

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledDiv = styled.div`
  position: relative;
  margin-top: 20px;
`;
const StyledCircle = styled.div`
  margin: 2px;
  width: 11px;
  height: 11px;
  border: 1px solid #f9e5e5;
  border-radius: 50%;
  background: #213740;
  &.active {
    background: white;
  }
`;

const StyledRight = styled(Right)`
  position: absolute;
  right: 20px;
  cursor: pointer;
  :hover {
    fill: white;
  }
  :active {
    fill: #007eff;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 15px;
    right: 10px;
  }
  @media (max-width: 350px) {
    width: 12px;
    height: 16px;
    right: 5px;
  }
`;
const StyledLeft = styled(Left)`
  position: absolute;
  left: 20px;
  cursor: pointer;

  :hover {
    fill: white;
  }
  :active {
    fill: #007eff;
  }
  @media (max-width: 500px) {
    width: 15px;
    height: 20px;
    left: 10px;
  }
  @media (max-width: 350px) {
    width: 12px;
    height: 16px;
    left: 5px;
  }
`;
