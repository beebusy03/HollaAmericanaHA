import './BookingSection.css';

function BookingSection() {
  return (
    <section
      className="booking-section"
      aria-labelledby="booking-title"
      style={{ '--booking-image': "url('/images/7thScreen.jpg')" }}
    >
      <div className="booking-section__inner">
        <div className="booking-section__intro">
          <h2 id="booking-title">
            Book Your
            <br />
            Holiday Today!
          </h2>
          <p>
            Begin your dream journey with India’s top South &amp; Latin America
            travel experts.
          </p>
        </div>

        <form className="booking-form">
          <label className="booking-form__field booking-form__field--name">
            <span>Name</span>
            <input name="name" type="text" placeholder="Enter full name" required />
          </label>

          <label className="booking-form__field">
            <span>Mobile</span>
            <span className="booking-form__input-wrap">
              <span className="booking-form__country" aria-label="India, country code +91">
                <span aria-hidden="true">🇮🇳</span> +91
              </span>
              <input
                name="mobile"
                type="tel"
                autoComplete="tel-national"
                placeholder="Enter mobile number"
                required
              />
            </span>
          </label>

          <label className="booking-form__field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email address"
              required
            />
          </label>

          <label className="booking-form__field booking-form__field--full">
            <span>Name of Company</span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Enter company name"
            />
          </label>

          <label className="booking-form__field booking-form__field--full">
            <span>Company Location</span>
            <input
              name="location"
              type="text"
              autoComplete="address-level2"
              placeholder="Enter company location"
            />
          </label>

          <button className="booking-form__submit" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;
