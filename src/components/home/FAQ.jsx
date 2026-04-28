import { useState } from "react";
import styles from "../../styles/FAQ.module.css";

const FAQ = () => {
  const faqs = [
    {
      q: "What types of prefab structures do you manufacture?",
      a: "We manufacture PEB buildings, site offices, labour hutments, MS containers, modular offices and solar support structures.",
    },
    {
      q: "Do you provide customized size and design?",
      a: "Yes, every project can be customized according to client requirements, site conditions and usage needs.",
    },
    {
      q: "Do you provide installation support?",
      a: "Yes, we provide fabrication, delivery and installation support depending on the project scope.",
    },
    {
      q: "Where is your company located?",
      a: "We are based in New Delhi and serve industrial, commercial and infrastructure clients.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className={styles["faq-section"]}>
      <div className={styles["faq-left"]}>
        <span className={styles.tag}>• FAQ</span>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <div className={styles["faq-list"]}>
          {faqs.map((item, index) => (
            <div
              className={`${styles["faq-box"]} ${
                open === index ? styles.open : ""
              }`}
              key={index}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className={styles["faq-question"]}>
                <h4>{item.q}</h4>
                <span>{open === index ? "−" : "+"}</span>
              </div>

              <div className={styles["faq-answer"]}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["faq-right"]}>
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80"
          alt="industrial work"
        />
      </div>
    </section>
  );
};

export default FAQ;