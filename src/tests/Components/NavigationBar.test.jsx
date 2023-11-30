import { describe } from 'vitest';
import { render } from '@testing-library/react';
import NavigationBar from '../../components/NavigationBar';

describe('NavigationBar', () => {
  test('renders Bootstrap Navigation Bar without errors', () => {
    render(<NavigationBar />);
  });
})
