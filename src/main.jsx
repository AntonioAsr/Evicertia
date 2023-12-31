import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WalkerGame from './components/WalkerGame';
import "bootstrap/dist/css/bootstrap.min.css";
import { GameContextProvider } from './enginge/gameContext';
import WalkerGameContainer from './components/WalkerGameContainer';
import NiceModal from '@ebay/nice-modal-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/walkerGame",
    element: <WalkerGameContainer />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GameContextProvider>
        <NiceModal.Provider>
          <RouterProvider router={router} />
        </NiceModal.Provider>
      </GameContextProvider>
    </Provider>
  </React.StrictMode>,
);
