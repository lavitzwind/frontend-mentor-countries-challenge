import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

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
  width: 60%;
  padding: 20px;
  gap: 15px;
  height: 100%;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus-within {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const Search = () => {
  return (
    <Container>
      <Form>
        <SearchIcon
          sx={{
            color: "var(--dark-gray)",
          }}
        />
        <Input
          role="searchbox"
          type="text"
          placeholder="Search"
          autoComplete="off"
        />
      </Form>
    </Container>
  );
};

export default Search;
