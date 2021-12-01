import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-height: 2000px) {
    margin-bottom: calc(100vh - 2350px);
  }
`;

const BorderBlock: any = styled(Link)<{ disabled?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: ${({ active }: any) => (active ? "pointer" : "default")};
  padding: 1px;
  opacity: 0.9;
  transition: all 0.3s ease;
  > p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #5f6a7c;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin: 5px 0 0 25px;
  }

  > h1 {
    position: absolute;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #162846;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 1156px) {
    margin-bottom: 10px;
  }
  @media (max-width: 520px) {
    width: 48%;
    margin-bottom: 10px;

    > h1 {
      top: 35%;
      font-size: 24px;
      line-height: 24px;
    }
    > p {
      font-size: 14px;
    }
  }
  :hover {
    opacity: ${({ disabled }) => (disabled ? "" : "0.6")};
  }
  ${({ disabled }) =>
    disabled &&
    `    
    cursor: not-allowed;
    opacity: 0.5;`}
`;

const PlayNowBlock = styled.div`
  padding: 3%;
  width: 100%;
  height: 675px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
  align-items: center;
  margin-bottom: 130px;
  margin-top: 53px;

  p {
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;

    color: #ffffff;
  }

  @media (max-width: 999px) {
    width: 96%;
    margin: 0 auto;
    margin-bottom: 132px;
    margin-top: 93px;

    border-radius: 15px;
  }
  @media (max-width: 810px) {
    margin-bottom: 0;
  }
  @media (max-width: 660px) {
    div {
      span {
        width: 90%;
      }
    }
  }
  @media (max-width: 620px) {
    width: 90%;
    margin-top: 140px;
    div {
      h3 {
        font-size: 36px;
      }

      span {
        p {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 425px) {
    width: 97.4%;
  }
`;

const GameBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 20px;
  @media (max-width: 1116px) {
    margin-bottom: 200px;
  }
  @media (max-width: 520px) {
    padding: 0 10px;
  }
`;

const PlayBtn = styled.button`
  background: linear-gradient(95.32deg, #8156da 2.68%, #592989 84.52%);
  border-radius: 12px;
  line-height: 21px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-style: normal;
  padding: 15px 0 15px;
  border: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 174px;
  height: 48px;

  &:hover {
    background: linear-gradient(95.32deg, #592989 2.68%, #8156da 84.52%);
    background-image: linear-gradient(95.32deg, rgb(89, 41, 137) 2.68%, rgb(129, 86, 218) 84.52%);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
  }
`;

const PButton = styled.button`
  background: linear-gradient(153.84deg, #15f1b2 8.53%, #20e2b8 19.97%, #3ebac7 42.01%, #6e7bdf 72.14%, #9547f3 94.85%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 21px;
  font-weight: 100;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-style: normal;
  border: none;
  width: 34px;
  height: 34px;
`;

const InfoBlock = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: linear-gradient(270deg, #001438 0%, #081a3a 50.52%, #001438 100%);
  margin: 140px 0 100px;
  padding: 58px 20px 0;
  @media (max-width: 1151px) {
    padding: 20px 20px 70px;
    justify-content: center;
  }
`;

const GetMoreBonus = styled.div`
  padding: 62px 0 53px;
  margin: 0 auto;
  margin-bottom: 103px;
  display: flex;
  z-index: 9;
  align-items: center;
  flex-direction: column;
  width: 78%;
  background: rgb(38, 45, 60);
  border-radius: 20px;

  p {
    text-align: center;
    color: white;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 28px;
    letter-spacing: 0.04em;
  }

  @media (max-width: 1220px) {
    padding: 62px 30px;
  }
  @media (max-width: 950px) {
    z-index: 10;
    margin-top: 68px;
  }
  @media (max-width: 710px) {
    width: 96%;
    padding: 20px 30px;
    margin-top: -10px;
    margin-bottom: 81px;
    background: rgba(38, 45, 60, 2.8);
    p {
      font-size: 21px;
    }
  }

  @media (max-width: 456px) {
    p {
      font-size: 16px;
    }
  }
`;

export { PlayNowBlock, Container, GameBlocks, PButton, BorderBlock, InfoBlock, GetMoreBonus, PlayBtn };
