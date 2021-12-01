import { StyledDiv, StyledLink, StyledNav, StyledImg, StyledLinkInactive } from "./styles";
import wheel from "../assets/WHEEL.svg";
import { useScrollTrigger } from "hooks/useScrollTrigger";

const Nav = () => {
  const opacityTrigger = useScrollTrigger();
  return (
    <>
      <StyledNav>
        <StyledDiv>
          <StyledImg opacity={Number(opacityTrigger)} src={wheel} className="half" />
          <StyledLink
            isActive={(match) =>
              Boolean(match)
            }
            exact
            activeClassName="active"
            to="/"
          >
            <div />
            TUSK
          </StyledLink>
          <StyledLink exact activeClassName="active" to="/originals">
            <div className="styledLinkInactive" /> ON-CHAIN GAMES
          </StyledLink>
          <StyledLink exact activeClassName="active" to="/fight">
            <div /> FIGHT NIGHT
          </StyledLink>
          <StyledLinkInactive>
            <div />
            SLOTS <br /> COMING SOON
          </StyledLinkInactive>
          <StyledLinkInactive>
            <div />
            REWARDS <br /> COMING SOON
          </StyledLinkInactive>
          {/* <NavStyled.StyledLink
              exact
              to="/dice"
              activeClassName="active"
              onClick={() => setTrigger(false)}
            ></NavStyled.StyledLink>
            <NavStyled.StyledLink
              exact
              to="/flip"
              activeClassName="active"
              onClick={() => setTrigger(false)}
            ></NavStyled.StyledLink>
            <NavStyled.StyledLink
              exact
              to="/wheel"
              activeClassName="active"
              onClick={() => setTrigger(false)}
            ></NavStyled.StyledLink> */}
        </StyledDiv>
      </StyledNav>
    </>
  );
};

export default Nav;
