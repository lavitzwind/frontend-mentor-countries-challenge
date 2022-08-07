import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  gap: 95px;
  flex-wrap: wrap;
`;

const CountriesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20%;
  height: 350px;
  background-color: var(--white);
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  filter: brightness(1);
  transform: scale(1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
    filter: brightness(1.15);
  }
`;

const CountryImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-style: none;
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

interface CountriesProperties {
  common: string;
  svg: string;
}
interface Countries {
  flags: CountriesProperties;
  name: CountriesProperties;
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
  return (
    <Container>
      {loader ? (
        <CircularProgress
          sx={{
            color: "var(--very-dark-blue-2)",
          }}
        />
      ) : (
        <Wrapper>
          {countryData
            .filter((country) =>
              country?.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((country, index) => (
              <CountriesCard key={index}>
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
              </CountriesCard>
            ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default CountriesList;
