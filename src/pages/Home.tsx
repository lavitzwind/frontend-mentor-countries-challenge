import styled from "styled-components";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";

const Container = styled.div``;

const SearchDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <SearchDropdown>
        <Search />
        <Dropdown />
      </SearchDropdown>
    </Container>
  );
};

export default Home;
