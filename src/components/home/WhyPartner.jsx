import styles from "../../styles/Why.module.css";

import targetIcon from "../../assets/icons/target.png";
import questionIcon from "../../assets/icons/question.png";
import usersIcon from "../../assets/icons/users.png";
import globeIcon from "../../assets/icons/globe.png";

const WhyPartner = () => {
  const items = [
    {
      title: "Our Goals",
      text: "Deliver durable prefab structures with precision, speed and quality.",
      icon: targetIcon,
    },
    {
      title: "Our Mission",
      text: "To provide reliable industrial fabrication and turnkey solutions.",
      icon: questionIcon,
    },
    {
      title: "Our Clients",
      text: "Trusted by industrial, commercial and infrastructure clients.",
      icon: usersIcon,
    },
    {
      title: "Our Vision",
      text: "To become a leading name in modular construction and solar systems.",
      icon: globeIcon,
    },
  ];

  return (
    <section className={styles["why-section"]}>
      <div className={`${styles["section-head"]} ${styles.center}`}>
        <div>
          <span className={styles.tag}>• Why Choose Us</span>
          <h2>
            Why Partner With <span>L&R Green India?</span>
          </h2>
        </div>
      </div>

      <div className={styles["why-grid"]}>
        {items.map((item) => (
          <div className={styles["why-card"]} key={item.title}>
            <div className={styles["why-icon"]}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles["technical-section"]}>
        <div className={styles["technical-text"]}>
          <span className={styles.tag}>• Technical Excellence</span>
          <h2>Precision Engineering For Modern Infrastructure</h2>
          <p>
            We combine advanced fabrication, skilled manpower and quality-driven
            production to deliver strong, reliable and future-ready structures.
          </p>
          <button className={styles["primary-btn"]}>Explore More →</button>
        </div>

        <div className={styles["technical-grid"]}>
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
            alt="factory"
          />
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
            alt="construction"
          />
          <img
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80"
            alt="industry"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;