import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PremiumMsContainer.module.css";

const PremiumMsContainer = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const containerSizes = [
    {
      size: "40×10×8.5/40×8×8.5",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dinning Hall Containers",
        "Battery Storage  Containers",
        "Gym Hall Containers",
        "Cafe Containers  Hall Containers",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well  Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Baby Play Area Containers",
        "Toilet Block Containers",
        "Wash Room Block Containers",
        "Class Room  Containers",
        "General Residential Containers",
      ],
      highlight: false,
    },
    {
      size: "20×10×8.5/20×8×8.5",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dinning Hall Containers",
        "Battery Storage  Containers",
        "Gym Hall Containers",
        "Cafe Containers  Hall Containers",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well  Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Baby Play Area Containers",
        "Toilet Block Containers",
        "Wash Room Block Containers",
        "Class Room  Containers",
        "General Residential Containers",
      ],
      highlight: true,
    },
    {
      size: "10×10×8",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dinning Hall Containers",
        "Battery Storage  Containers",
        "Gym Hall Containers",
        "Cafe Containers  Hall Containers",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well  Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Baby Play Area Containers",
        "Toilet Block Containers",
        "Wash Room Block Containers",
        "Class Room  Containers",
        "General Residential Containers",
      ],
      highlight: false,
    },
  ];

  const applications = [
    {
      title: "Staff Office Containers",
      description:
        "Ergonomic and air-conditioned office units built for site management and administrative teams.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dining Hall Containers",
      description:
        "Hygienic and spacious container units designed for organized dining facilities at project and industrial sites.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Gym Hall Containers",
      description:
        "Fully equipped fitness units tailored for workforce wellness at remote project locations.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Toilet Block Containers",
      description:
        "Sanitation-grade container blocks with proper plumbing and ventilation for site hygiene standards.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are Premium Containers used for?",
      a: "They are premium modular solutions designed for corporate site offices, high-end staff housing, dining halls, gyms, and specialized technical control rooms across industrial and commercial projects.",
    },
    {
      id: 1,
      q: "Are Premium Containers durable?",
      a: "Yes, they are built with strong MS-steel and designed to handle harsh industrial and weather conditions. Industrial-grade coatings ensure long-lasting performance.",
    },
    {
      id: 2,
      q: "Can Premium Containers be customized?",
      a: "Absolutely. Interior layouts, electrical points, HVAC systems, flooring, and partition designs can all be tailored to your specific project requirements.",
    },
    {
      id: 3,
      q: "How fast can Premium Containers be installed?",
      a: "Most units can be delivered and installed within 7–15 working days depending on size, customization level, and site location.",
    },
    {
      id: 4,
      q: "Are Premium Containers movable?",
      a: "Yes. Our containers are designed for easy relocation using standard cranes or flatbed trucks, making them ideal for projects that require phased deployment.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            PREMIUM MS <br />
            <span>CONTAINERS</span>
          </h1>
          <p className={styles.heroDesc}>
            Premium MS Containers delivering durable, flexible, and fast-deploy
            modular solutions for industrial, commercial, and site-based
            applications.
          </p>
          <button className={styles.btnHero}>
            Contact us &nbsp;<span>→</span>
          </button>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <h2 className={styles.secTitle}>
          Premium Ms <span>Container</span>
        </h2>
        <div className={styles.introTitleDivider} />
        <div className={styles.introGrid}>
          <div className={styles.introVisuals}>
            <div
              className={styles.imgSub}
              style={{
                backgroundImage: "url('/Images/serv2.jpg')",
              }}
            />
            <div
              className={styles.imgMain}
              style={{
                backgroundImage: "url('/Images/serv1.png')",
              }}
            />
          </div>
          <div className={styles.introContent}>
            <p>
              L&R Premium Series containers are high-quality, durable modular
              structures built with strong mild steel frameworks, designed to
              perform efficiently in demanding industrial and commercial
              environments. These containers are ideal for heavy-duty storage,
              secure site offices, and comfortable accommodation, offering a
              reliable and professional solution for both temporary and
              long-term applications.
            </p>
            <p>
              They are equipped with advanced insulation, corrosion-resistant
              coatings, and well-finished interiors that include electrical
              fittings and customizable layouts. Built for strength, comfort,
              and flexibility, these containers provide a modern, portable
              solution that ensures safety, efficiency, and quick deployment
              across various project sites.
            </p>
            <button className={styles.btnSecondary}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* ── Sizes Grid ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          {/* Split header: title left, description right */}
          <div className={styles.sizesHeader}>
            <div className={styles.sizesHeaderLeft}>
              <h2 className={styles.sizesTitleMain}>
                The Types of Premium <br />
                <span>MS Container Sizes</span>
              </h2>
              <div className={styles.sizesTitleDivider} />
            </div>
            <div className={styles.sizesHeaderRight}>
              <p>
                Every Premium MS container is offered in five core footprints,
                each available in dozens of interior layouts from executive
                offices to dining halls, sanitary blocks, storage and
                accommodation.
              </p>
            </div>
          </div>

          <div className={styles.sizesGrid}>
            {containerSizes.map((item, index) => (
              <div
                key={index}
                className={`${styles.sizeCard} ${
                  item.highlight ? styles.activeCard : ""
                }`}
              >
                {/* Box outline SVG icon */}
                <div className={styles.cardIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.highlight ? "#ffffff" : "#1e3a5f"}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>{item.size}</h3>
                <ul className={styles.featureList}>
                  {item.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className={styles.whySec}>
        <div className={styles.whyGrid}>
          <div className={styles.whyContent}>
            <h2 className={styles.secTitle}>
              Why Choose <br />
              <span>Premium Ms Containers</span>
            </h2>
            <div className={styles.whyDivider} />
            <p>
              Premium Ms Containers are designed for superior quality, strength,
              and modern functionality, making them ideal for high-end
              industrial and commercial applications. Built with robust MS steel
              structure and premium finishes, they ensure durability, safety,
              and comfort even in extreme working conditions.
            </p>
            <p>
              They offer complete flexibility with customizable layouts for
              offices, accommodation, and specialized spaces. With fast
              installation, easy mobility, and long service life, Premium Series
              Containers provide a reliable and efficient solution for demanding
              project requirements.
            </p>
          </div>
          <div className={styles.whyImagesCol}>
            <div
              className={styles.whyImgTop}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80')",
              }}
            />
            <div
              className={styles.whyImgBottom}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Engineering Banner ── */}
      <section className={styles.engineeringBand}>
        <div className={styles.bandWatermark}>L&R PREMIUM CONTAINER</div>
        <div className={styles.bandContainer}>
          <div className={styles.bandText}>
            <h2>
              High Strength Engineering <br />& Premium Ms Container
            </h2>
            <p>
              Built with heavy-duty MS steel and precision fabrication, these
              containers deliver superior strength, stability, and long-lasting
              performance in tough working conditions. They are manufactured
              under strict quality control to ensure durability, safety, and
              reliable use across industrial and commercial applications.
            </p>
          </div>
          <div className={styles.bandImgWrapper}>
            <img src="/Images/serv1.png" alt="Premium MS Container" />
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className={styles.appsSec}>
        <div className={styles.appsInner}>
          <div className={styles.appsHeader}>
            <h2 className={styles.secTitle}>
              Premium Ms Container <br />
              <span>Applications Projects</span>
            </h2>
            <p>
              High-quality MS container solutions designed for efficient,
              durable, and flexible use across industrial and commercial project
              environments.
            </p>
          </div>
          <div className={styles.appsGrid}>
            {applications.map((app, i) => (
              <div key={i} className={styles.appCard}>
                <img src={app.img} alt={app.title} />
                <div className={styles.appOverlay}>
                  <h4>{app.title}</h4>
                  <p>{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        {/* Header: full width above the grid */}
        <div className={styles.faqHeader}>
          <div className={styles.faqHeaderLeft}>
            <span className={styles.faqBreadcrumb}>• FQS</span>
            <h2 className={styles.faqTitle}>
              Frequently Asked <br />
              <span>Questions</span>
            </h2>
            <div className={styles.faqTitleDivider} />
          </div>
          <p className={styles.faqSubtext}>
            Quick answers covering design, usage, durability,
            <br /> customization, and advantages of Premium MS <br />
            Containers for industrial and commercial <br />
            applications.
          </p>
        </div>

        {/* Body: image left + accordion right */}
        <div className={styles.faqInner}>
          <div
            className={styles.faqSideImg}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80')",
            }}
          />
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${
                  openFaq === faq.id ? styles.faqOpen : ""
                }`}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <span className={styles.faqArrow}>
                    {openFaq === faq.id ? "↓" : "↑"}
                  </span>
                </div>
                {openFaq === faq.id && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Premium Containers?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized Premium containers tailored to your storage needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumMsContainer;
