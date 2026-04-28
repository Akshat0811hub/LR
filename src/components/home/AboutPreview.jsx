import styles from "../../styles/About.module.css";

const AboutPreview = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-left"]}>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80"
          alt="factory"
        />

        <div className={styles["experience-card"]}>
          <p>10 Years Of</p>
          <h3>Quality Products</h3>
        </div>
      </div>

      <div className={styles["about-right"]}>
        <span className={styles.tag}>• About us</span>

        <h2>
          Industrial Leaders in Pre-Engineered Buildings, Steel Containers &
          Solar
        </h2>

        <p className={styles.sub}>
          Your Trusted Partner for Prefab & Steel Container Solutions
        </p>

        <p>
          L&R Green India Pvt Ltd, based in New Delhi, has been a trusted
          manufacturer of prefabricated structures and mild steel containers
          since 2015. With strong expertise in design, engineering, and turnkey
          project execution, the company delivers high-quality site offices,
          warehouses, portable office containers for diverse industrial needs.
        </p>

        <button className={styles["primary-btn"]}>More About Us →</button>
      </div>
    </section>
  );
};

export default AboutPreview;