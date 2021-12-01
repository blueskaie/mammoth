import React from "react";
import styled, { keyframes } from "styled-components";
import { IPrimaryButtonProps } from "../../../interface/IComponents/IPrimaryButton/IPrimaryButton";

const PrimaryButton = ({
  isHover,
  children,
  disabled,
  onClick,
  className,
  text,
  block,
  btnColor,
  btnBackgroundColor,
  btnBorder,
  btnPadding,
  btnMargin,
  mobilePadding,
  fontWeight,
  fontSize,
  connectWidth,
  landing,
  tabletWidth,
  mobileWidth,
  boxShadow,
  lineHeight,
  btnBorderRadius,
}: IPrimaryButtonProps) => {
  return (
    <StyledBtn
      mobileWidth={mobileWidth}
      tabletWidth={tabletWidth}
      connectWidth={connectWidth}
      isHover={isHover}
      btnMargin={btnMargin}
      btnPadding={btnPadding}
      btnBorder={btnBorder}
      btnColor={btnColor}
      btnBackgroundColor={btnBackgroundColor}
      className={`btn ${className} ${block && "block"}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      mobilePadding={mobilePadding}
      fontWeight={fontWeight}
      fontSize={fontSize}
      landing={landing}
      boxShadow={boxShadow}
      lineHeight={lineHeight}
      btnBorderRadius={btnBorderRadius}
    >
      {text || children}
    </StyledBtn>
  );
};

export default PrimaryButton;

const rotateSVG = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }

`;

const StyledBtn: any = styled.button<{
  btnBackgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  isHover?: string;
  connectWidth?: string;
  tabletWidth?: string;
  mobileWidth?: string;
  btnBorderRadius?: string
}>`
  background: ${({ btnBackgroundColor }) => (btnBackgroundColor ? btnBackgroundColor : "#0F72D7")};
  position: relative;
  border-radius: ${({ btnBorderRadius }) => (btnBorderRadius ? btnBorderRadius : "5px")};
  line-height: 21px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-align: center;
  color: ${({ btnColor }: any) => (btnColor ? btnColor : "#ffffff")};
  font-family: "Inter", sans-serif;
  font-style: normal;
  padding: ${({ btnPadding }: any) => (btnPadding ? btnPadding : "10px")};
  margin: ${({ btnMargin }: any) => (btnMargin ? btnMargin : "0 0 0 0")};
  box-shadow: ${({ boxShadow }: any) => (boxShadow ? boxShadow : "none")};
  border: ${({ btnBorder }: any) => (btnBorder ? btnBorder : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ connectWidth }) => (connectWidth ? connectWidth : "330px")};
  min-width: ${({ connectWidth }) => connectWidth && connectWidth};
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: ${({ btnMargin }: any) => (btnMargin ? btnMargin : "0 0 0 0")};
    padding: ${({ btnPadding }: any) => (btnPadding ? btnPadding : "12px 0 10px 0")};
    width: ${({ connectWidth }) => (connectWidth ? connectWidth : "250px")};
  }
  @media (max-width: 520px) {
    font-size: 15px;
    margin: ${({ btnMargin }: any) => (btnMargin ? btnMargin : "0 0 0 0")};
    padding: ${({ mobilePadding }: any) => (mobilePadding ? mobilePadding : "5px 0 0 0")};
  }
  @media (max-width: 375px) {
    font-size: 13px;
    padding: 6px 0 6px 0;
    width: 130px;
    line-height: ${({ lineHeight }: any) => (lineHeight ? lineHeight : "5px 0 0 0")};
  }

  &:hover:enabled {
    background: ${({ btnBackgroundColor, isHover }) => {
      if (isHover === "red") {
        return "";
      }
      return btnBackgroundColor ? "" : "#00A3FF";
    }};
  }

  &.block {
    width: 100%;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &-note {
    color: #d4bdef;
    display: block;
    font-size: 12px;
    line-height: 1.33;
    margin: 8px auto;

    @media (min-width: 768px) {
      margin-bottom: 16px;
    }
  }

  svg {
    margin-right: 8px;
    display: inline-block;
    vertical-align: middle;
  }

  @keyframes rotateSVG {
  }

  &.active {
    svg {
      animation-name: ${rotateSVG};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    width: ${({ tabletWidth }) => tabletWidth};
  }

  @media (max-width: 520px) {
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;
