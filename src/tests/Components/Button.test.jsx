import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../components/Button';

test('renders button with label', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);

  expect(getByText('Click me')).to.exist;
});

// Bootstrap variants
// https://getbootstrap.com/docs/5.3/content/tables/#variants

test('renders button with custom variant', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button label="Custom Button" onClick={onClickMock} variant="btn-secondary" />);

  const button = getByText('Custom Button');

  expect(button.className).toContain('btn-secondary');
});

test('renders button with custom variant', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button label="Custom Button" onClick={onClickMock} variant="Success" />);
  const button = getByText('Custom Button');

  expect(button.className).toContain('Success');
});

test('calls onClick function on click', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);

  fireEvent.click(getByText('Click me'));

  expect(onClickMock).toHaveBeenCalled();
});
