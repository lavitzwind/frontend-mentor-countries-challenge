import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { SearchProps } from "../interfaces/searchProps";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 50px 0 50px 0;
  max-width: 720px;
  height: 40px;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  padding: 30px;
  gap: 15px;
  height: 100%;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus-within {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  transition: all 0.15s ease-in-out;

  ::placeholder {
    color: #ddd;
  }
`;

const Search = ({ setQuery, query }: SearchProps) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <Form
        style={{
          backgroundColor: darkMode ? "var(--dark-blue)" : "var(--white)",
        }}
      >
        <SearchIcon
          sx={{
            color: darkMode ? "var(--white)" : "var(--dark-gray)",
          }}
        />
        <Input
          role="searchbox"
          type="text"
          placeholder="Search for a country..."
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          style={{
            backgroundColor: darkMode ? "var(--dark-blue)" : "var(--white)",
            color: darkMode ? "var(--white)" : "#000",
          }}
        />
      </Form>
    </Container>
  );
};

export default Search;
