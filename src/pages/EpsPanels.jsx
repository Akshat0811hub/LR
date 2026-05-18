import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/EpsPanels.module.css";

const EpsPanels = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is an EPS Sandwich Panel?",
      a: "An EPS sandwich panel is a lightweight modular building material consisting of a rigid expanded polystyrene (EPS) core bonded between two metal facings, providing excellent thermal insulation.",
    },
    {
      id: 1,
      q: "Are EPS panels environment friendly?",
      a: "Yes, the EPS core is 100% recyclable, CFC-free, and highly energy-efficient, minimizing greenhouse gas emissions and energy consumption.",
    },
    {
      id: 2,
      q: "Can EPS panels be used for roofing?",
      a: "Absolutely. We manufacture profiled EPS roofing panels that have superior load capacity, excellent drainage, and high thermal insulation.",
    },
    {
      id: 3,
      q: "What thickness options are available?",
      a: "We offer thickness options from 50mm to 150mm to suit diverse insulation and structural requirements for walls and roofs.",
    },
    {
      id: 4,
      q: "Are EPS panels fire-retardant?",
      a: "Yes, we offer flame-retardant (FR) grade EPS panels that are self-extinguishing and comply with safety and building codes.",
    },
  ];

  const types = [
    {
      title: "Sandwich Wall Panels",
      desc: "Double-sided metal cladding with EPS core, perfect for vertical wall cladding, partitions, clean rooms, and prefab cabins.",
    },
    {
      title: "EPS Core Insulated Panels",
      desc: "High-performance panels for partitions, warehouse enclosures, and cold rooms, ensuring structural rigidity.",
    },
    {
      title: "Roofing Panels",
      desc: "Specially designed panels with profiled top sheets for high load-bearing capacity, weather protection, and water drainage.",
    },
    {
      title: "Structural Insulated Panels",
      desc: "Engineered panels for high-strength walling and roofing systems, ensuring quick modular construction.",
    },
  ];

  const specs = [
    { label: "Core Density", value: "12 - 20 kg/m³" },
    { label: "Thickness", value: "50mm - 150mm" },
    { label: "Width", value: "1000mm / 1150mm" },
    { label: "Fire Rating", value: "B1 / B2" },
    {
      label: "Standard Facing Sheets",
      value: "Pre-painted Galvanized Steel / Aluzinc",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/epspanel.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            HIGH-PERFORMANCE <br />
            EPS PANELS
          </h1>
          <p className={styles.subtitle}>
            At L&amp;R Green Pvt Ltd, our EPS panels are engineered to deliver
            superior durability, rapid installation, energy efficiency, and high
            load capacity.
          </p>
          <button
            className={styles.btnPrimary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact us &nbsp;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── SECTION 1: WHAT ARE EPS PANELS? ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              What Are <br />
              <span>EPS Panels?</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              EPS (Expanded Polystyrene) panels are lightweight construction
              panels consisting of a rigid expanded polystyrene core sandwiched
              between two metal sheets, usually made of pre-painted galvanized
              iron (PPGI) or stainless steel. This combination provides
              excellent thermal insulation, impact resistance, and structural
              strength.
            </p>
            <p>
              Ideal for cold rooms, warehouses, site offices, clean rooms, and
              partition walls, EPS panels offer a cost-effective,
              environmentally friendly alternative to traditional building
              materials. Their rapid installation significantly reduces labor
              costs and project timelines, while their energy efficiency helps
              lower heating and cooling expenses.
            </p>
            <button
              className={styles.btnSecondary}
              style={{ marginTop: "16px" }}
            >
              Contact Us &nbsp;→
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TYPES OF EPS PANELS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle}>
                Types of <br />
                <span>EPS Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.thicknessDesc}>
              We offer high-quality EPS Sandwich Panels for wall cladding,
              roofing, and partition systems, tailored to your exact
              construction needs.
            </p>
          </div>
          <div className={styles.thicknessGrid}>
            {types.map((type, i) => (
              <div
                key={i}
                className={`${styles.thicknessCard} ${i === 0 ? styles.thicknessCardActive : ""}`}
              >
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: EPS TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              EPS Panels <br />
              <span>Technical Specifications</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel5.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <div className={styles.compareGrid}>
              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>Feature</div>
                <div className={styles.compareValue}>Details</div>
              </div>
              {specs.map((spec, i) => (
                <div key={i} className={styles.compareRow}>
                  <div className={styles.compareLabel}>{spec.label}</div>
                  <div className={styles.compareValue}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHERE EPS PANELS WORK BEST ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Where EPS <br />
              Panels Work Best
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#fff", width: "50px", height: "4px" }}
            />
            <p>
              EPS panels from L&amp;R Green Pvt Ltd provide the ultimate
              insulation and modular strength for cold storage rooms, commercial
              partitions, food processing industries, warehouses, clean rooms,
              and temporary site offices.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div
                className={styles.placeholderImgTransparent}
                style={{
                  backgroundImage: "url('/Images/epspanelwork.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: KEY FEATURES & BENEFITS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Key Features &amp; Benefits <br />
              <span>of EPS Panels</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.numList}>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>1</div>
                <div>
                  <strong>Superior Thermal Insulation:</strong> High thermal
                  resistance reduces heat transfer, maintaining stable indoor
                  temperatures and cutting energy bills.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>2</div>
                <div>
                  <strong>Lightweight &amp; High Load Capacity:</strong>{" "}
                  Extremely lightweight structure makes transportation and
                  handling easy, without compromising on structural integrity.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>3</div>
                <div>
                  <strong>Water &amp; Moisture Resistant:</strong> The
                  closed-cell structure of EPS prevents water absorption,
                  protecting walls against mold and decay.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>4</div>
                <div>
                  <strong>Eco-Friendly Core:</strong> 100% recyclable expanded
                  polystyrene core made without harmful CFC or HCFC compounds.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>5</div>
                <div>
                  <strong>Rapid Installation:</strong> Modular tongue-and-groove
                  joint system ensures rapid assembly, cutting project timelines
                  by up to 50%.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>6</div>
                <div>
                  <strong>Fire Retardant Properties:</strong> Available with
                  self-extinguishing EPS core to meet industry safety standards.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel7.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: APPLICATIONS OF EPS PANELS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Applications of <br />
              <span>EPS Panels</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel8.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              EPS panels by L&amp;R Green Pvt Ltd are widely used for vertical
              cladding, roof systems, partitions, and temperature-controlled
              environments, offering excellent efficiency.
            </p>
            <ul
              className={styles.featureList}
              style={{ listStyle: "none", padding: 0 }}
            >
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Cold rooms and walk-in freezers
              </li>
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Clean rooms and laboratories
              </li>
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Warehouses and industrial sheds
              </li>
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Prefabricated modular cabins
              </li>
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Commercial offices and partition walls
              </li>
              <li className={styles.featureItem}>
                <span style={{ color: "#3164a6", fontWeight: "bold" }}>✔</span>{" "}
                Food processing and packing units
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CHOOSE EPS PANELS? ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose <br />
              <span>EPS Panels?</span>
            </h2>
            <div className={styles.divider} />
            <p>
              EPS sandwich panels provide a high-quality, lightweight insulation
              core bonded between durable metal sheets, offering an excellent
              thermal and sound barrier.
            </p>
            <p>
              Their lightweight nature makes installation fast, cost-effective,
              and safe, reducing the load on secondary support structures.
              Furthermore, they are resistant to corrosion, weather conditions,
              and wear, assuring long life and zero maintenance, making them
              ideal for modern sustainable modular building projects.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel9.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Quick answers to help you understand expanded polystyrene panels,
              core properties, fire safety, and installation procedures.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "▼" : "▶"}
                    </span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqBody}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.faqImgOuter}>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/epspanel10.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/cateps.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your EPS panels Solution?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized EPS panel solutions tailored to your site needs.
          </p>
          <button
            className={styles.btnSecondary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact US &nbsp;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpsPanels;
