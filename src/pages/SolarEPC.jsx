import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarEPC.module.css";

const SolarEPC = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const engineeringCards = [
    { title: "Site Survey & Assessment", desc: "Comprehensive site analysis including shadow mapping, load assessment and orientation study.", img: "/Images/solar1.jpg" },
    { title: "Structural Design", desc: "Engineering of mounting structures and civil foundations for optimal load distribution.", img: "/Images/solar2.jpg" },
    { title: "Electrical System Design", desc: "Complete AC/DC electrical layout, inverter selection, cable sizing, and protection systems.", img: "/Images/solar3.jpg" },
    { title: "Grid Connectivity", desc: "Complete grid integration design including synchronization, metering and protection relays.", img: "/Images/solar4.jpg" },
  ];

  const procurementItems = [
    "High-efficiency mono/poly crystalline solar modules",
    "String & central inverters from certified global brands",
    "MS / GI / aluminium mounting structures",
    "DC & AC cables, connectors, and protection devices",
    "Grid meters, SCADA systems, and monitoring hardware",
  ];

  const finalTestingItems = [
    "String-level IV curve testing and thermography",
    "Insulation resistance and continuity tests",
    "Inverter commissioning and ramp-up testing",
    "Grid synchronization and export meter verification",
    "Performance Ratio (PR) measurement and report",
  ];

  const faqs = [
    { id: 0, q: "What is Solar EPC?", a: "Solar EPC stands for Engineering, Procurement, and Construction — a turnkey service where we manage the complete solar power plant development from design to commissioning." },
    { id: 1, q: "Why choose L&R Green India for Solar EPC?", a: "We bring over a decade of experience in renewable energy, delivering high-performance solar installations for industrial, commercial, and residential clients across India." },
    { id: 2, q: "What types of solar projects do you handle?", a: "We handle rooftop solar, ground-mounted solar farms, carport solar, and hybrid solar+battery storage systems for capacities from 10 kW to 50 MW and above." },
    { id: 3, q: "How long does a solar EPC project take?", a: "Depending on capacity, rooftop projects are typically completed in 2–6 weeks, while larger ground-mounted projects may take 3–6 months." },
    { id: 4, q: "Do you provide after-installation maintenance?", a: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC) including preventive maintenance, performance monitoring, and emergency support." },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/solarepc.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>SOLAR EPC <br /><span>WORK SOLUTIONS</span></h1>
          <p className={styles.subtitle}>Complete Engineering, Procurement, and Construction services for solar power plants — from site survey and design to commissioning and monitoring.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>What is Solar <br /><span>EPC work?</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>Solar EPC (Engineering, Procurement, and Construction) is a complete turnkey solution where a single contractor manages all phases of a solar power project — from initial engineering to final commissioning.</p>
            <p>L&amp;R Green India Pvt Ltd delivers end-to-end Solar EPC services for rooftop, ground-mounted, and utility-scale solar installations. We combine proven engineering expertise with high-quality components and rigorous quality assurance to deliver plants that perform at peak efficiency throughout their 25+ year lifecycle.</p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>Get in touch &nbsp;→</button>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/solarepc1.jpg" alt="Solar EPC project" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/solarepc2.jpg" alt="Solar installation" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Engineering &amp; <br /><span>System Design</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.cardGrid}>
            {engineeringCards.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}><img className={styles.cardImage} src={card.img} alt={card.title} /></div>
                <div className={styles.cardContent}><h3>{card.title}</h3><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/finaltesting1.jpg" alt="Final testing solar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/finaltesting2.jpg" alt="Solar commissioning" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Final Testing <br /><span>&amp; Commissioning</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>Every solar plant we commission undergoes rigorous multi-stage testing to verify performance, safety, and grid compliance before handover.</p>
            <div className={styles.bulletList}>
              {finalTestingItems.map((item, i) => (
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
        </div>
      </section>

      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>SOLAR EPC</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>Procurement &amp; <br /><strong>Quality Assurance</strong></h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>We source only certified, tier-1 components from approved global manufacturers. Every item goes through incoming inspection and quality verification before deployment on site.</p>
            <div className={styles.bulletList} style={{ marginTop: "24px" }}>
              {procurementItems.map((item, i) => (
                <div key={i} className={styles.bulletItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)" />
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ color: "#e2e8f0", fontSize: "0.95rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src="/Images/procurement.jpg" alt="Solar procurement" style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "cover", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Why Choose Solar <br /><span>EPC Services</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>L&amp;R Green India Pvt Ltd delivers solar power plants that maximize energy generation, minimize downtime, and provide guaranteed performance over the plant's lifecycle.</p>
            <p>Our experienced team of solar engineers, project managers, and certified electricians ensures every project is completed on time, on budget, and to the highest quality standards.</p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/whysolar1.jpg" alt="Why choose solar EPC" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/whysolar2.jpg" alt="Solar energy benefits" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>Frequently Asked <br /><span>Questions</span></h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>Common questions about our Solar EPC services — project scope, timelines, and maintenance.</p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter} style={{ width: "100%", height: "480px", overflow: "hidden", borderRadius: "12px" }}>
              <img src="/Images/faqsolar.jpg" alt="FAQ solar EPC" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.id} className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}>
                  <div className={styles.faqHeader} onClick={() => setOpenFaq(faq.id === openFaq ? -1 : faq.id)}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "↓" : "↑"}</span>
                  </div>
                  {openFaq === faq.id && <div className={styles.faqBody}><p>{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/ctasolar.jpg')" }}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your Solar EPC Work Solutions?</h2>
          <p>Connect with our team to design and deliver your complete solar power plant — from engineering to commissioning.</p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarEPC;
