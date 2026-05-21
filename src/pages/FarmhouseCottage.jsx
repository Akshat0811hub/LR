import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/FarmhouseCottage.module.css";

const FarmhouseCottage = () => {
  const [openFaq, setOpenFaq] = useState(1); // Second item open by default (matches mockup!)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuralFeatures = [
    {
      title: "Engineered Steel Framework",
      desc: "Built with high-strength galvanized steel, the framework ensures strong load capacity, corrosion resistance, and long-lasting stability in all conditions.",
      img: "/Images/farmtype1.jpg",
    },
    {
      title: "Insulated Wall & Roof Panels",
      desc: "PUF insulated panels for walls and roofing ensure thermal balance, reduce heat transfer, and maintain comfortable indoor temperatures all year.",
      img: "/Images/farmtype2.jpg",
    },
    {
      title: "Roofing Systems",
      desc: "We offer roofing solutions like insulated metal sheets, shingles, and custom designs, ensuring durability, weather resistance, and aesthetic appeal.",
      img: "/Images/farmtype3.jpg",
    },
    {
      title: "Flooring Solutions",
      desc: "Flexible flooring options are available based on usage and design preference, ensuring durability, easy maintenance, and elegant interior finish.",
      img: "/Images/farmtype4.jpg",
    },
  ];

  const applicationsList = [
    "Farm houses",
    "Resort accommodations",
    "Weekend homes",
    "Eco-tourism projects",
    "Staff housing",
    "Guest houses",
    "Rural development housing",
    "Holiday villas",
  ];

  const advantagesList = [
    "Rapid construction (weeks instead of months)",
    "Energy-efficient insulation",
    "Cost-effective compared to RCC buildings",
    "Fully customizable layouts",
    "Earthquake-resistant structure",
    "Eco-friendly construction approach",
  ];

  const faqs = [
    {
      id: 0,
      q: "What are prefabricated cottages and farm houses?",
      a: "A prefab farmhouse or cottage is a factory-built modular structure using LGSF or PUF panels, erected on-site rapidly without traditional brick-and-mortar construction.",
    },
    {
      id: 1,
      q: "How long does it take to build a prefab cottage?",
      a: "Most prefabricated cottages can be completed within a few weeks, depending on size and design.",
    },
    {
      id: 2,
      q: "Are prefab farm houses durable?",
      a: "Yes, built with high-strength steel framing and insulated panels, they are highly durable and resistant to earthquakes, wind, and water.",
    },
    {
      id: 3,
      q: "Can the design be customized?",
      a: "Absolutely. We offer complete layout, interior, and exterior design customization options to meet your specific lifestyle needs.",
    },
    {
      id: 4,
      q: "Are prefabricated houses energy efficient?",
      a: "Yes, the PUF panels provide superior thermal insulation, reducing heating and cooling costs significantly.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── SECTION 1: HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: `url("/Images/farm1.jpg")`,
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabelText}>
            L&amp;R Green India Pvt Ltd
          </span>
          <h1 className={styles.mainTitle}>
            MODERN PREFAB <br />
            <span>FARMHOUSES &amp; COTTAGES</span>
          </h1>
          <p className={styles.subtitle}>
            We build modern LGSF farmhouses that deliver fast construction, high
            durability, and superior comfort—ideal for weekend retreats,
            agricultural homes, and luxury countryside living.
          </p>
          <button className={styles.btnPrimary}>
            Conatct us &nbsp;
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

      {/* ── SECTION 2: INTRODUCTION TO PREFABRICATED COTTAGES ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          {/* TOP: Header Title */}
          <div className={styles.sectionHeaderRowFull}>
            <h2 className={styles.secTitle}>
              Prefabricated Cottages <br />
              <span className={styles.accentText}>&amp; Farm Houses</span>
            </h2>
            <div className={styles.divider} />
          </div>

          {/* BOTTOM: Two Columns */}
          <div className={styles.twoColRow} style={{ marginTop: "20px" }}>
            {/* LEFT: Text & content */}
            <div className={styles.textCol}>
              <p className={styles.highlightPara}>
                At L&amp;R Enterprises, we specialize in designing and
                manufacturing high-quality prefabricated cottages and farm
                houses that blend modern aesthetics with strong structural
                durability and advanced rapid construction techniques. Our
                modular living solutions are crafted to deliver maximum comfort,
                practical functionality, and refined architectural elegance
                while significantly reducing overall construction time and
                project costs.
              </p>

              <p className={styles.normalPara}>
                With the growing demand for weekend homes, eco-friendly
                retreats, farmhouse developments, and resort-style
                accommodations, prefabricated cottages have become a smart and
                efficient alternative to conventional construction methods. Our
                solutions provide excellent thermal insulation, flexible design
                options, and long-lasting performance, making them suitable for
                both personal living spaces and commercial hospitality projects.
              </p>

              <button className={styles.btnPill}>
                Get Contact &nbsp;
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
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </div>

            {/* RIGHT: Image with offset block */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/farm2.png"
                  alt="Prefabricated Cottages &amp; Farm Houses"
                  className={styles.decorImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: STRUCTURAL FEATURES OF PREFAB FARMHOUSE ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.secTitle}>
                Structural Features of <br />
                <span className={styles.accentText}>
                  Prefab farmhouse &amp; Cottage
                </span>
              </h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.headerRight}>
              <p className={styles.sectionDescText}>
                Our prefabricated cottages and farm houses use high-quality
                materials and modern systems to ensure strength, durability,
                comfort, and energy efficiency with a premium finish.
              </p>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {structuralFeatures.map((card, idx) => (
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

      {/* ── SECTION 4: APPLICATIONS OF PREFABRICATED COTTAGES ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          {/* TOP: Header Title */}
          <div className={styles.sectionHeaderRowFull}>
            <h2 className={styles.secTitle}>
              Applications of Prefabricated <br />
              <span className={styles.accentText}>
                Cottages &amp; Farm Houses
              </span>
            </h2>
            <div className={styles.divider} />
          </div>

          {/* BOTTOM: Two Columns */}
          <div className={styles.twoColRow} style={{ marginTop: "20px" }}>
            {/* LEFT: Image with offset block */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/farm3.jpg"
                  alt="Applications of Prefabricated Cottages &amp; Farm Houses"
                  className={styles.decorImage}
                />
              </div>
            </div>

            {/* RIGHT: Text & bullets */}
            <div className={styles.textCol}>
              <p className={styles.normalPara}>
                Prefabricated cottages and farm houses are versatile modular
                structures designed for multiple residential and commercial
                uses. They provide quick, efficient, and comfortable living
                solutions across different environments.
              </p>

              <div className={styles.bulletListGrid}>
                {applicationsList.map((app, i) => (
                  <div key={i} className={styles.bulletItem}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="12" cy="12" r="10" fill="#2a406c" />
                      <path
                        d="M8 12.5L10.5 15L16 9"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={styles.bulletLabel}>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ENERGY EFFICIENCY & SUSTAINABILITY BANNER ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          L &amp; R LGSF MODERN LGSF FARMHOUSES &amp; COTTAGES
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Energy Efficiency, Sustainability <br />
              <strong>&amp; Customization Options</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              Our cottages are designed for sustainability and flexibility,
              featuring PUF insulation, recyclable steel structures, minimal
              waste construction, and solar-ready roofing systems, along with
              fully customizable layouts, roofing styles, interior designs, and
              utility integrations to match every lifestyle need. This ensures
              eco-friendly performance with complete design freedom for every
              project.
            </p>
          </div>
          <div className={styles.bannerImgCol}>
            <img
              src="/Images/farmblue.png"
              alt="Energy Efficiency, Sustainability &amp; Customization"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ADVANTAGES OF PREFABRICATED FARM HOUSES ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          {/* TOP: Header Title */}
          <div className={styles.sectionHeaderRowFull}>
            <h2 className={styles.secTitle}>
              Advantages of Prefabricated <br />
              <span className={styles.accentText}>Farm Houses</span>
            </h2>
            <div className={styles.divider} />
          </div>

          {/* BOTTOM: Two Columns */}
          <div className={styles.twoColRow} style={{ marginTop: "20px" }}>
            {/* LEFT: Text & Bullets */}
            <div className={styles.textCol}>
              <p className={styles.normalPara}>
                Prefabricated farm houses provide fast, efficient, and
                sustainable living solutions with strong structural performance
                and modern design flexibility.
              </p>

              <div
                className={styles.bulletListGrid}
                style={{ marginTop: "20px" }}
              >
                {advantagesList.map((item, idx) => (
                  <div className={styles.bulletItem} key={idx}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="12" cy="12" r="10" fill="#2a406c" />
                      <path
                        d="M8 12.5L10.5 15L16 9"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={styles.bulletLabel}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image with offset block */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/farm4.jpg"
                  alt="Advantages of Prefabricated Farm Houses"
                  className={styles.decorImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CHOOSE PREFAB FARM HOUSES & COTTAGES ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          {/* TOP: Header Title */}
          <div className={styles.sectionHeaderRowFull}>
            <h2 className={styles.secTitle}>
              Why Choose Prefab <br />
              <span className={styles.accentText}>
                Farm Houses &amp; Cottages
              </span>
            </h2>
            <div className={styles.divider} />
          </div>

          {/* BOTTOM: Two Columns */}
          <div className={styles.twoColRow} style={{ marginTop: "20px" }}>
            {/* LEFT: Image with offset block */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/farm5.jpg"
                  alt="Why Choose Prefab Farm Houses &amp; Cottages"
                  className={styles.decorImage}
                />
              </div>
            </div>

            {/* RIGHT: Paragraph texts */}
            <div className={styles.textCol}>
              <p className={styles.highlightPara}>
                At L&amp;R Enterprises, we bring strong expertise in modular and
                PEB construction, ensuring every project is executed with
                precision, durability, and modern engineering standards. We use
                only high-quality materials and follow strict engineering
                practices to deliver reliable and long-lasting structures.
              </p>

              <p className={styles.normalPara}>
                We also provide complete end-to-end turnkey solutions with a
                strong commitment to on-time delivery and pan-India project
                execution. Every project we complete reflects architectural
                excellence, quality craftsmanship, and customer satisfaction.
              </p>
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
                <span className={styles.accentText}>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Prefabricated cottages and farm houses are modern, fast, and
              efficient construction solutions designed for comfort, durability,
              and flexibility. Below are some frequently asked questions to help
              you understand them better.
            </p>
          </div>
          <div className={styles.faqContent}>
            {/* LEFT: FAQ Accordion list */}
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

            {/* RIGHT: Rounded image placeholder */}
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/farm6.png"
                alt="FAQ Farmhouse &amp; Cottage"
                className={styles.faqImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url("/Images/farmcat.jpg")`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Farm Houses &amp; CottagesSolutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated
            <br /> PrefabFarm Houses &amp; Cottages solutions tailored to your
            site needs.
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

export default FarmhouseCottage;
