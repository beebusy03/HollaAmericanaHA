import './SiteFooter.css';

const footerLinks = [
  { label: 'Home', href: '#destinations' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About us', href: '#about-us' },
  { label: "FAQ's", href: '#faq' },
  { label: 'Contact us', href: '#contact' },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <section
        className="footer-cta"
        aria-labelledby="footer-cta-title"
        style={{ '--footer-cta-image': "url('/images/9th.jpg')" }}
      >
        <h2 id="footer-cta-title">Ready to Get Started?</h2>
        <p>
          The purpose of a FAQ is generally to provide information on frequent
          <br className="footer-cta__desktop-break" /> questions or concerns.
        </p>
        <a className="footer-cta__button" href="#contact">
          Contact us
        </a>
      </section>

      <div className="site-footer__main">
        <section className="site-footer__brand" aria-label="About Holla Americana">
          <a className="site-footer__logo" href="#destinations">
            LOGO
          </a>
          <p>
            The purpose of a FAQ is generally to provide information on
            frequent questions or concerns.
          </p>
          <nav className="site-footer__socials" aria-label="Social media">
            {['𝕏', 'f', '◎', '◉'].map((icon, index) => (
              <a
                href="#contact"
                key={icon}
                aria-label={['X', 'Facebook', 'Instagram', 'Community'][index]}
              >
                {icon}
              </a>
            ))}
          </nav>
        </section>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <h2>Holla Americana</h2>
          <ul>
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="site-footer__contact">
          <h2>Contact us to know Packages</h2>
          <a className="site-footer__contact-button" href="#contact">
            Contact us
          </a>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p>© Copyright 2025, All Rights Reserved by Holla Americana</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
