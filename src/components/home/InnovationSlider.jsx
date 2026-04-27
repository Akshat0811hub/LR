import { useEffect, useState } from "react";

const slides = [
  {
    title: "Pre-Engineered Buildings",
    text: "Durable, fast-installation structures for industrial projects.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "MS Containers",
    text: "Portable and heavy-duty container solutions for offices and sites.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Solar Structures",
    text: "Reliable solar mounting and industrial energy support systems.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
];

const InnovationSlider = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="innovation-section reveal">
      <div className="section-head">
        <div>
          <span className="tag">• Innovation</span>
          <h2>
            Powering Innovation In <span>Every Structure</span>
          </h2>
        </div>

        <div className="slider-controls">
          <button type="button" onClick={prevSlide}>
            ←
          </button>
          <button type="button" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>

      <div className="slider-wrap">
        {slides.map((slide, index) => (
          <div
            className={`innovation-card ${
              index === active ? "active-slide" : ""
            }`}
            key={slide.title}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="innovation-content">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
              <button type="button">View Details →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.map((slide, index) => (
          <span
            key={slide.title}
            onClick={() => setActive(index)}
            className={index === active ? "dot active-dot" : "dot"}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default InnovationSlider;