import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopPartyLounge.module.css";

const RooftopPartyLounge = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a prefabricated rooftop party lounge?",
      a: "It is a modern, modular entertainment space constructed on the roof of an existing building using lightweight steel frames and insulated panels.",
    },
    {
      id: 1,
      q: "Is it safe to construct on an existing building?",
      a: "Yes, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does construction take?",
      a: "Our modular prefabrication system allows us to complete the on-site assembly within a few weeks.",
    },
    {
      id: 3,
      q: "Can the lounge be customized?",
      a: "Yes, you can fully customize the layout, lounge seating, bar counters, lighting, and glass facades.",
    },
    {
      id: 4,
      q: "What are the acoustic benefits of the lounge?",
      a: "Our high-density insulation panels provide excellent soundproofing, minimizing sound transmission to the outside.",
    },
  ];

  const strengthCards = [
    {
      title: "Aesthetics & Lighting",
      desc: "Modern structural designs with customized warm lights to create a premium party look.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Open seating arrangements",
      desc: "Sleek wooden decks and outdoor lounging spaces that offer a panoramic view of the skyline.",
      img: "/Images/life2.png",
    },
    {
      title: "Modular sound system",
      desc: "Soundproof walls reduce noise outside, keeping your music loud and clear within the lounge.",
      img: "/Images/life3.png",
    },
    {
      title: "Glass railing structures",
      desc: "Toughened glass railings ensure maximum safety while maintaining a sleek, modern architectural aesthetic.",
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
          <span className={styles.topLabel}>L&amp;R ROOFTOP PVT LTD</span>
          <h1 className={styles.mainTitle}>
            ROOFTOP PARTY LOUNGE <br />
            ELEVATE YOUR CELEBRATIONS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R specializes in delivering elegant, durable, and lightweight
            rooftop party lounge structures using advanced steel engineering and
            high-performance panel insulation for high-quality, weather-resistant,
            and sustainable outdoor living.
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

      {/* ── SECTION 2: MODERN ROOFTOP PARTY LIVING CONCEPT ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Modern Rooftop Party Living Concept"
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
                  alt="Elegant Rooftop Deck View"
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
              Modern Rooftop <br />
              <span>Party Living Concept</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              Our prefabricated rooftop party lounges are highly designed to be
              spaces for modern, dynamic, and aesthetic celebrations. They provide
              a luxury, custom feel with excellent insulation, sturdy steel
              foundations, glass window views, electric fittings, and absolute
              soundproofing.
            </p>
            <p>
              We use high-performance polyurethane panels (PUF) for the construction,
              engineering them with a robust frame that keeps the party alive in any weather.
              This panel structure is perfect for creating lightweight yet highly insulated
              spaces, preventing water leaks, dampness, and offering high-end acoustics
              that prevent sound transfer so your party won't disturb the neighborhood.
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

      {/* ── SECTION 3: SMART & SAFE ROOFTOP ENGINEERING ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Smart &amp; Safe <br />
              <span>Rooftop Engineering</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Built with advanced prefabrication technology, our rooftop lounges ensure
              durability and safety while maintaining a dynamic aesthetic.
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Lightweight Steel Framework</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>High Soundproof Insulation (up to 40 dB)</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Rapid On-Site Assembly (in weeks)</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>100% Leak &amp; Weather Resistant</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Customizable Architectural Finishes</span>
              </div>
            </div>
          </div>

          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/safeurban.png"
              alt="Safe Urban Rooftop Design Model"
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

      {/* ── SECTION 4: URBAN & COMMERCIAL ROOFTOP LOUNGE DESIGN ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          PARTY LOUNGE
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Urban &amp; Commercial <br />
              <strong>Rooftop Lounge Design</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              Fully planned layout and structural design that maximizes your rooftop space
              for commercial or private gatherings. Engineered with lightweight steel frames,
              insulated panels, and modern glass facades for a gorgeous and durable rooftop extension.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/station.png"
              alt="3D Glowing Rooftop Lounge Render"
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

      {/* ── SECTION 5: ENGINEERED FOR STRENGTH & SAFETY ── */}
      <section className={styles.splitSec} style={{ padding: "100px 8% 120px 8%" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                Engineered for <br />
                <span>Strength &amp; Safety</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              Enjoy peace of mind with our heavy-duty steel structures, smart lighting, and 
              superior weather-proofing for unforgettable moments.
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

      {/* ── SECTION 6: WHY CHOOSE L&R ROOFTOP PARTY LOUNGE USES ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose L&amp;R Rooftop <br />
              <span>Party Lounge Uses</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              At L&amp;R Green India Pvt Ltd, we specialize in delivering safe, durable, and 
              high-performance rooftop structures using advanced steel engineering and 
              prefabrication technology. Our focus is on creating reliable solutions that 
              ensure strength, efficiency, and long-term value for modern urban living spaces.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              With a strong commitment to quality and precision, we provide complete 
              turnkey solutions from design to execution. Our expert team ensures fast 
              project delivery, safe installation over existing buildings, and the use of 
              high-quality materials and insulation systems for superior results.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Why Choose L&R Green Prefab Rooftop Rooms"
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
                  alt="Premium Rooftop Louvered Terrace"
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
          <h2>Ready for Your Prefab Party Lounge Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop party lounge solutions tailored to your site needs.
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

export default RooftopPartyLounge;
