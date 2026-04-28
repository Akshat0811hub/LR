import styles from "../../styles/ClientStrip.module.css";

const ClientLogoStrip = () => {
  const logos = [
    "HETERO",
    "Mahindra",
    "Walmart",
    "P&G",
    "NATCO",
    "Shapoorji",
  ];

  return (
    <section className={styles["client-strip"]}>
      <div className={styles["logo-track"]}>
        {[...logos, ...logos].map((logo, index) => (
          <div className={styles["client-logo"]} key={index}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogoStrip;