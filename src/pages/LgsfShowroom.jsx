import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfShowroom.module.css";

const LgsfShowroom = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF showroom?",
      a: "It is a modern commercial showroom building constructed using light-gauge galvanized steel frame sections and premium insulated panels.",
    },
    {
      id: 1,
      q: "Can we have large glass display windows in LGSF showrooms?",
      a: "Yes, our engineering allows for seamless integration of heavy structural glazing, large glass storefronts, and elegant curtain walls.",
    },
    {
      id: 2,
      q: "How fast can an LGSF showroom be constructed?",
      a: "Depending on the total area, LGSF showrooms can be fully erected and finished on-site within 6 to 10 weeks, saving months compared to concrete.",
    },
    {
      id: 3,
      q: "What is the height limit for LGSF commercial showrooms?",
      a: "We can easily build LGSF showrooms with double-height ceilings or multi-story structures up to 3 floors with proper structural engineering.",
    },
    {
      id: 4,
      q: "Are LGSF showrooms energy efficient?",
      a: "Yes, the advanced insulated core panels provide exceptional thermal resistance, reducing HVAC energy costs by up to 35%.",
    },
  ];

  const strengthCards = [
    {
      title: "Large Span Layouts",
      desc: "High-strength LGSF framing allows for wide column-free spacing to maximize your display and showroom layouts.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Grand Glass Facades",
      desc: "Seamlessly integrate large structural glazing and curtain walls for a stunning, high-end commercial look.",
      img: "/Images/life2.png",
    },
    {
      title: "Excellent Acoustics & Insulation",
      desc: "High-density thermal core sandwich panels reduce heating and cooling costs and block external street noise.",
      img: "/Images/life3.png",
    },
    {
      title: "Seismic & Wind Safety",
      desc: "Structural steel joints are engineered to withstand high wind speeds and high seismic activity with complete safety.",
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
            LGSF SHOWROOM <br />
            SOLUTIONS
          </h1>
          <p className={styles.subtitle}>
            We design and deliver high-performance LGSF showrooms that blend modern steel
            architecture, sound insulation, thermal efficiency, and grand layouts.
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

      {/* ── SECTION 2: LGSF SHOWROOM INTRODUCTION ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Modern LGSF Showroom Structure"
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
                  alt="Glass curtain wall showroom facade"
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
              LGSF Showroom <br />
              <span>Solutions</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              Light Gauge Steel Frame (LGSF) technology provides an ideal solution for modern
              commercial showrooms that require large column-free spans, high ceilings, grand glass
              facades, and swift completion. Our prefabricated structural framework offers unmatched speed.
            </p>
            <p>
              Our prefab showrooms deliver superb aesthetic versatility with high-grade galvanized steel,
              thermal and sound insulation panels, weatherproof roofing, and customizable architectural
              finishes, making them the superior choice for car dealerships, retail outlets, and commercial galleries.
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

      {/* ── SECTION 3: WHERE LGSF SHOWROOMS ARE USED ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Where LGSF <br />
              <span>Showrooms Are Used</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF technology allows for highly customizable structures that fit a variety of high-end
              retail and display requirements:
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Automobile Dealerships</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>High-End Retail Outlets</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Art &amp; Fashion Galleries</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Furniture Showrooms</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Commercial Exhibition Halls</span>
              </div>
            </div>
          </div>

          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/safeurban.png"
              alt="Grand LGSF Showroom Model"
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

      {/* ── SECTION 4: DURABILITY & SUSTAINABILITY OF LGSF SHOWROOMS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          SHOWROOM
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Durability &amp; Sustainability <br />
              <strong>of LGSF Showrooms</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              L&amp;R Green India Pvt Ltd leverages advanced prefabrication systems to deliver high-quality commercial
              showrooms. Combining robust structural steel framing, composite insulated core panels, and elegant
              curtain wall glazing, our showrooms are built to last while being energy-efficient.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/station.png"
              alt="Commercial Showroom 3D Isometric render"
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

      {/* ── SECTION 5: KEY FEATURES OF LGSF SHOWROOMS ── */}
      <section className={styles.splitSec} style={{ padding: "100px 8% 120px 8%" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of <br />
                <span>LGSF Showrooms</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              Our showrooms offer column-free display floor planning, seismic safe structure, and modern curtain glazing.
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

      {/* ── SECTION 6: PRECISION ENGINEERING & WHY CHOOSE L&R ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Precision Engineering <br />
              <span>&amp; Why Choose L&amp;R</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              At L&amp;R Green India Pvt Ltd, we specialize in complete turnkey showroom solutions. From conceptual layout
              design, structural load calculations, off-site steel fabrication, to precise on-site framing and final
              detailing, we manage every step with precision.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              Our certified LGSF components and premium materials ensure top-tier aesthetics, low maintenance, rapid
              completion, and environmentally sustainable construction.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
                  alt="Why Choose L&R LGSF Showrooms"
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
                  alt="Modern showroom commercial glazing"
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
          <h2>Ready for Your LGSF Showroom Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized LGSF showroom solutions tailored to your site needs.
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

export default LgsfShowroom;
