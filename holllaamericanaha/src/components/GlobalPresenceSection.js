import './GlobalPresenceSection.css';

function GlobalPresenceSection() {
  return (
    <section
      className="global-presence"
      aria-labelledby="global-presence-title"
    >
      <div className="global-presence__copy">
        <h2 id="global-presence-title">
          A trusted
          <br />
          Indian
          <br />
          company.
          <br />
          With a Global
          <br />
          presence
        </h2>
        <p>
          We bring an understanding of Indian travellers together with a passion
          for South America.
        </p>
      </div>
      <img
        className="global-presence__map"
        src="/images/6.png"
        alt="World map showing our roots in India and travel focus in South America"
        loading="lazy"
      />
    </section>
  );
}

export default GlobalPresenceSection;
