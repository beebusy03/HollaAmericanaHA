import './SidekicksSection.css';

const benefits = [
  {
    number: '1',
    text: 'Personalized airport transfers and seamless arrival assistance',
    icon: 'plane',
  },
  {
    number: '2',
    text: 'Private and small-group sightseeing tours infused with Indian cultural insights',
    icon: 'footsteps',
  },
  {
    number: '3',
    text: 'Indian-operated vehicles and on-ground handling for maximum comfort',
    icon: 'car',
  },
  {
    number: '4',
    text: 'Guaranteed access to authentic Indian meals during your travels',
    icon: 'meal',
  },
  {
    number: '5',
    text: 'Multilingual Indian tour managers ensuring smooth communication',
    icon: 'guide',
  },
  {
    number: '6',
    text: 'Premium luxury travel with dedicated customer support',
    icon: 'support',
  },
];

const iconPaths = {
  plane: 'M2 14.5 22 3l-7.5 19-3.1-7.4L2 14.5Zm9.4.1L22 3',
  footsteps:
    'M8 3.5c1.7 0 2.4 2.8 2.1 4.7-.2 1.4-1.1 2.2-2.2 2.1C6.5 10.1 5.2 8.6 5.2 6.7 5.2 4.9 6.3 3.5 8 3.5Zm8.1 7c1.6 0 2.4 2.7 2.1 4.5-.2 1.4-1.1 2.2-2.2 2.1-1.5-.2-2.8-1.7-2.8-3.5 0-1.8 1.2-3.1 2.9-3.1ZM7.2 12.4l2.4 9H4.4L3 15.7c-.4-1.5.4-2.8 1.8-3.2l2.4-.1Zm8.2 7.3 2.4-7 3.1 1.2c1.3.5 1.9 1.9 1.3 3.2l-2.1 4.4h-5.3l.6-1.8Z',
  car: 'M5 11 7 5h10l2 6 2 2v6h-2v2h-3v-2H8v2H5v-2H3v-6l2-2Zm1.5 0h11L16 7H8l-1.5 4ZM6 14v3h12v-3H6Zm1 1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  meal: 'M4 3v7m3-7v7M5.5 3v18M17 3v18m0-18c2 2 3 5 3 8h-3',
  guide:
    'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 18c.4-5 2.8-8 7-8s6.6 3 7 8H5Zm7-7v6m-2-2 2 2 2-2',
  support:
    'M12 3a8 8 0 0 0-8 8v4a2 2 0 0 0 2 2h2v-6H6a6 6 0 0 1 12 0h-2v6h2a2 2 0 0 0 2-2v-4a8 8 0 0 0-8-8Zm-2 17h4',
};

function BenefitIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[type]} />
    </svg>
  );
}

function SidekicksSection() {
  return (
    <section className="sidekicks-section" aria-labelledby="sidekicks-title">
      <header className="sidekicks-section__header">
        <p className="sidekicks-section__eyebrow" aria-hidden="true">
          CHOOSE US
        </p>
        <h2 id="sidekicks-title">Our Sidekicks</h2>
        <p className="sidekicks-section__description">
          Explore the most breathtaking places across South America
          <br className="sidekicks-section__desktop-break" /> curated to inspire
          your next adventure.
        </p>
      </header>

      <div className="sidekicks-layout">
        <div className="sidekicks-benefits">
          {benefits.slice(0, 3).map(({ number, text, icon }) => (
            <article className="sidekicks-benefit" key={number}>
              <span className="sidekicks-benefit__number">{number}</span>
              <p>{text}</p>
              <span className={`sidekicks-decoration sidekicks-decoration--${icon}`}>
                <BenefitIcon type={icon} />
              </span>
            </article>
          ))}
        </div>

        <img
          className="sidekicks-feature-image"
          src="/images/5thScreenImage.png"
          alt="A classic red jeep traveling through the green hills of Colombia"
          loading="lazy"
        />

        <div className="sidekicks-benefits">
          {benefits.slice(3).map(({ number, text, icon }) => (
            <article className="sidekicks-benefit" key={number}>
              <span className="sidekicks-benefit__number">{number}</span>
              <p>{text}</p>
              <span className={`sidekicks-decoration sidekicks-decoration--${icon}`}>
                <BenefitIcon type={icon} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SidekicksSection;
