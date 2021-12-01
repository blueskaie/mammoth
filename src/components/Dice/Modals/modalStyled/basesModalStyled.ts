import styled from "styled-components";

const StyledModal = styled.div<{ type?: string }>`
  background: ${({ type }) => (type === "Help" ? "#141a25" : "#2a3341")};
  box-shadow: 0px 1px 1px rgba(50, 50, 93, 0.1);
  border: ${({ type }) => (type === "Help" ? "" : "2px solid #68d5d7")};
  border-radius: 6px;
  color: #fff;
  position: fixed;
  left: 0;
  top: 100px;
  width: 100%;
  max-width: 384px;
  max-height: 65%;
  overflow: auto;
  margin: 0 auto;
  padding: 40px 16px 50px;
  opacity: 0;
  transform: scale(0);
  z-index: -1;
  overflow-x: hidden;

  @media (min-width: 400px) {
    top: 100px;
    left: calc(50% - 193px);
    max-height: calc(100% - 160px);
    padding: 40px 32px 30px;
  }

  &.open {
    opacity: 1;
    z-index: 10001;
    transform: scale(1);
    transition: opacity 0.3s ease 0.2s, transform 0.5s;
  }

  h2 {
    margin: 0 0 -16px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin: 14px 0 14px;
    letter-spacing: -0.2px;
    color: #fff;
    font-style: normal;
    font-weight: 400;

    &.rules-step-text {
      margin: 24px 0;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }

  blockquote {
    background: #212b37;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    margin: 8px 0 24px;
    padding: 16px 16px 16px 30px;

    width: 120%;
    margin-left: -32px;
  }
`;
const StyledClose = styled.button`
  position: absolute;
  bottom: 15px;
  right: -15px;
  padding: 8px;
  height: 20px;
  width: 20px;
  svg {
    stroke: #fff;
    height: 12px;
    width: 12px;
  }
  @media (max-width: 400px) {
    right: 0;
  }
`;
const StyledBackDrop = styled.button`
  background: linear-gradient(180deg, #e2efed 0%, #f2f6f8 100%);
  cursor: default;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
  transform: scale(0);

  &.open {
    opacity: 0.4;
    z-index: 10000;
    transform: scale(1);
    transition: opacity 0.1s ease 0.1s, transform 0.2s;
  }
`;
const StyledCloseContainer = styled.div`
  position: sticky;
  top: 0;
`;

const StyledHead = styled.div<{ type?: string }>`
  background: ${({ type }) => (type === "Help" ? "#162338" : "#2a3341")};
`;
export { StyledModal, StyledClose, StyledBackDrop, StyledCloseContainer, StyledHead };
