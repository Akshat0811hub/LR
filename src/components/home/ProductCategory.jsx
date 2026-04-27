const ProductCategory = () => {
  const products = [
    "LGSF Systems",
    "Labor Hutment",
    "10x10 MS Container",
    "Modular Office",
  ];

  return (
    <section className="products-section">
      <div className="section-head">
        <div>
          <span className="tag">• Our Products</span>
          <h2>
            Industrial Precision & <br />
            <span>Modular Innovation</span>
          </h2>
        </div>

        <button className="view-btn">View All →</button>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <div className="product-img"></div>

            <div className="product-info">
              <h4>{item}</h4>
              <p>
                High-quality engineered prefab structures for modern industry.
              </p>
            </div>

            <div className="arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;