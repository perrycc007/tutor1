import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

import { AuthContextProvider } from './store/auth-context';
import configureSubjectsStore from './hooks-store/subjects-store';

configureSubjectsStore();

ReactDOM.render(
  <AuthContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </FavoritesContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
