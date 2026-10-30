import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the South America hero and navigation', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /experience like never before/i })
  ).toBeInTheDocument();
  expect(screen.getByText('South America')).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /book your holiday today/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('navigation', { name: /main navigation/i })
  ).toBeInTheDocument();
});

test('toggles the navigation menu', () => {
  render(<App />);

  const menuButton = screen.getByRole('button', { name: /open menu/i });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(menuButton);
  expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
});
