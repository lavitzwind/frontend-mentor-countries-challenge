import styled from "styled-components";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import CountriesList from "../components/CountriesList";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SearchDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    <Container>
      <Navbar />
      <SearchDropdown>
        <Search setQuery={setQuery} query={query} />
        <Dropdown fetchRegion={fetchRegion} />
      </SearchDropdown>
      <CountriesList countryData={countryData} loader={loader} query={query} />
    </Container>
  );
};

export default Home;
