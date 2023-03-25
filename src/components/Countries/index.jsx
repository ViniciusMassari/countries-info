import React, { useCallback, useContext, useState } from 'react';
import { Wrapper, SearchCountry, CardsWrapper, SelectRegion } from './styles';
import { useQuery } from 'react-query';
import axios from 'axios';

import Error from '../helper/Error';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';
import CardsList from '../CardsList';
import { ThemeContext } from '../../ThemeStorage';
import { useNavigate } from 'react-router-dom';

const Countries = () => {
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  const { darkMode } = useContext(ThemeContext);

  const [error, setError] = useState(false);
  const [errorTimer, setErrorTimer] = useState(null);
  const [searchName, setSearchName] = useState('');

  const handleCountriesQuery = useCallback(() => {
    return axios.get('https://restcountries.com/v3.1/all');
  }, []);

  const { data, isLoading, isError, refetch } = useQuery(
    'countriesQuery',
    handleCountriesQuery
  );

  async function handleClick() {
    try {
      await axios
        .get(`https://restcountries.com/v3.1/name/${searchName}`)
        .then((data) => {
          if (data.statusText === 'OK') {
            navigate(`/${data.data[0].name.common}`);
          }
        });
    } catch (error) {
      setError(true);
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
      const newErrorTimer = setTimeout(() => {
        setError(false);
      }, 2000);
      setErrorTimer(newErrorTimer);
    }
  }

  if (isLoading) {
    return <SpinningCircles fill='black' className='loadingIcon' />;
  }

  if (data) {
    const countriesData = data.data;

    return (
      <Wrapper darkMode={darkMode} className='wrapper'>
        <SearchCountry>
          <div>
            <input
              style={{
                background: darkMode ? '#2B3743' : '',
                color: darkMode ? '#fff' : '',
              }}
              value={searchName}
              type='text'
              onChange={({ target }) => setSearchName(target.value)}
              placeholder='Search for a Country...'
            />
            <button
              onClick={handleClick}
              style={{
                background: darkMode ? '#2B3743' : '',
              }}
            >
              {' '}
              <i
                className='bi bi-search'
                style={{ color: darkMode ? '#fff' : '' }}
              ></i>
            </button>
            {error && <Error />}
          </div>
          <SelectRegion>
            <select
              style={{
                background: darkMode ? '#2B3743' : '',
                color: darkMode ? '#fff' : '',
              }}
              placeholder='Filter by Region'
              defaultValue={filter}
              onChange={({ target }) => setFilter(target.value)}
            >
              <option disabled>Filter by Region</option>
              <option value=''>No Filter</option>
              <option value='Africa'>Africa</option>
              <option value='America'>America</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
            </select>
          </SelectRegion>
        </SearchCountry>
        <CardsWrapper>
          <CardsList
            data={countriesData}
            filter={filter}
            refetchAll={refetch}
            searchAll={handleCountriesQuery}
          />
        </CardsWrapper>
      </Wrapper>
    );
  }

  if (isError) {
    return <h1>Error ! try again later !</h1>;
  }
};

export default Countries;
