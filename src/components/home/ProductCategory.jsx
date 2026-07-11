import React from "react";
import styles from "../../styles/Products.module.css";

const ProductCategory = () => {
  const products = [
    {
      title: "Pre-Engineered Buildings",
      img: "/Images/preeng.jpg",
      desc: "Pre-Engineered Buildings are durable, flexible, and cost-efficient steel structures built for faster construction.",
    },
    {
      title: "Solar Structure",
      img: "/Images/Solarstructure.jpg",
      desc: "",
    },
    {
      title: "MS Container",
      img: "/Images/mscontianer.jpg",
      desc: "Compact, secure storage and office solutions. Manufactured with Mild Steel for uncompromising security in the field.",
    },
    {
      title: "HVAC",
      img: "/Images/hvac.jpg",
      desc: "HVAC systems ensure comfortable environments. At L&R Green Pvt Ltd, we provide solutions for efficient performance.",
    },
  ];

  return (
    <section className={styles["products-section"]}>
      <div className={styles["section-head"]}>
        <div>
          <span className={styles.tag}>• Our Products</span>
          <h2>
            Industrial Precision & <br />
            <span>Modular Innovation</span>
          </h2>
        </div>

        <div className={styles["right-head"]}>
          <p className={styles["head-desc"]}>
            10 Years of Quality Products. Leading manufacturer of prefabricated
            structures in New Delhi.
          </p>
        </div>
      </div>

      <div className={styles["product-grid"]}>
        {products.map((item, i) => (
          <div className={styles["product-card"]} key={i}>
            <h4 className={styles["card-title"]}>{item.title}</h4>

            <div
              className={styles["product-img"]}
              style={{
                backgroundImage: item.img ? `url(${item.img})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!item.img && (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderOverlay}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Image Area</span>
                  </div>
                </div>
              )}

              {item.desc && (
                <div className={styles["desc-overlay"]}>
                  <p className={styles["product-desc"]}>{item.desc}</p>
                </div>
              )}
            </div>

            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
