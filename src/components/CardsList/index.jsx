import React, { useContext, useEffect, useState } from 'react';
import CountryCard from '../CountryCard';
import { useQuery } from 'react-query';

import { CardsWrapper } from '../Countries/styles';

import { Wrapper } from '../Countries/styles';

import axios from 'axios';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';
import { ThemeContext } from '../../ThemeStorage';

const CardsList = ({ data, filter, searchAll }) => {
  const { darkMode } = useContext(ThemeContext);

  const {
    data: filteredData,
    isLoading: filteredIsLoading,
    isError: filteredIsError,
    refetch,
  } = useQuery(['filteredCountriesQuery', filter], () => {
    if (filter !== '') {
      return axios.get(`https://restcountries.com/v3.1/region/${filter}`);
    } else {
      searchAll();
    }
  });

  useEffect(() => {
    if (filter !== '') {
      refetch();
    }
  }, [filter]);

  if (filteredIsLoading) {
    return <SpinningCircles fill='black' className='loadingIcon' />;
  }

  if (filteredIsError) {
    return <h1>Error in filter, try again later...</h1>;
  }

  const filteredCountriesData = filteredData ? filteredData.data : data;

  return (
    <CardsWrapper>
      {filteredCountriesData &&
        filteredCountriesData.map((country) => {
          return (
            <Wrapper theme={darkMode} key={country.name.common}>
              <CountryCard data={country} />
            </Wrapper>
          );
        })}
    </CardsWrapper>
  );
};

export default CardsList;
