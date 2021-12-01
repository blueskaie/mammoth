import React from "react";
import styled from "styled-components";

const FirstSlide = () => {
  return (
    <StyledFirstSlideContainer>
      <p>
        WARNING: Mammoth.Bet is in BETA. Please exercise discretion when using the platform, never play with more
        than you are willing to lose. Please report any bugs you may encounter in our telegram and follow us on twitter!
      </p>
    </StyledFirstSlideContainer>
  );
};

export default FirstSlide;

const StyledFirstSlideContainer = styled.div`
  > p {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: #b9cae9;
    margin: 121px 0 190px;
  }
`;
