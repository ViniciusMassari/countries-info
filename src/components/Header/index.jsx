import React, { useContext, useEffect } from 'react';

import './styles.css';
import { ThemeContext } from '../../ThemeStorage';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const activeTheme = localStorage.getItem('Countries-theme');
    if (activeTheme && activeTheme === 'false') {
      theme.setDarkMode(true);
    }
  }, []);

  function handleChangeTheme(e) {
    theme.setDarkMode(!theme.darkMode);
    localStorage.setItem('Countries-theme', theme.darkMode);
  }

  return (
    <header
      id='mainHeader'
      className='wrapper'
      style={{
        background: theme.darkMode ? '#2B3743' : '#fff',
        color: theme.darkMode ? '#fff' : 'black',
      }}
    >
      <Link to={'/'}>
        {' '}
        <h1>Where in the world ?</h1>
      </Link>

      <span onClick={handleChangeTheme}>
        {theme.darkMode ? (
          <i className='bi bi-moon'></i>
        ) : (
          <i className='bi bi-brightness-high'></i>
        )}
        {theme.darkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </header>
  );
};

export default Header;
