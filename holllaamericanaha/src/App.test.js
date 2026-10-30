import { fireEvent, render, screen, within } from '@testing-library/react';
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
  expect(
    screen.getByText(
      'Exceptional journeys begin with a single choice, choosing the right partner.'
    )
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /our destinations/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /next destinations/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /featured destinations/i })
  ).toBeInTheDocument();
  expect(
    within(screen.getByRole('region', { name: /featured destinations/i })).getAllByRole(
      'article'
    )
  ).toHaveLength(6);
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
