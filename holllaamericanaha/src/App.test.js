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
  expect(
    screen.getByRole('heading', { name: /real people, real expertise/i })
  ).toBeInTheDocument();
  expect(screen.getByText('BEHIND EVERY JOURNEY')).toBeInTheDocument();
  expect(screen.getByText('Local Guides & Indian Partners')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /our sidekicks/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/personalized airport transfers and seamless arrival assistance/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole('img', {
      name: /classic red jeep traveling through the green hills of colombia/i,
    })
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
