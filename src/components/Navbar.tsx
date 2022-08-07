import styled from "styled-components";
import { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1440px;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--black);
`;

const DarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

const DarkModeName = styled.span``;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Container>
      <Wrapper>
        <Logo>Where in the world?</Logo>
        <DarkMode onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
          <DarkModeName>Dark Mode</DarkModeName>
        </DarkMode>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
