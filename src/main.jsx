import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import ThemeStorage from './ThemeStorage';

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <ThemeStorage>
        <App />
      </ThemeStorage>
    </QueryClientProvider>
  </React.StrictMode>
);
