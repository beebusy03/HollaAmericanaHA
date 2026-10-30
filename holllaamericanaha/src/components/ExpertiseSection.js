import './ExpertiseSection.css';

const expertiseStories = [
  {
    className: 'expertise-story--team',
    image: '/images/55d9ac1fa9aa1412a8be763f91dba080df8447e9.jpg',
    imageAlt: 'The Holla Americana team planning a journey together',
    title: 'Indian Team',
    description: 'Planning, Support, Always with you.',
  },
  {
    className: 'expertise-story--guides',
    image: '/images/b77ea8c17e29c5bdce0fcb3b80dac0ce0296ba5e.jpg',
    imageAlt: 'Local guides welcoming travelers in the Andes',
    title: 'Local Guides & Indian Partners',
    description: 'On-ground across South America',
  },
  {
    className: 'expertise-story--machu',
    image: '/images/d3ea3947b7f953f97d988bc6046ddf3fc5c7beb6.jpg',
    imageAlt: 'Machu Picchu among the Andes',
  },
  {
    className: 'expertise-story--culture',
    image: '/images/e7f778e226d1d55f35cc65ffb56b0e8f8c7f6aa8.jpg',
    imageAlt: 'A musician in traditional Andean clothing',
  },
];

function ExpertiseSection() {
  return (
    <section className="expertise-section" id="about-us" aria-labelledby="expertise-title">
      <header className="expertise-section__header">
        <p className="expertise-section__eyebrow" aria-hidden="true">
          BEHIND EVERY JOURNEY
        </p>
        <h2 id="expertise-title">Real People, Real Expertise</h2>
      </header>

      <div className="expertise-collage">
        {expertiseStories.map(
          ({ className, image, imageAlt, title, description }) => (
            <article
              className={`expertise-story ${className}`}
              key={className}
            >
              <img src={image} alt={imageAlt} />
              {title && (
                <div className="expertise-story__caption">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )}
            </article>
          )
        )}

        <aside className="expertise-note expertise-note--team">
          <img src="/images/725e8a94daca3d48e3384dd095cc4b4099d04ba3.png" alt="" />
          <p>From Our<br />Team in India</p>
        </aside>
        <aside className="expertise-note expertise-note--local">
          <img
            src="/images/f7c27081ca9bf641abf7d079f1a3d015f17ed6e3.png"
            alt=""
          />
          <p>
            Authentic experiences
            <br />
            Local connections
          </p>
        </aside>
        <img
          className="expertise-leaf"
          src="/images/74cd8caa4b0bf6ce032666f1fdc79742aa22221a.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default ExpertiseSection;
