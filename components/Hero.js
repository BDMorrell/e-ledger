import styled from "styled-components";
import { theme } from "./constants";
import ReadWidth from "./ReadWidth";

const HeroBackground = styled.div`
  width: 100%;
  background-color: ${theme.main};
  color: ${theme.onMain};
  padding-top: 1em;
  padding-bottom: 1em;
`;

function Hero(props) {
  return (
    <HeroBackground>
      <ReadWidth>
        <h1>{props.children}</h1>
      </ReadWidth>
    </HeroBackground>
  );
}

export default Hero;
