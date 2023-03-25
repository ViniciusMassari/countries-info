import React, { useContext } from 'react';

import { CardContainer, CountryInfo, CardImageContainer } from './styles';

import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeStorage';

const CountryCard = ({ data }) => {
  const { darkMode } = useContext(ThemeContext);

  if (data)
    return (
      <Link to={`/${data.name.common}`}>
        <CardContainer
          style={{
            background: darkMode ? '#2b3743' : '',
            color: darkMode ? '#ece5e5' : '',
          }}
        >
          <CardImageContainer>
            <img src={data.flags.svg} alt={data.flags.alt} />
          </CardImageContainer>
          <CountryInfo>
            <h2>{data.name.common}</h2>
            <p>Population: {data.population.toLocaleString()}</p>
            <p>Region: {data.region}</p>
            <p>Capital: {data.capital}</p>
          </CountryInfo>
        </CardContainer>
      </Link>
    );
};

export default CountryCard;
