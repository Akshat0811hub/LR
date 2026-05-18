import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfLuxuryLounges.module.css";

const LgsfLuxuryLounges = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What makes LGSF luxury lounges special?",
      a: "LGSF luxury lounges offer supreme architectural freedom, premium durability, fast construction, and excellent insulation compared to concrete structures.",
    },
    {
      id: 1,
      q: "Can they be installed on existing rooftops?",
      a: "Yes, because the light-gauge steel framing is extremely lightweight, it adds minimal load to the existing building structure, making it completely safe.",
    },
    {
      id: 2,
      q: "Is the steel framing rust-proof?",
      a: "Yes, we use hot-dip galvanized steel sections that are completely immune to rust, moisture decay, and termite attacks.",
    },
    {
      id: 3,
      q: "What finishes are available for the lounge?",
      a: "You can choose from premium modern facades including glass curtain walls, composite paneling (ACP), wooden cladding, and modern textured coatings.",
    },
    {
      id: 4,
      q: "How long does construction take?",
      a: "Off-site prefabrication and on-site assembly can be completed in just 4 to 6 weeks, depending on the complexity of the design.",
    },
  ];

  const strengthCards = [
    {
      title: "Lightweight Structural Framing",
      desc: "High-strength galvanized steel structure provides incredible strength with very minimal load on existing buildings.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Premium Aesthetic Finishes",
      desc: "High-end exterior ACP cladding, wood finish options, and customized lighting create a spectacular modern appearance.",
      img: "/Images/life2.png",
    },
    {
      title: "Acoustic & Thermal Comfort",
      desc: "High-density rockwool and sandwich insulation core panels reduce noise transfer and maintain optimal interior temperatures.",
      img: "/Images/life3.png",
    },
    {
      title: "Extreme Weather Resistance",
      desc: "100% leak-proof roofing systems, water-tight wall sealants, and wind-tunnel certified steel joints ensure ultimate weather protection.",
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
            LGSF LUXURY <br />
            LOUNGES
          </h1>
          <p className={styles.subtitle}>
            Experience the ultimate in luxury, design, and structural safety with LGSF
            luxury lounges utilizing advanced steel framing, high-performance acoustic isolation,
            and premium customized layouts.
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

      {/* ── SECTION 2: INTRODUCTION TO LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Introduction to LGSF <br />
              <span>Luxury Lounges</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              LGSF luxury lounges offer an unparalleled combination of lightweight, highly
              durable pre-engineered light-gauge steel frameworks and premium customized finishes.
              They deliver outstanding architectural versatility, modern glass walls, custom
              warm lighting, and complete thermal comfort.
            </p>
            <p>
              Our steel frame structures are engineered to handle high winds, heavy rain, and
              seismic activity with absolute safety, while providing complete fire-retardant
              properties and luxury soundproofing so you can enjoy your leisure spaces in total peace.
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

          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="LGSF Luxury Lounge"
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
                  alt="Modern interior penthouse lounge"
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

      {/* ── SECTION 3: WHERE YOU CAN USE LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
                  alt="Where you can use LGSF Luxury Lounges"
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
                  alt="Luxury hotel rooftop lounge"
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
              Where You Can Use <br />
              <span>LGSF Luxury Lounges</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF luxury lounges can be customized to match any architectural design or space.
              Some popular applications include:
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>VIP Lounges &amp; Bars</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Hotel Terraces &amp; Recreation Areas</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Modern Penthouse Additions</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Private Clubhouse Lounges</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Executive Office Cabins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BUILD THE FUTURE OF LUXURY SPACES ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          LUXURY
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Build the Future <br />
              <strong>of Luxury Spaces</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              L&amp;R Green India Pvt Ltd is at the forefront of sustainable prefabrication. Our LGSF luxury
              lounges combine lightweight structural engineering with high-density rockwool or glasswool core
              panels and modern steel facades, delivering a premium product with rapid installation.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/station.png"
              alt="Luxury LGSF 3D Render"
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

      {/* ── SECTION 5: LUXURY MEETS ENGINEERING ── */}
      <section className={styles.splitSec} style={{ padding: "100px 8% 120px 8%" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                Luxury Meets <br />
                <span>Engineering</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              We bring together beautiful aesthetics and advanced structural engineering for spaces that inspire.
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

      {/* ── SECTION 6: WHY CHOOSE LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose LGSF <br />
              <span>Luxury Lounges</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              Our LGSF lounges are customized, durable, and highly efficient. The light-gauge steel frame allows
              for complete design freedom while ensuring high structural stability and resistance to fires,
              earthquakes, and weather fluctuations.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              We manage the entire project from design planning, structural drawings, prefabrication, to precise
              on-site construction, ensuring a complete turnkey experience for our premium clients.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Why Choose L&R LGSF"
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
                  alt="Premium Louvered terrace lounge"
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
          <h2>Ready for Your LGSF Luxury Lounges?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized LGSF luxury lounge solutions tailored to your site needs.
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

export default LgsfLuxuryLounges;
