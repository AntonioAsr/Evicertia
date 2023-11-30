
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from "react-redux";
import store from '../redux/store';


describe('App works', async () => {
  it('should render app', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);
  })
});
