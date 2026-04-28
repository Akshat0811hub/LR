import styles from "../../styles/Products.module.css";

const ProductCategory = () => {
  const products = [
    "LGSF Systems",
    "Labor Hutment",
    "10x10 MS Container",
    "Modular Office",
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

        <button className={styles["view-btn"]}>View All →</button>
      </div>

      <div className={styles["product-grid"]}>
        {products.map((item, i) => (
          <div className={styles["product-card"]} key={i}>
            <div className={styles["product-img"]}></div>

            <div className={styles["product-info"]}>
              <h4>{item}</h4>
              <p>High-quality engineered prefab structures for modern industry.</p>
            </div>

            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;