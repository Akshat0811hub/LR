import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopGuestRooms.module.css";

const RooftopGuestRooms = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a rooftop guest room?",
      a: "It is a luxury, pre-engineered room constructed on your existing rooftop using lightweight steel framing and high-quality insulation panels.",
    },
    {
      id: 1,
      q: "Will building a rooftop room damage my house structure?",
      a: "No, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does the installation take?",
      a: "A standard rooftop guest room can be fully assembled and finished on-site in a few weeks.",
    },
    {
      id: 3,
      q: "Are rooftop guest rooms heat resistant?",
      a: "Yes, we use advanced PUF/EPS insulated panels for the walls and ceiling, providing excellent thermal insulation all year round.",
    },
    {
      id: 4,
      q: "Can I add an attached bathroom to the room?",
      a: "Yes, our designs support fully customized layouts, including premium attached bathrooms and pantry sections.",
    },
  ];

  const strengthCards = [
    {
      title: "Guest bedroom",
      desc: "A modern, premium bedroom designed to provide your guests with a cozy, comfortable stay.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Private Rooftop Deck",
      desc: "Enjoy sunset views and quiet evenings on your beautiful, customized rooftop lounging deck.",
      img: "/Images/life2.png",
    },
    {
      title: "Modern Light Fixtures",
      desc: "Elegant indoor and outdoor warm lighting systems to enhance the luxury feel of your guest rooms.",
      img: "/Images/life3.png",
    },
    {
      title: "Balcony & Terrace",
      desc: "Attached glass railing balconies or open terraces integrated perfectly into your guest suite.",
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
            ROOFTOP GUEST <br />
            ROOMS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R specializes in delivering safe, durable, and high-performance
            rooftop guest room structures using advanced steel engineering and
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

      {/* ── SECTION 2: ROOF TOP GUEST ROOM ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Roof Top <br />
              <span>Guest Room</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              L&amp;R Green India Pvt Ltd offers customized, modern, and
              aesthetically appealing prefab rooftop guest room solutions. Designed
              using high-grade structural steel framework and insulated panels, our
              structures deliver superior structural stability, safety, and durability,
              making them an ideal extension for modern homes and hotels.
            </p>
            <p>
              Our rooftop structures are perfect for guest rooms, offices, recreation
              rooms, and more. With standard features such as waterproof roofing, secure
              panel insulation, glass doors and windows, electrical wiring, and high-end
              soundproofing, we build beautiful extensions.
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
                  alt="Modern Rooftop Guest Room Design"
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
                  alt="Luxury Penthouse Guest Room"
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

      {/* ── SECTION 3: MAXIMIZE YOUR ROOFTOP SPACE ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
                  alt="Maximize Your Rooftop Space"
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
                  alt="Modular Guest Room Deck"
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
              Maximize Your <br />
              <span>Rooftop Space</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Our prefabricated guest rooms are highly versatile and customized. Let our
              expert team help you design the perfect rooftop addition matching your
              aesthetic and functional needs.
            </p>

            <div className={styles.bulletList}>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Elegant guest bedrooms</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Mini bar / lounging deck</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Attached bathrooms</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Glass panel walls</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Weatherproof terraces</span>
              </div>
              <div className={styles.bulletItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.bulletLabel}>Modern aesthetics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SUSTAINABLE DESIGN & CUSTOMIZATION ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          GUEST ROOMS
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Sustainable Design <br />
              <strong>&amp; Customization</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>
              L&amp;R Green India Pvt Ltd delivers highly durable, modular rooftop guest room structures.
              Engineered with lightweight steel frames, insulated sandwich panels, and modern facade elements,
              they cause very minimal load on your existing structure while offering a gorgeous, premium modern look.
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

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP GUEST ROOM STRUCTURES? ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "70px", alignItems: "center" }}>
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose Rooftop <br />
              <span>Guest Room Structures?</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "22px", marginTop: "40px" }}>
              Prefabricated guest rooms are a quick, cost-effective way to expand space with minimal load on
              existing buildings. They are energy-efficient, flexible, modern in design, and cause very minimal
              disruption to your daily life during installation.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
              With a strong commitment to quality and precision, we provide complete turnkey solutions from design to
              execution. Our expert team ensures fast project delivery, safe installation over existing buildings, and the
              use of high-quality materials and insulation systems for superior results.
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
          <h2>Ready for Your Guest Rooms Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop guest room solutions tailored to your site needs.
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

export default RooftopGuestRooms;
