import React from "react";
import { ReactComponent as ArrowLeft } from "./assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./assets/images/arrow-right.svg";
import styled from "styled-components";

function Pagination(props: any) {
  const { leftDisabled, rightDisabled, firstItemOfPage, lastItemOfPage, totalPosts, pageForward, pageBack } = props;

  return (
    <StyledContainer>
      <StyledPostsCount>
        {firstItemOfPage} - {lastItemOfPage} of {totalPosts.length}
      </StyledPostsCount>
      <StyledArrow disabled={leftDisabled} onClick={pageBack}>
        <ArrowLeft style={{ cursor: "pointer" }} />
      </StyledArrow>
      <StyledArrow margin="0 0 0 15px" disabled={rightDisabled} onClick={pageForward}>
        <ArrowRight style={{ cursor: "pointer" }} />
      </StyledArrow>
    </StyledContainer>
  );
}

export default Pagination;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 18px 32px;
  @media (max-width: 431px) {
    justify-content: space-between;
    padding: 18px 23px;
  }
`;

const StyledArrow = styled.button<{ margin?: string }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: ${({ margin }) => margin};
  svg path {
    fill: #fff;
    width: 10px;
    height: 10px;
  }
  &:disabled {
    svg path {
      cursor: not-allowed;
      fill: grey;
    }
  }
`;

const StyledPostsCount = styled.div`
  color: #eaf1f7;
  font-weight: bold;
  font-size: 15px;
  margin-right: 24px;
  align-items: center;
  display: flex;
  @media (max-width: 431px) {
    margin-right: 8px;
  }
`;
