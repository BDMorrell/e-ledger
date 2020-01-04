import styled from "styled-components";
import { theme } from "../lib/constants/stylingParts";
import ReadWidth from "./ReadWidth";

const HeroBackground = styled.div`
  width: 100%;
  background-color: ${theme.main};
  color: ${theme.onMain};
  padding-top: 1em;
  padding-bottom: 1em;
  a {
    color: ${theme.onMain};
  }
`;

function Hero(props) {
  return (
    <HeroBackground>
      <ReadWidth>
        {props.children}
      </ReadWidth>
    </HeroBackground>
  );
}

export default Hero;
