import styled from "styled-components";
import Navbar from "../components/Navbar";
import CountryInfo from "../components/CountryInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Country = () => {
  return (
    <Container>
      <Navbar />
      <CountryInfo />
    </Container>
  );
};

export default Country;
