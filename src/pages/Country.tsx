import styled from "styled-components";
import Navbar from "../components/Navbar";
import CountryInfo from "../components/CountryInfo";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Country = () => {
  return (
    <Container>
      <Navbar />
      <CountryInfo />
      <Footer />
    </Container>
  );
};

export default Country;
