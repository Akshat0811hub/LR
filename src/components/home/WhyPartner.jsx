import styles from "../../styles/Why.module.css";

import targetIcon from "../../assets/icons/target.png";
import questionIcon from "../../assets/icons/question.png";
import usersIcon from "../../assets/icons/users.png";
import globeIcon from "../../assets/icons/globe.png";

const WhyPartner = () => {
  const items = [
    {
      num: "01",
      title: "Our Goals",
      text: "Our goal is to provide excellent quality products, which satisfy every need of our clients adequately and serve them well.",
      icon: targetIcon,
    },
    {
      num: "02",
      title: "Our Mission",
      text: "Our mission is to work hard to take care of whatever our clients want now and in the future and prosper doing so.",
      icon: questionIcon,
      active: true,
    },
    {
      num: "03",
      title: "Our Client",
      text: "Our aim is to keep thriving tirelessly to reach the core of the satisfaction of our clients with our amazing services. We make client happy",
      icon: usersIcon,
    },
    {
      num: "04",
      title: "Our Vision",
      text: "Big or small we have delivered every project on time and to customers satisfaction.",
      icon: globeIcon,
    },
  ];

  return (
    <section className={styles["why-section"]}>
      <div className={styles["section-head"]}>
        <span className={styles.tag}>• Why Choose us</span>
        <div className={styles.center}>
          <h2>
            Why Partner with <span>L & R GREEN INDIA?</span>
          </h2>
          <p className={styles.subtitle}>
            Since its inception and till date – metalsquare has a 100% success rate. Reputation in<br />
            market & credit worthiness amongst vendors
          </p>
          <div className={styles.divider} />
        </div>
      </div>

      <div className={styles["why-grid"]}>
        {items.map((item) => (
          <div className={`${styles["why-card"]} ${item.active ? styles["why-card-active"] : ""}`} key={item.title}>
            <div className={styles["card-top"]}>
              <div className={styles["why-icon"]}>
                <img src={item.icon} alt={item.title} />
              </div>
              <span className={styles["card-num"]}>{item.num}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles["mosaic-grid"]}>
        {/* Row 1 */}
        <div className={styles["mosaic-cell"]} style={{ background: "#1e3a6e" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "20px" }}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
            <line x1="12" y1="12" x2="12" y2="16" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
          <h3 className={styles["mosaic-label"]}>TECHNICAL<br />EXCELLENCE</h3>
        </div>

        <div className={styles["mosaic-cell"]} style={{ padding: 0, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80"
            alt="Robotic welding"
            className={styles["mosaic-img"]}
          />
        </div>

        <div className={styles["mosaic-cell"]} style={{ background: "#1e3a6e", position: "relative", padding: 0, overflow: "hidden" }}>
          <p className={styles["mosaic-caption"]}>ADVANCED FABRICATION<br />TECHNOLOGY</p>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            alt="Advanced fabrication"
            className={styles["mosaic-img"]}
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* Row 2 */}
        <div className={styles["mosaic-cell"]} style={{ padding: 0, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
            alt="Steel structures"
            className={styles["mosaic-img"]}
          />
        </div>

        <div className={styles["mosaic-cell"]} style={{ background: "#1e3a6e", alignItems: "center", justifyContent: "center" }}>
          <div className={styles["build-fast-box"]}>
            BUILD<br />FAST
          </div>
        </div>

        <div className={styles["mosaic-cell"]} style={{ padding: 0, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
            alt="Solar panels"
            className={styles["mosaic-img"]}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;