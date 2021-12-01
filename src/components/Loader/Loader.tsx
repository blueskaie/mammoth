import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledSVG = styled.svg<{ size: string; stroke?: string }>`
  animation: 2s ${rotate} linear infinite;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  path {
    stroke: ${({ stroke, theme }) => stroke ?? theme.hoverText};
  }
`;
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
const Loader = ({ size = "16px", stroke, ...rest }: { size?: string; stroke?: string; [k: string]: any }) => {
  return (
    <StyledSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" size={size} stroke={stroke} {...rest}>
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.14" cx="11.5" cy="10.5" r="9.5" stroke="#F3F0FF" strokeWidth="2" />
        <path
          d="M21.3229 10.4157C21.3229 11.9714 20.9597 13.5052 20.2626 14.893C19.5656 16.2807 18.5543 17.4834 17.3107 18.4036C16.0671 19.3239 14.6261 19.9358 13.1044 20.1898C11.5827 20.4439 10.0231 20.3329 8.55179 19.8659C7.08051 19.399 5.73895 18.5891 4.63573 17.5019C3.53251 16.4147 2.69864 15.0807 2.20164 13.608C1.70464 12.1353 1.55848 10.5653 1.775 9.02499C1.99151 7.48471 2.56462 6.01751 3.44791 4.74219"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </StyledSVG>
  );
};
export default Loader;
