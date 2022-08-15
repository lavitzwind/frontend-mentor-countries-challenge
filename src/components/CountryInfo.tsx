import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import lookup from "country-code-lookup";
import { mobile, tablet, desktop } from "../utils/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;
  ${desktop(`
  max-width: 900px;
`)}
  ${tablet(`
    flex-direction: column;
  `)}
`;

const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  ${desktop(`
  max-width: 900px;
`)}
  ${tablet(`
  max-width: 500px;
  `)}
  ${mobile(`
  max-width: 420px;
  margin-left: 4rem;
  `)}
`;

const BackButton = styled.button`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
  gap: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  &:hover {
    background-color: var(--light-gray);
    cursor: pointer;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 450px;
  margin-top: 5rem;
  ${tablet(`
  align-items: center;
  margin-top: 5rem;
  height: auto;
`)}
`;

const Flag = styled.img`
  width: 80%;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  ${tablet(`
  margin-top: 0s;
`)}

  span {
    font-size: 1rem;
    font-weight: 800;
  }
`;

const UpperSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 7rem;

  ${tablet(`
  flex-direction: column;
  gap: 0;
  margin-left: 6rem;
`)}
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.9rem;
`;

const NativeName = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Population = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Region = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const SubRegion = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Capital = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  width: 120%;
  height: auto;

  ${tablet(`
  width: 100%;
  margin-top: 3.5rem;
  `)}
`;

const Domain = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Currency = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Language = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const LowerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
`;

const BorderCountry = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 800;

  ${tablet(`
  margin-left: 2.5rem;
  `)}
`;

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: { svg: string };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: any;
  languages: any;
  borders: string[];
}

const CountryInfo = () => {
  const [country, setCountry] = useState<Country>();
  const location = useLocation();
  const countryName = location.pathname.split("/")[2].toLowerCase();
  const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const { data } = await axios.get(countryUrl);
        setCountry(data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountryInfo();
  }, [countryUrl]);

  return (
    <Container
      style={{
        backgroundColor: darkMode
          ? "var(--very-dark-blue)"
          : "var(--very-light-gray)",
        color: darkMode ? "var(--white)" : "var(--black)",
      }}
    >
      <BackButtonWrapper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "var(--black)",
          }}
        >
          <BackButton>
            <KeyboardBackspaceIcon />
            Back
          </BackButton>
        </Link>
      </BackButtonWrapper>
      <Wrapper>
        <LeftSection>
          <Flag src={country?.flags.svg} alt={country?.name.common} />
        </LeftSection>
        <RightSection>
          <UpperSection>
            <LeftSide>
              <Title>{country?.name.common}</Title>
              <NativeName>
                <span>Native Name:</span> {country?.name.official}
              </NativeName>
              <Population>
                <span>Population:</span> {country?.population.toLocaleString()}
              </Population>
              <Region>
                <span>Region:</span> {country?.region}
              </Region>
              <SubRegion>
                <span>Sub Region:</span> {country?.subregion}
              </SubRegion>
              <Capital>
                <span>Capital:</span> {country?.capital}
              </Capital>
            </LeftSide>
            <RightSide>
              <Domain>
                <span>Top Level Domain:</span> {country?.tld[0]}
              </Domain>
              <Currency>
                <span>Currencies:</span>
                {Object?.keys(country?.currencies || {}).map((key, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    {country?.currencies[key].name}
                    {index !== Object.keys(country?.currencies || {}).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </Currency>
              <Language>
                <span>Languages:</span>
                {Object?.keys(country?.languages || {}).map((key, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    {country?.languages[key]}
                    {index === Object.keys(country?.languages || {}).length - 1
                      ? ""
                      : ", "}
                  </span>
                ))}
              </Language>
            </RightSide>
          </UpperSection>
          <LowerSection>
            <BorderCountry>
              Border Countries:{" "}
              <span
                style={{
                  fontWeight: "500",
                  marginTop: "0.2rem",
                }}
              >
                {!country?.borders && "No border countries"}
              </span>
              {country?.borders?.map((border, index) => (
                <Link
                  to={`/country/${lookup.byIso(border)?.country}`}
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    marginRight: "0.3rem",
                    fontWeight: "500",
                    backgroundColor: "var(--white)",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {lookup.byIso(border)?.country}
                </Link>
              ))}
            </BorderCountry>
          </LowerSection>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default CountryInfo;
