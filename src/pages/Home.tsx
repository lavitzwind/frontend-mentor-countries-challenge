import styled from "styled-components";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import CountriesList from "../components/CountriesList";
import Footer from "../components/Footer";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import axios from "axios";
import { mobile, tablet } from "../utils/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--very-light-gray);
  overflow: hidden;
`;

const SearchDropdown = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  ${tablet(`
  flex-direction: column;
  margin-bottom: 5rem;
  `)}
`;

interface Countries {
  flags: { svg: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
}

const Home = () => {
  const [countryData, setCountryData] = useState<Countries[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const { darkMode } = useContext(DarkModeContext);

  const apiUrl = "https://restcountries.com/v3.1/all";
  const apiRegionUrl = "https://restcountries.com/v3.1/region/";

  const fetchRegion = async (region: string) => {
    try {
      setLoader(true);
      const { data } = await axios.get(apiRegionUrl + region);
      setCountryData(data);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(apiUrl);
        setCountryData(data);
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountryData();
  }, []);

  return (
    <Container
      style={{
        backgroundColor: darkMode
          ? "var(--very-dark-blue)"
          : "var(--very-light-gray)",
      }}
    >
      <Navbar />
      <SearchDropdown
        style={{
          backgroundColor: darkMode
            ? "var(--very-dark-blue)"
            : "var(--very-light-gray)",
        }}
      >
        <Search setQuery={setQuery} query={query} />
        <Dropdown fetchRegion={fetchRegion} />
      </SearchDropdown>
      <CountriesList countryData={countryData} loader={loader} query={query} />
      <Footer />
    </Container>
  );
};

export default Home;
