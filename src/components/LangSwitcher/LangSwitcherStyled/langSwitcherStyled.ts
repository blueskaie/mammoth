import styled, { css } from "styled-components";

const StyledLanguagesDiv: any = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  position: relative;
  z-index: 201;
  width: 50px;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  @media (max-width: 920px) {
    margin-right: 25px;
  }

  svg {
    ${({ toggleMenu }: any) =>
      toggleMenu
        ? css`
            transform: rotateZ(-180deg);
          `
        : css`
            transform: rotateZ(-360deg);
          `};
    transition: all 0.3s ease;
  }
`;

const StyledDropDownHeader = styled.div`
  border: none;
  width: auto;
  padding: 0 10px 0 10px;
  background-color: transparent;
  display: inline-block;
  appearance: none;
  background-repeat: no-repeat;
  background-position: center right;
  position: relative;
  cursor: pointer;
  color: #414141;
  font-family: "Mulish", sans-serif;
`;
const StyledDropDownList: any = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 20px;
  box-sizing: border-box;
  color: #414141;
  overflow: hidden;
  font-weight: 500;
  font-family: "Mulish", sans-serif;
  display: grid;
  border: 1px solid #ecf5f4;
  border-radius: 2px;
  background: #ffffff;
  ${({ toggleMenu }: any) =>
    toggleMenu
      ? css`
          max-height: 220px;
          overflow: hidden;
          border: 1px solid #ecf5f4;
        `
      : css`
          max-height: 0;
          border: 0;
        `};
  transition: all 0.3s ease;
`;
const StyledItem = styled.li`
  padding: 5px 30px 5px 30px;
`;
export { StyledLanguagesDiv, StyledDropDownHeader, StyledDropDownList, StyledItem };
