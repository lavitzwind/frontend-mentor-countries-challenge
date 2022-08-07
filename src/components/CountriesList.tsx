import styled from "styled-components";

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
`;

interface Countries {
  common: string;
  population: number;
  region: string;
  capital: string[];
}

interface CountriesListProps {
  countryData: Countries[];
  loader: boolean;
}

const CountriesList = ({ countryData, loader }: CountriesListProps) => {
  return (
    <Container>
      <Wrapper>Hello World!</Wrapper>
    </Container>
  );
};

export default CountriesList;
