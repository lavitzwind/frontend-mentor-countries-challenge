import styled from "styled-components";
import { useState, useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DarkModeContext } from "../context/darkModeContext";
import { mobile, tablet, desktop } from "../utils/mediaQueries";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  ${desktop(`
    max-width: 1000px;
  `)}
  ${tablet(`
    max-width: 500px;
  `)}
  ${mobile(`
    max-width: 375px;
  `)}
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--black);
  ${mobile(`
  font-size: 1.2rem;
`)}
`;

const DarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const DarkModeName = styled.span`
  color: var(--black);
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    dispatch({ type: "TOGGLE" });
  };

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "var(--dark-blue)" : "var(--white)",
        color: darkMode ? "var(--white)" : "#000",
      }}
    >
      <Wrapper>
        <Logo>Where in the world?</Logo>
        <DarkMode onClick={handleDarkMode}>
          <DarkModeIcon />
          <DarkModeName>Dark Mode</DarkModeName>
        </DarkMode>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
