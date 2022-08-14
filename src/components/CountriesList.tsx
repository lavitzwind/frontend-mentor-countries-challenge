import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { mobile, tablet, desktop } from "../utils/mediaQueries";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  gap: 95px;
  flex-wrap: wrap;
  ${desktop(`
    max-width: 1000px;
`)}
  ${mobile(`
    max-width: 380px;
`)}
`;

const CountriesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20%;
  height: 336px;
  background-color: var(--white);
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  filter: brightness(1);
  transform: scale(1);
  transition: all 0.15s ease-in-out;
  ${desktop(`
  width: 26%;
`)}
  ${tablet(`
  width: 40%;
`)}
  ${mobile(`
  width: 70%;
`)}

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
    filter: brightness(1.15);
  }
`;

const CountryImg = styled.img`
  width: 288px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-style: none;
  border-radius: 5px;
  ${desktop(`
  width: 270px;
  max-width: 100%;
`)}
  ${tablet(`
  width: 300px;
  `)}
`;

const CountriesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 30px 30px 30px;
  gap: 10px;
`;

const CountryName = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--black);
`;

const CountryPopulation = styled.p`
  font-size: 0.9rem;
`;

const CountryRegion = styled.p`
  font-size: 0.9rem;
`;

const CountryCapital = styled.p`
  font-size: 0.9rem;
`;

const Text = styled.span`
  font-weight: 800;
`;

interface Countries {
  flags: { svg: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
}

interface CountriesListProps {
  countryData: Countries[];
  loader: boolean;
  query: string;
}

const CountriesList = ({ countryData, loader, query }: CountriesListProps) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Container
      style={{
        backgroundColor: darkMode
          ? "var(--very-dark-blue)"
          : "var(--very-light-gray)",
      }}
    >
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "78.1vh",
          }}
        >
          <CircularProgress
            sx={{
              color: darkMode ? "var(--white)" : "var(--very-dark-blue-2)",
              marginBottom: "10rem",
            }}
          />
        </div>
      ) : (
        <Wrapper>
          {countryData
            .filter((country) =>
              country?.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((country, index) => (
              <CountriesCard
                key={index}
                style={{
                  backgroundColor: darkMode
                    ? "var(--dark-blue)"
                    : "var(--white)",
                  color: darkMode ? "var(--white)" : "var(--black)",
                }}
              >
                <Link
                  to={`/country/${country?.name.common}`}
                  style={{
                    textDecoration: "none",
                    color: "var(--black)",
                  }}
                >
                  <CountryImg
                    src={country?.flags.svg}
                    alt={country?.name.common}
                  />
                  <CountriesCardWrapper>
                    <CountryName>{country?.name.common}</CountryName>
                    <CountryPopulation>
                      <Text>Population: </Text>
                      {country?.population.toLocaleString()}
                    </CountryPopulation>
                    <CountryRegion>
                      <Text>Region:</Text> {country?.region}
                    </CountryRegion>
                    <CountryCapital>
                      <Text>Capital:</Text> {country?.capital}
                    </CountryCapital>
                  </CountriesCardWrapper>
                </Link>
              </CountriesCard>
            ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default CountriesList;
