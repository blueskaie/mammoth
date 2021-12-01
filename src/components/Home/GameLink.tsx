import { BorderBlock } from "./homeStyled/HomeStyled";

const GameLink = ({ url, imagUrl, active, name, soon }: any) => {
  return (
    <BorderBlock disabled={!active} to={active ? url : "/"} active={`${active}`}>
      <img src={imagUrl} alt="" />
      <p>{name}</p>
      {soon && <h1>Coming Soon!</h1>}
    </BorderBlock>
  );
};

export default GameLink;
