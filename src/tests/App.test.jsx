
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import store from '../redux/store';
import WalkerGame from '../components/WalkerGame';
import LandingPage from '../components/LandingPage';

describe('App works', async () => {
  it('should render Landing Page', () => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>);
  })
  it('should render Walker Game', () => {
    render(
      <Provider store={store}>
        <WalkerGame />
      </Provider>);
  })
});
