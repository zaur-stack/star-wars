import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@containers/App/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import { ThemeProvider } from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HashRouter basename='/star-wars/'>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
    
  </React.StrictMode>
);


