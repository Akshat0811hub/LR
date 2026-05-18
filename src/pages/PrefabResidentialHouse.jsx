import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabResidentialHouse.module.css";

const PrefabResidentialHouse = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is LGSF prefab technology?",
      a: "LGSF (Light Gauge Steel Framing) is a modern construction method using high-strength galvanized steel sections to build incredibly strong, lightweight, and fast multi-story buildings.",
    },
    {
      id: 1,
      q: "Is G+1 or G+2 construction safe with LGSF?",
      a: "Yes, LGSF is fully certified and highly recommended for multi-story residential buildings up to G+3, providing unmatched seismic safety and structural integrity.",
    },
    {
      id: 2,
      q: "How long does it take to build a G+1 LGSF house?",
      a: "On average, the structural framing and finishing of a G+1 LGSF villa can be completed in 6 to 8 weeks, compared to 8 to 10 months for concrete houses.",
    },
    {
      id: 3,
      q: "What is the lifespan of an LGSF house?",
      a: "LGSF structures use highly corrosion-resistant galvanized steel, ensuring a lifespan of over 50 years with very minimal maintenance.",
    },
    {
      id: 4,
      q: "Are LGSF houses heat and soundproof?",
      a: "Yes, the walls are filled with high-density rockwool or glasswool insulation, providing superior thermal and acoustic performance compared to traditional brick walls.",
    },
  ];

  const strengthCards = [
    {
      title: "Fast Construction",
      desc: "Prefabricated off-site components enable precise, extremely fast assembly on-site within a few weeks.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Seismic & Wind Safety",
      desc: "Engineered high-grade steel framing provides excellent structural flexibility and high resistance to earthquakes.",
      img: "/Images/life2.png",
    },
    {
      title: "Excellent Insulation",
      desc: "High-density thermal and acoustic insulation keeps your home comfortable in both extreme summers and winters.",
      img: "/Images/life3.png",
    },
    {
      title: "Termite & Decay Proof",
      desc: "LGSF materials are 100% immune to termites, moisture decay, rusting, and mold growth, ensuring maximum lifespan.",
      img: "/Images/life4.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/flat.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R GREEN INDIA PVT LTD</span>
          <h1 className={styles.mainTitle}>
            LGSF PREFAB RESIDENTIAL <br />
            HOUSES (G+1 / G+2)
          </h1>
          <p className={styles.subtitle}>
            L&amp;R specializes in delivering high-quality, durable, and seismically
            safe multi-story LGSF residential houses (G+1 / G+2) utilizing advanced
            steel engineering and premium panel insulation for modern urban living.
          </p>
          <button className={styles.btnPrimary}>
            Contact us &nbsp;
            <svg
              width="18"
              height="18"
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

      {/* ── SECTION 2: PREFAB RESIDENTIAL HOUSES (G+1 / G+2) ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Modern LGSF Villa Architecture"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image */}
              <div className={styles.smallImg}>
                <img
                  src="/Images/topflat2.jpg"
                  alt="Multi-story residential design"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Prefab Residential <br />
              <span>Houses (G+1 / G+2)</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              Light Gauge Steel Frame (LGSF) technology represents a paradigm shift in
              modern residential construction. It provides lightweight, extremely strong,
              and highly durable multi-story structures built to withstand high seismic
              activity, heavy wind loads, and extreme weather changes.
            </p>
            <p>
              Our prefab residential houses offer elegant, flexible architectural designs
              with superior heat and sound insulation, rapid construction, and high-quality
              customized finishes, making them the ultimate choice for modern villas, residential
              societies, and farmhouses.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>
              Read more &nbsp;
              <svg
                width="18"
                height="18"
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
        </div>
      </section>

      {/* ── SECTION 3: APPLICATIONS OF PREFAB RESIDENTIAL HOUSES ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Applications of Prefab <br />
              <span>Residential Houses (G+1 / G+2)</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Our multi-story LGSF homes support beautiful designs and highly customized layouts,
              making them ideal for modern architectural demands.
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Premium Modern Villas</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Multi-Story Residential Houses</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Farmhouses &amp; Holiday Homes</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Society Extension Floors</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Seismic Zone Safe Housing</span>
              </div>
            </div>
          </div>

          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/safeurban.png"
              alt="G+1 LGSF Villa Structure"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: G+1 / G+2 LGSF HOMES - FLEXIBLE DESIGNS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          RESIDENTIAL
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              G+1 / G+2 LGSF <br />
              <strong>Homes - Flexible Designs</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              L&amp;R Green India Pvt Ltd offers completely customizable multi-story residential solutions
              utilizing high-grade light-gauge steel frameworks and premium insulated panels. From modern
              layouts to luxury facades, we turn your dream home into reality in a fraction of the time
              compared to traditional brick-and-mortar construction.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/station.png"
              alt="Modern LGSF House Isometric Render"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "14px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: KEY FEATURES OF LGSF PREFAB RESIDENTIAL HOUSES ── */}
      <section className={styles.splitSec} style={{ padding: "100px 8% 120px 8%" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of LGSF Prefab <br />
                <span>Residential Houses (G+1 / G+2)</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              Enjoy peace of mind with our heavy-duty LGSF frameworks, premium thermal cores, 
              and certified wind and earthquake resistance engineering.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {strengthCards.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}>
                  <img
                    className={styles.cardImage}
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE L&R & OUR CONSTRUCTION PROCESS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose L&amp;R &amp; <br />
              <span>Our Construction Process</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              At L&amp;R Green India Pvt Ltd, we manage the entire modular building process from custom layout design,
              structural engineering checks, off-site prefabrication, to precise on-site construction, ensuring
              a completely hassle-free, turnkey experience.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              Our steel frame structures use the highest quality galvanized steel and certified insulation systems,
              ensuring premium aesthetics, long-term safety, and sustainable green construction.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
                  alt="Why Choose L&R LGSF Prefab"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image */}
              <div className={styles.smallImg}>
                <img
                  src="/Images/unit2.jpg"
                  alt="Galvanized steel framework detail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc} style={{ fontSize: "15px", lineHeight: "1.7" }}>
              Delivered using heavy-duty steel framing and lightweight structures, 
              they can withstand winds and heavy rain while offering 
              excellent soundproofing and high temperature resistance.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter} style={{ width: "100%", height: "480px", overflow: "hidden", borderRadius: "12px" }}>
              <img
                src="/Images/freqflat.jpg"
                alt="Frequently Asked Questions"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(faq.id === openFaq ? -1 : faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "↓" : "↑"}
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
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Images/ctaflat.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Residential Houses (G+1 / G+2)?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized multi-story LGSF residential solutions tailored to your site needs.
          </p>
          <button className={styles.btnSecondary}>
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

export default PrefabResidentialHouse;
