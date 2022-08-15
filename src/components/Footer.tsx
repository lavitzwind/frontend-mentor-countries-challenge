import styled from "styled-components";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { mobile, tablet, desktop } from "../utils/mediaQueries";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78.1vh;
  overflow: hidden;
  ${tablet(`
  height: 68.1vh;
`)}
  ${mobile(`
  height: 25vh;
  `)}
`;

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Container
      style={{
        backgroundColor: darkMode
          ? "var(--very-dark-blue)"
          : "var(--very-light-gray)",
      }}
    ></Container>
  );
};

export default Footer;
