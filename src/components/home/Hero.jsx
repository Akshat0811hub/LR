const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          L&R GREEN INDIA PVT LTD <br />
          PRECISION FABRICATION
        </h1>

        <p>
          Manufacturer of prefabricated structures, mild steel <br />
          containers & prefabricated cabins and solar. <br />
          Established in 2015, New Delhi.
        </p>

        <button className="primary-btn">
          All Category <span>→</span>
        </button>
      </div>

      <div className="hero-building">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
          alt="industrial building"
        />
      </div>

      <div className="stats-card">
        <div>
          <h3>500+</h3>
          <p>Completed Projects</p>
        </div>
        <div>
          <h3>25+</h3>
          <p>Years Of Experience</p>
        </div>
        <div>
          <h3>900+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3>150+</h3>
          <p>Team Workers</p>
        </div>
      </div>

      <h2 className="hero-watermark">PRE ENGINEERED BUILD AND SOLAR</h2>
    </section>
  );
};

export default Hero;