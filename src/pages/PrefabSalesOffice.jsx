import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSalesOffice.module.css";

const PrefabSalesOffice = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      title: "Real Estate Sales Offices",
      desc: "Professionally designed portable sales offices deployed at project sites to drive buyer confidence.",
      img: "/Images/office1.jpg",
    },
    {
      title: "Industrial Facility Offices",
      desc: "On-site administrative offices for factories and warehouses that need a quick operational setup.",
      img: "/Images/office2.jpg",
    },
    {
      title: "Construction Site Offices",
      desc: "Robust, weatherproof site office units designed for construction and infrastructure projects.",
      img: "/Images/office3.jpg",
    },
    {
      title: "Commercial Exhibitions",
      desc: "Temporary yet premium-quality sales cabins ideal for expos, trade fairs and product launches.",
      img: "/Images/office4.jpg",
    },
  ];

  const advantages = [
    {
      num: "01",
      title: "Rapid Deployment",
      desc: "Factory-manufactured and delivered ready to install — up and running within days on any site.",
    },
    {
      num: "02",
      title: "Fully Relocatable",
      desc: "Dismantle, transport, and re-erect at a new location with zero structural material wastage.",
    },
    {
      num: "03",
      title: "Premium Aesthetics",
      desc: "Modern glass facades, clean interiors, and professional finishes that impress every client.",
    },
    {
      num: "04",
      title: "Cost Effective",
      desc: "Significant savings over permanent construction with all the functionality your team needs.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF Prefab Sales Office?",
      a: "An LGSF Prefab Sales Office is a factory-built, modular sales cabin constructed using Light Gauge Steel Framing and insulated sandwich panels, deployable on any site within a very short time.",
    },
    {
      id: 1,
      q: "How quickly can a prefab sales office be installed?",
      a: "Depending on size and configuration, most prefab sales office units can be fully installed and operational within 7 to 14 working days after order confirmation.",
    },
    {
      id: 2,
      q: "Can it be customized with glass facades and branding?",
      a: "Yes, absolutely. We offer full customization including large glass storefronts, branded exteriors, false ceilings, air conditioning, and premium interior finishes.",
    },
    {
      id: 3,
      q: "Are these offices relocatable after use?",
      a: "Yes. Our prefab sales offices are fully relocatable and can be dismantled, transported, and re-installed at a new project site without any significant material wastage.",
    },
    {
      id: 4,
      q: "What size options are available?",
      a: "We offer a range of sizes starting from 100 sq ft single-room units to multi-room complexes exceeding 2,000 sq ft based on your sales team requirements.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/salesoffice.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            MODERN LGSF <br />
            PREFABRICATED <br />
            <span>SALES OFFICES</span>
          </h1>
          <p className={styles.subtitle}>
            Fast-deployable, premium-finish modular sales offices that make an
            outstanding first impression — built for real estate sites, expos,
            and industrial facilities.
          </p>
          <button className={styles.btnPrimary}>
            Contact us &nbsp;
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── LGSF PREFAB SALES OFFICES INTRO ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/salesoffice1.jpg"
                  alt="LGSF Prefab Sales Office exterior"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px", display: "block" }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/salesoffice2.jpg"
                  alt="Prefab sales office interior"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              LGSF Prefabricated <br />
              <span>Sales Offices</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>
              L&amp;R Green India Pvt Ltd delivers premium LGSF prefabricated sales offices
              engineered for rapid deployment and lasting impression. Our factory-built units
              combine structural strength with modern aesthetics.
            </p>
            <p>
              Whether for a real estate project launch or an industrial facility, our prefab
              sales offices offer glass facades, branded exteriors, professional interiors,
              and full electrical fittings — all installed within days, not months.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>
              Read more &nbsp;
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "20px" }}>
            <div>
              <h2 className={styles.secTitle}>
                Applications of LGSF <br />
                <span>Prefab Office Structures</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p style={{ maxWidth: "480px", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              Our modular offices serve a wide range of industries requiring fast, professional workspace setups.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {applications.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}>
                  <img className={styles.cardImage} src={card.img} alt={card.title} />
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

      {/* ── ADVANTAGES DARK BANNER ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>SALES OFFICE</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Advantages of LGSF <br />
              <strong>Prefab Office Structures</strong>
            </h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <div className={styles.advantagesGrid}>
              {advantages.map((adv, i) => (
                <div key={i} className={styles.advantageCard}>
                  <span className={styles.advantageNum}>{adv.num}</span>
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/salesadvantage.jpg"
              alt="Prefab Sales Office Advantage"
              style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "cover", borderRadius: "14px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING & SERVICE PROVIDERS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Manufacturing &amp; <br />
              <span>Service Providers</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              At L&amp;R Green India Pvt Ltd, we are a complete turnkey manufacturer and
              service provider for LGSF prefabricated sales offices. From design and
              engineering to fabrication, delivery, and installation — we handle everything.
            </p>
            <div className={styles.bulletList}>
              {[
                "Custom design as per branding and layout requirements",
                "In-house fabrication using high-grade LGSF sections",
                "Full electrical, plumbing, and HVAC integration",
                "Dedicated after-sales service and maintenance support",
                "PAN India delivery and installation capability",
              ].map((item, i) => (
                <div key={i} className={styles.bulletItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="#233a5e" />
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={styles.bulletLabel}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/manufacturing1.jpg"
                  alt="Manufacturing facility"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/manufacturing2.jpg"
                  alt="Service providers"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN & PROJECT WORKFLOW ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/workflow.png"
              alt="Design and Project Workflow"
              style={{ width: "100%", maxWidth: "500px", height: "auto", objectFit: "contain", display: "block" }}
            />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Design &amp; Project <br />
              <span>Workflow</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Our structured workflow ensures every prefab sales office is delivered on time, on budget, and exactly to spec.
            </p>
            <div className={styles.workflowSteps}>
              {[
                { step: "01", label: "Requirement Analysis", desc: "Understanding your site, branding, and functional needs." },
                { step: "02", label: "Design & Engineering", desc: "Structural drawings, layout plans, and 3D visualizations." },
                { step: "03", label: "Factory Fabrication", desc: "Precision manufacturing under strict quality controls." },
                { step: "04", label: "Site Installation", desc: "Rapid on-site assembly and final commissioning." },
              ].map((s, i) => (
                <div key={i} className={styles.workflowItem}>
                  <div className={styles.workflowStep}>{s.step}</div>
                  <div>
                    <strong>{s.label}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose LGSF <br />
              <span>Prefab Sale Office?</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              L&amp;R Green India Pvt Ltd brings unmatched expertise, premium materials, and a
              proven track record in delivering prefabricated sales offices that stand apart in
              quality, speed, and cost efficiency.
            </p>
            <p>
              Our certified LGSF components, in-house fabrication, and end-to-end service ensure
              your sales office is a true asset — functional, attractive, and durable.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/whysalesoffice1.jpg"
                  alt="Why Choose L&R Sales Office"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/whysalesoffice2.jpg"
                  alt="Premium prefab sales office"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
            <p className={styles.faqDesc}>
              Common questions about LGSF prefab sales offices — timelines, customization, relocation, and more.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter} style={{ width: "100%", height: "480px", overflow: "hidden", borderRadius: "12px" }}>
              <img
                src="/Images/faqsalesoffice.jpg"
                alt="Frequently Asked Questions"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.id} className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}>
                  <div className={styles.faqHeader} onClick={() => setOpenFaq(faq.id === openFaq ? -1 : faq.id)}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "↓" : "↑"}</span>
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
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Images/ctaoffice.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Prefab Sales Offices Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully
            customized prefab sales office solutions tailored to your site needs.
          </p>
          <button className={styles.btnSecondary}>
            Contact US &nbsp;
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

export default PrefabSalesOffice;
