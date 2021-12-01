import styled from "styled-components";
import { useDispatch } from "react-redux";
import { isClosPopUp } from "../../redux/actions/connect";
import { useContext } from "react";
import { EthersContext } from "context/ethersContext";

const PopUp = () => {
  const dispatch = useDispatch();
  const { cineId } = useContext(EthersContext);
  return (
    <DibBlurStyled>
      <DivStyled>
        <TitleStyled>
          <h3>Unsupported Network</h3>
          <span onClick={() => dispatch(isClosPopUp(cineId === 111))}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.44803 20.2171C4.24037 20.0094 4.1237 19.7278 4.1237 19.4341C4.1237 19.1404 4.24037 18.8588 4.44803 18.6511L18.5418 4.5573C18.7495 4.34964 19.0311 4.23298 19.3248 4.23298C19.6185 4.23298 19.9001 4.34964 20.1078 4.5573C20.3155 4.76496 20.4321 5.04661 20.4321 5.34029C20.4321 5.63397 20.3155 5.91562 20.1078 6.12328L6.014 20.2171C5.80634 20.4247 5.52469 20.5414 5.23102 20.5414C4.93734 20.5414 4.65569 20.4247 4.44803 20.2171Z"
                fill="white"
              />
              <path
                d="M4.44803 4.53269C4.24037 4.74035 4.1237 5.022 4.1237 5.31567C4.1237 5.60935 4.24037 5.891 4.44803 6.09866L18.5418 20.1925C18.7495 20.4001 19.0311 20.5168 19.3248 20.5168C19.6185 20.5168 19.9001 20.4001 20.1078 20.1925C20.3155 19.9848 20.4321 19.7031 20.4321 19.4095C20.4321 19.1158 20.3155 18.8341 20.1078 18.6265L6.014 4.53269C5.80634 4.32502 5.52469 4.20836 5.23102 4.20836C4.93734 4.20836 4.65569 4.32502 4.44803 4.53269Z"
                fill="white"
              />
            </svg>
          </span>
        </TitleStyled>
        <p>Please connect to the appropriate Smart Chain network</p>
      </DivStyled>
    </DibBlurStyled>
  );
};

const DibBlurStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgba(252, 253, 255, 0.6);
  z-index: 999;
`;

const DivStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  background: #2a3341;
  border-radius: 8px;
  z-index: 1000;
  color: white;
  text-align: center;
  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
  h3 {
    font-family: Proxima Nova;
    font-size: 14px;
    color: white;
    margin-top: 6px;
  }
`;
const TitleStyled = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`;

export default PopUp;
