import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopServantRooms.module.css";

const RooftopServantRooms = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a rooftop servant room?",
      a: "It is a highly durable, lightweight room built on the roof of an existing building to house domestic help or security staff.",
    },
    {
      id: 1,
      q: "Will it add significant weight to my building?",
      a: "No, we use high-grade pre-engineered light-gauge steel framing (LGSF) and lightweight insulated panels, keeping the structural load extremely minimal.",
    },
    {
      id: 2,
      q: "Is an attached bathroom possible?",
      a: "Yes, all our servant room layouts can be configured with attached modern washrooms and toilets.",
    },
    {
      id: 3,
      q: "Is it weather-proof?",
      a: "Yes, the structures are completely water-tight, leak-resistant, and engineered to withstand extreme winds and heavy rain.",
    },
    {
      id: 4,
      q: "How long does construction take?",
      a: "The off-site prefabrication and on-site assembly can be completed in just 2 to 3 weeks.",
    },
  ];

  const strengthCards = [
    {
      title: "Compact Bedroom Space",
      desc: "Spacious enough to hold a single bed, a wardrobe, and essential utilities comfortably.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Attached Pantry",
      desc: "Optional layout with a small counter space and sink for tea/coffee making convenience.",
      img: "/Images/life2.png",
    },
    {
      title: "Modern Washroom Design",
      desc: "Fully integrated attached washroom with standard modern sanitary ware and wall finishes.",
      img: "/Images/life3.png",
    },
    {
      title: "Well-Ventilated Interior",
      desc: "Dual-pane sliding windows and exhaust provisions ensure fresh airflow and adequate light.",
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
            MODERN ROOFTOP <br />
            SERVANT ROOMS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R specializes in delivering high-quality, durable, and structurally
            insulated modern rooftop servant rooms designed to blend with existing residential
            spaces, providing complete privacy, comfort, and sustainability.
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

      {/* ── SECTION 2: SMART LIVING SPACE FOR DOMESTIC STAFF ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Modern Servant Room Structure"
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
                  alt="Pre-engineered staff cabin"
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
              Smart Living Space <br />
              <span>for Domestic Staff</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              Providing proper accommodation for household staff is essential for security,
              convenience, and home organization. Rooftop servant rooms built using lightweight
              steel framework and premium insulated panels offer a highly cost-effective and modern
              structural addition without affecting the existing building foundations.
            </p>
            <p>
              Our prefabricated servant rooms are designed with standard features such as secure
              structural frameworks, insulated walls and roofs, attached bathroom facilities,
              electricity wiring, and modern sliding windows for ventilation and natural light.
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

      {/* ── SECTION 3: WHAT'S INSIDE A ROOFTOP SERVANT ROOM ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                What's Inside a <br />
                <span>Rooftop Servant Room</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              Our servant rooms are fully equipped with all functional layouts and high-end insulation systems 
              for modern, comfortable living.
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

      {/* ── SECTION 4: FULLY CUSTOMIZABLE ROOFTOP SERVANT ROOM SOLUTIONS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          SERVANT ROOM
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Fully Customizable <br />
              <strong>Servant Room Solutions</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              Every rooftop is unique, and L&amp;R delivers tailor-made layouts that match the available
              space perfectly. Our pre-engineered lightweight steel framing and insulated sandwich panels
              allow for rapid construction while ensuring optimal thermal and sound insulation.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/station.png"
              alt="3D Isometric Cabin Render"
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

      {/* ── SECTION 5: ROOFTOP SERVANT ROOM FEATURES ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Rooftop <br />
              <span>Servant Rooms</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Engineered with advanced prefabrication systems, our servant rooms provide perfect utility,
              privacy, and durability.
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Compact modular designs</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Attached washroom layout</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Premium panel insulation</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Low thermal conductivity</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Fast structural construction</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Weatherproof roof system</span>
              </div>
            </div>
          </div>

          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/safeurban.png"
              alt="Safe Urban Servant Room Model"
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

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP SERVANT ROOMS? ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose L&amp;R Rooftop <br />
              <span>Servant Rooms?</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              L&amp;R Green India Pvt Ltd is dedicated to delivering premium modular structures using advanced
              engineering and high-quality raw materials. Our rooftop servant rooms are highly durable,
              fire-retardant, and weather-resistant, ensuring complete safety and comfort.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              We manage the entire project from layout planning to structural design and complete on-site
              execution, ensuring minimal disruption to your daily life during installation.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
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
                  src="/Images/unit2.jpg"
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
          <h2>Ready for Your Prefab Servant Room Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop servant room solutions tailored to your site needs.
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

export default RooftopServantRooms;
