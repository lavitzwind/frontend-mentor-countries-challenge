import styled from "styled-components";
import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 720px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  height: 100%;
  gap: 30px;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  font-size: 0.9rem;
`;

const RegionList = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 25%;
  top: 45px;
  right: 0;
  background-color: var(--white);
  border-radius: 5px;
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

const Dropdown = () => {
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  return (
    <Container ref={dropdownRef}>
      <Wrapper onClick={() => setOpen(!open)}>
        <Text>Filter by Region</Text>
        <KeyboardArrowDownIcon />
      </Wrapper>
      {open && (
        <RegionList>
          <OptionRegion>
            <RegionText onClick={() => setOpen(false)}>Africa</RegionText>
            <RegionText onClick={() => setOpen(false)}>Americas</RegionText>
            <RegionText onClick={() => setOpen(false)}>Asia</RegionText>
            <RegionText onClick={() => setOpen(false)}>Europe</RegionText>
            <RegionText onClick={() => setOpen(false)}>Oceania</RegionText>
          </OptionRegion>
        </RegionList>
      )}
    </Container>
  );
};

export default Dropdown;
