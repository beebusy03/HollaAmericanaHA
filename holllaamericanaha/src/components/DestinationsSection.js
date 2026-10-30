import { useRef, useState } from 'react';
import './DestinationsSection.css';

const destinations = [
  {
    name: 'Peru',
    image: '/images/Image4.jpg',
  },
  {
    name: 'Brazil',
    image: '/images/Image3.png',
  },
  {
    name: 'Argentina',
    image: '/images/Image5.png',
  },
  {
    name: 'Chile',
    image: '/images/Image6.png',
  },
];

function DestinationsSection() {
  const railRef = useRef(null);
  const [progress, setProgress] = useState(0);

  function scrollDestinations(direction) {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * (rail.clientWidth * 0.65),
      behavior: 'smooth',
    });
  }

  function updateProgress() {
    const rail = railRef.current;
    if (!rail) return;

    const maxScroll = rail.scrollWidth - rail.clientWidth;
    setProgress(maxScroll > 0 ? rail.scrollLeft / maxScroll : 0);
  }

  return (
    <section className="destinations-section" aria-labelledby="destinations-title">
      <img
        className="destinations-map"
        src="/images/Image2.png"
        alt="Topographic map of South America"
      />

      <div className="destinations-content">
        <h2 id="destinations-title">Our Destinations</h2>
        <div
          className="destination-rail"
          ref={railRef}
          onScroll={updateProgress}
          aria-label="South America destinations"
        >
          {destinations.map(({ name, image }) => (
            <article className="destination-card" key={name}>
              <img src={image} alt="" loading="lazy" />
              <div className="destination-card__shade" />
              <div className="destination-card__content">
                <h3>
                  <span aria-hidden="true">⌖</span> {name}
                </h3>
                <p>4 Packages Available</p>
                <a href={`#${name.toLowerCase()}`}>See Now</a>
              </div>
            </article>
          ))}
        </div>
        <div className="destination-controls">
          <div className="destination-arrows">
            <button
              type="button"
              aria-label="Previous destinations"
              onClick={() => scrollDestinations(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next destinations"
              onClick={() => scrollDestinations(1)}
            >
              →
            </button>
          </div>
          <div
            className="destination-progress"
            role="progressbar"
            aria-label="Destination carousel position"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(progress * 100)}
          >
            <span style={{ transform: `scaleX(${Math.max(progress, 0.34)})` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection;
