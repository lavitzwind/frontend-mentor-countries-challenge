import styled from "styled-components";
import { useState, useRef, useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import useOnClickOutside from "../hooks/useOnClickOutside";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { mobile, tablet, desktop } from "../utils/mediaQueries";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 720px;
  ${desktop(`
  max-width: 470px;
`)}
  ${tablet(`
  max-width: 225px;
`)}
${mobile(`
  max-width: 220px;
`)}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  height: 100%;
  gap: 30px;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  ${desktop(`
  width: 43%;
`)}
  ${tablet(`
width: 100%;
  `)}

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
`;

const RegionList = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 35%;
  top: 45px;
  right: 0;
  background-color: var(--white);
  border-radius: 5px;
  z-index: 1;

  ${desktop(`
  width: 43%;
`)}
  ${tablet(`
  width: 100%;
  `)}
`;

const OptionRegion = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

const RegionText = styled.span`
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
  height: 30px;
  padding: 10px 0 30px 20px;

  &:hover {
    background-color: var(--dark-gray);
  }
`;

interface DropDownProps {
  fetchRegion: (region: string) => void;
}

const Dropdown = ({ fetchRegion }: DropDownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [region, setRegion] = useState<string>("");

  const { darkMode } = useContext(DarkModeContext);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  const handleClick = (region: string) => {
    fetchRegion(region);
    setRegion(region);
    setOpen(false);
  };

  return (
    <Container ref={dropdownRef}>
      <Wrapper
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: darkMode ? "var(--dark-blue)" : "var(--white)",
          color: darkMode ? "var(--white)" : "#000",
        }}
      >
        <Text>
          {region.slice(0, 1).toUpperCase() + region.slice(1) ||
            "Filter by Region"}
        </Text>
        <KeyboardArrowDownIcon />
      </Wrapper>
      {open && (
        <RegionList
          style={{
            backgroundColor: darkMode ? "var(--dark-blue)" : "var(--white)",
            color: darkMode ? "var(--white)" : "#000",
          }}
        >
          <OptionRegion>
            <RegionText onClick={() => handleClick("africa")}>
              Africa
            </RegionText>
            <RegionText onClick={() => handleClick("americas")}>
              Americas
            </RegionText>
            <RegionText onClick={() => handleClick("asia")}>Asia</RegionText>
            <RegionText onClick={() => handleClick("europe")}>
              Europe
            </RegionText>
            <RegionText onClick={() => handleClick("oceania")}>
              Oceania
            </RegionText>
          </OptionRegion>
        </RegionList>
      )}
    </Container>
  );
};

export default Dropdown;
