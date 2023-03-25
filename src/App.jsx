import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';
import { ThemeStorage } from './ThemeStorage.jsx';
import { useEffect, useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <ThemeStorage>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Countries />} />
            <Route path='/:country' element={<Country />} />
            <Route path='/country/:name' element={<Country />} />
          </Routes>
        </main>
      </ThemeStorage>
    </BrowserRouter>
  );
}

export default App;
