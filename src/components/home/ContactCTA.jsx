import styles from "../../styles/Contact.module.css";

const ContactCTA = () => {
  return (
    <section className={styles["contact-section"]}>
      <div className={styles["contact-card"]}>
        <div className={styles["contact-info"]}>
          <span className={`${styles.tag} ${styles["dark-tag"]}`}>
            • Contact Us
          </span>

          <h2>Let’s Build Something Strong Together</h2>

          <p>
            Share your requirement and our team will connect with you for prefab,
            steel container and solar structure solutions.
          </p>

          <div className={styles["contact-detail"]}>
            <h4>📍 Address</h4>
            <p>New Delhi, India</p>
          </div>

          <div className={styles["contact-detail"]}>
            <h4>📞 Phone</h4>
            <p>+91-8595351363 / 9758813668</p>
          </div>

          <div className={styles["contact-detail"]}>
            <h4>✉ Email</h4>
            <p>Info.Lr1995@gmail.com</p>
          </div>
        </div>

        <form className={styles["contact-form"]}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />

          <select>
            <option>Select Service</option>
            <option>Pre-Engineered Building</option>
            <option>MS Container</option>
            <option>Modular Office</option>
            <option>Solar Structure</option>
          </select>

          <textarea placeholder="Write Message"></textarea>

          <button type="button">Submit Request →</button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;