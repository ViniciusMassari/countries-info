import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  DetailsMainContainer,
  CountryDetails,
  DetailsContainer,
  Flag,
  PrimaryInfo,
  SecondaryInfo,
} from './styles';
import Grid from 'react-loading-icons/dist/esm/components/grid';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeStorage';

function formatObject(currencies) {
  if (currencies.length === 1) {
    return currencies[0];
  } else {
    let currenciesArray = [];
    for (const key in currencies) {
      currenciesArray.push(currencies[key].name);
    }
    return currenciesArray;
  }
}

const Country = () => {
  const { country } = useParams();

  const { darkMode } = useContext(ThemeContext);

  const { data, isLoading, isError } = useQuery(
    'CountryQuery',
    handleCountryQuery
  );

  async function handleCountryQuery() {
    return await axios.get(`https://restcountries.com/v3.1/name/${country}`);
  }

  if (isLoading) {
    return (
      <Grid
        className={'loadingIcon'}
        fill={'#aab0b1'}
        speed={1}
        stroke='#fff'
      />
    );
  }

  if (data) {
    const countryData = data.data[0];

    return (
      <DetailsMainContainer
        style={{
          background: darkMode ? '#222e37' : '',
          color: darkMode ? '#cac8c8' : 'black',
        }}
      >
        <Link
          style={{
            boxShadow: darkMode
              ? '0px 2px 16px 0px #1b191b'
              : '0px 2px 16px 0px #998999',
          }}
          to={'/'}
        >
          {' '}
          <i className='bi bi-arrow-left'></i>
          Back
        </Link>
        <DetailsContainer>
          <Flag>
            <img src={countryData.flags.svg} alt={countryData.flags.alt} />
          </Flag>
          <CountryDetails>
            <h3>{countryData.name.common}</h3>
            <PrimaryInfo>
              <p>
                Native Name: <span>{countryData.demonyms.eng.f}</span>
              </p>
              <p>
                Population:{' '}
                <span>{countryData.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{countryData.region}</span>
              </p>
              <p>
                Sub Region: <span>{countryData.subregion}</span>
              </p>
              <p>
                Capital: <span>{countryData.capital.join(', ')}</span>
              </p>
            </PrimaryInfo>
            <SecondaryInfo>
              <p>
                Top Level Domain: <span>{countryData.tld.join(', ')}</span>
              </p>
              <p>
                Currencies:{' '}
                <span>{formatObject(countryData.currencies).join(', ')}</span>
              </p>
              <p>
                Languages:{' '}
                <span>{Object.values(countryData.languages).join(', ')}</span>
              </p>
            </SecondaryInfo>
          </CountryDetails>
        </DetailsContainer>
      </DetailsMainContainer>
    );
  }

  if (isError) {
    return <h1>Error...Try Again later !</h1>;
  }
};

export default Country;
