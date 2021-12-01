import styled from "styled-components";
import { ReactComponent as Icon } from "../assets/images/icon.svg";

const ArrowIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 11px;
  @media (max-width: 768px) {
    margin-right: 0%;
    width: 24px;
    height: 24px;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledTypePicker = styled.div<{ gridArea?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};
  align-items: center;
  .label {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.75px;
    padding: 0 15px;
  }

  .radio {
    opacity: 0;
    position: absolute;
    z-index: -1;
    &:checked + .label {
      cursor: not-allowed;
      opacity: 0.7;
      transition: all 0.1s;
      border: none;
      color: #ffffff;
      &.under {
        background: #d70f63;
      }
      &.over {
        background: #a30fd7;
      }
    }
  }
  .label {
    opacity: 1;
    transition: all 0.3s;
    border: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 20px;
    &.under {
      background: #a30fd7;
    }
    &.over {
      background: #d70f63;
    }
    &:hover {
      &.under {
        background: #d04bff;
      }
      &.over {
        background: #f3468f;
      }
    }
  }

  @media (max-width: 920px) {
    .label {
      font-size: 14px;
      padding: 15px 5px;
    }
  }

  @media (max-width: 520px) {
    .label {
      font-size: 12px;
      padding: 15px 5px;
    }
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    color: #8b8e8d;
    font-style: normal;
    text-align: center;
    margin: 0 auto 19px;

    .number {
      padding: 8px;
      display: block;
      background: linear-gradient(
        153.84deg,
        rgba(21, 241, 178, 0.3) 8.53%,
        rgba(32, 226, 184, 0.3) 19.97%,
        rgba(62, 186, 199, 0.3) 42.01%,
        rgba(110, 123, 223, 0.3) 72.14%,
        rgba(149, 71, 243, 0.3) 94.85%
      );
      border-radius: 40px;
      div {
        width: 130px;
        height: 39px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 700;
        background: linear-gradient(
          153.84deg,
          #15f1b2 8.53%,
          #20e2b8 19.97%,
          #3ebac7 42.01%,
          #6e7bdf 72.14%,
          #9547f3 94.85%
        );
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
const StyledScroller = styled.input`
  background-size: 200px 24px;
  background-repeat: no-repeat;
  background-position: 0 0;
  border-radius: 40px;
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  transition: background-position, background-color 0.2s;
  margin: 8px 0 10px 0;
  @media (max-width: 585px) {
    margin: 16px 0 18px 0;
  }

  &.under {
    background-color: #a30fd7;
    background-image: linear-gradient(rgba(215, 15, 99, 1) 0%, rgba(215, 15, 99, 1) 100% 100%);
    background-position: 0;
  }

  &.over {
    background-color: #d70f63;
    background-image: linear-gradient(90deg, rgba(163, 15, 215, 1) 0%, rgba(163, 15, 215, 1) 100%);
    background-position: 100%;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track,
  &::-moz-range-track {
    width: 100%;
    height: 24px;
    cursor: pointer;
    animate: 0.2s ease;
    border-radius: 6px;
    border: 0 solid #000101;
  }

  &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s ease;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }

  &::-moz-range-thumb {
    border: 2px solid #0f72d7;
    background: #11161f;
    border-radius: 40px;
    cursor: pointer;
    -webkit-appearance: none;
    margin: -8px 0;
    height: 17px;
    width: 17px;
    position: relative;
  }

  &::-webkit-slider-thumb {
    border: 2px solid #0f72d7;
    background: #11161f;
    border-radius: 40px;
    cursor: pointer;
    -webkit-appearance: none;
    margin: -8px 0;
    height: 35px;
    width: 35px;
    position: relative;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background: #000;
    border: 0 solid #000101;
    border-radius: 50px;
    height: 10px;
    width: 10px;
  }

  &::-ms-thumb {
    border: 0 solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #ece3f7;
    cursor: pointer;
  }

  &:focus::-ms-fill-lower,
  &:focus::-ms-fill-upper,
  &:focus::-webkit-slider-runnable-track {
    background: #3c1b63;
  }
`;
const StyledTypePickerRadio = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLine = styled.div`
  height: 2px;
  width: 12px;
  position: absolute;
  top: 34px;
  background: #2a3341;
`;
export { ArrowIcon, StyledContainer, StyledTypePicker, StyledScroller, StyledTypePickerRadio, StyledLine };
