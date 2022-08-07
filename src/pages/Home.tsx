import styled from "styled-components";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import CountriesList from "../components/CountriesList";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div``;

const SearchDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface Countries {
  common: string;
  population: number;
  region: string;
  capital: string[];
}

const Home = () => {
  const [countryData, setCountryData] = useState<Countries[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const apiUrl = "https://restcountries.com/v3.1/all";

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
        <Search />
        <Dropdown />
      </SearchDropdown>
      <CountriesList countryData={countryData} loader={loader} />
    </Container>
  );
};

export default Home;
