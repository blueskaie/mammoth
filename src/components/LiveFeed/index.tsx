import styled from "styled-components";
import token from "assets/img/Token.svg";

const LiveFeed = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
      <StyledDiv>
        <Text>Balvin223</Text>
        <Icon src={token} />
        <Text color="#00E024">+10000</Text>
      </StyledDiv>
    </Wrapper>
  );
};
export default LiveFeed;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px auto 0;
  max-width: 1200px;
  width: 100%;
  overflow-x: scroll;
  padding: 20px;
  background: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  max-width: 226px;
  padding: 4px;
  background: #09172e;
  border: 1px solid #646464;
  border-radius: 1.5px;
  margin: 0 9px;
`;
const Text = styled.div<{ color?: string }>`
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20.4437px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ color }) => (color ? color : "#7b7b7b")};
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
