import './FeaturedDestinations.css';

const destinationColumns = [
  [
    {
      name: 'Peru',
      description: 'Machu Picchu · Sacred Valley · Andean Culture',
      image: '/images/peru.png',
    },
    {
      name: 'Chile',
      description: 'Deserts · Volcanoes · Starry Nights',
      image: '/images/chile.png',
    },
  ],
  [
    {
      name: 'Brazil',
      description: 'Rio de Janeiro · Amazonia · Coastal Adventures',
      image: '/images/Brazil.png',
      size: 'featured-destination-card--tall',
    },
    {
      name: 'Colombia',
      description: 'Caribbean Vibes · Colonial Towns',
      image: '/images/colombia.png',
    },
  ],
  [
    {
      name: 'Argentina',
      description: 'Patagonia · Wine Valleys · Glaciers',
      image: '/images/argentina.png',
    },
    {
      name: 'Peru',
      description: 'Machu Picchu · Sacred Valley · Andean Culture',
      image: '/images/peru2.png',
    },
  ],
];

function FeaturedDestinationCard({ name, description, image, size }) {
  return (
    <article
      className={`featured-destination-card${size ? ` ${size}` : ''}`}
      style={{ '--destination-image': `url("${image}")` }}
    >
      <a
        className="featured-destination-card__link"
        href={`#${name.toLowerCase()}`}
        aria-label={`Explore ${name}`}
      >
        <span aria-hidden="true">↗</span>
      </a>
      <div className="featured-destination-card__copy">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function FeaturedDestinations() {
  return (
    <section
      className="featured-destinations"
      aria-labelledby="featured-destinations-title"
    >
      <header className="featured-destinations__header">
        <p className="featured-destinations__eyebrow" aria-hidden="true">
          DESTINATION
        </p>
        <h2 id="featured-destinations-title">Featured Destinations</h2>
        <p className="featured-destinations__description">
          Explore the most breathtaking places across South America
          <br className="featured-destinations__desktop-break" /> curated to
          inspire your next adventure.
        </p>
      </header>

      <div className="featured-destinations__grid">
        {destinationColumns.map((column, index) => (
          <div className="featured-destinations__column" key={index}>
            {column.map((destination, cardIndex) => (
              <FeaturedDestinationCard
                key={`${destination.name}-${cardIndex}`}
                {...destination}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;
