import { describe } from 'vitest';
import { render } from '@testing-library/react';
import NavigationBar from '../../components/NavigationBar';
import { screen } from '../../utils';

describe('NavigationBar', () => {
  test('renders Bootstrap Navigation Bar without errors', () => {
    render(<NavigationBar />);

    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).to.exist;

    const navbarBrandElement = screen.getByText('Map Walker');
    expect(navbarBrandElement).to.exist;

    const settingsLink = screen.getByTestId('Settings');
    const pathTrackerLink = screen.getByText('Path Tracker');

    expect(settingsLink).to.exist;
    expect(pathTrackerLink).to.exist;
  });
});
