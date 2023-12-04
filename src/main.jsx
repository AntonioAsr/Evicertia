import React from 'react';
import ReactDOM from 'react-dom';
import { createRoutesFromElements, createBrowserRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import DashBoard from './components/DashBoard';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="dashboard" element={<DashBoard />} />
  </Route>
);

const router = createBrowserRouter({ routes });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {router}
      </Router>
    </Provider>
  </React.StrictMode>,
);
