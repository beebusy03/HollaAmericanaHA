import { useState } from 'react';
import './HeroScreen.css';

const navigationLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'About us', href: '#about-us' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

function HeroScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <main
      className="hero"
      id="destinations"
      style={{ '--hero-image': "url('/images/image1.png')" }}
    >
      <header className="site-header">
        <a className="site-logo" href="#destinations" onClick={closeMenu}>
          LOGO
        </a>

        <nav
          id="main-navigation"
          className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`menu-toggle${isMenuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero-content" aria-labelledby="hero-title">
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title__experience">Experience</span>
          <span className="hero-title__script" aria-hidden="true">
            South America
          </span>
          <span className="hero-title__tagline">
            Like Never Before
          </span>
        </h1>

        <a className="booking-link" href="#contact">
          Book your holiday today
        </a>
      </section>
    </main>
  );
}

export default HeroScreen;
