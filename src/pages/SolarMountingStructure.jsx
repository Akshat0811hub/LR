import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarMountingStructure.module.css";

const SolarMountingStructure = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const components = [
    { title: "Module Clamps & Rails", desc: "Precision-engineered mid and end clamps with C-section rails for secure panel mounting.", img: "/Images/mount1.jpg" },
    { title: "Roof Hooks & Flashings", desc: "Weatherproof roof hooks and flashing kits for various roofing profiles — metal, RCC, and tiles.", img: "/Images/mount2.jpg" },
    { title: "Pile Foundations", desc: "Ground-driven steel piles for ground-mounted systems eliminating the need for concrete footings.", img: "/Images/mount3.jpg" },
    { title: "Adjustable Tilt Systems", desc: "Variable tilt angle structures for optimal solar irradiance capture across different latitudes.", img: "/Images/mount4.jpg" },
  ];

  const mountingTypes = [
    { type: "Rooftop Systems", items: ["RCC flat roof mounting systems", "Metal sheet roof mounting systems", "Tile roof mounting systems", "Ballasted (non-penetrative) systems"] },
    { type: "Ground-Mounted Systems", items: ["Fixed-tilt ground mount structures", "Single-axis solar tracking systems", "Dual-axis solar tracking systems", "Agrivoltaic / agri-solar structures"] },
    { type: "Carport & Elevated", items: ["Solar carport structures for parking areas", "Elevated walkway canopy structures", "Water canal solar mounting systems", "Floating solar pontoon structures"] },
  ];

  const benefitsList = [
    "Hot-dip galvanized / anodized for 25+ year corrosion resistance",
    "Pre-drilled and pre-fabricated for rapid site assembly",
    "Designed to withstand wind loads up to 170 km/h",
    "Compatible with all major solar module brands and sizes",
    "Custom engineering for seismic and snow load zones",
    "Minimal land disturbance with pile foundation systems",
  ];

  const faqs = [
    { id: 0, q: "What is a Solar Module Mounting Structure?", a: "A solar module mounting structure is the framework that holds solar panels at the correct angle and elevation to maximize energy output while withstanding environmental loads." },
    { id: 1, q: "What materials are used in solar mounting structures?", a: "We use hot-dip galvanized steel, anodized aluminium, and stainless steel fasteners — all rated for 25+ years outdoor service life without significant corrosion." },
    { id: 2, q: "They are relocatable mounting structures?", a: "Yes, most of our ground-mounted structures can be dismantled and relocated. Pile-based systems especially allow easy extraction and reinstallation at a new site." },
    { id: 3, q: "What wind speed can your structures withstand?", a: "Our structures are engineered to withstand wind speeds up to 170 km/h by default, with options for higher wind zones available through custom structural engineering." },
    { id: 4, q: "Do you provide installation of mounting structures?", a: "Yes, we provide complete supply and installation services. Our experienced installation teams ensure structures are erected accurately, safely, and on schedule." },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/solarmount.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>SOLAR MODULE <br /><span>MOUNTING STRUCTURE</span></h1>
          <p className={styles.subtitle}>Precision-engineered solar panel mounting systems built for rooftop, ground-mounted, carport, and floating solar installations — designed for 25+ year structural integrity.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/solarmount1.jpg" alt="Solar mounting structure" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/solarmount2.jpg" alt="Ground mounted solar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>What is a Solar Module <br /><span>Mounting Structure</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>A Solar Module Mounting Structure is the engineered framework that secures solar photovoltaic (PV) panels at the optimum tilt angle and elevation for maximum energy production.</p>
            <p>L&amp;R Green India Pvt Ltd designs and manufactures high-quality solar mounting structures for every installation type — rooftop, ground-mounted, carport, floating, and canal-top — using hot-dip galvanized steel and anodized aluminium for exceptional durability in all climatic conditions.</p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>Get a Quote &nbsp;→</button>
          </div>
        </div>
      </section>

      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Precision Engineered <br /><span>Solar Mounting Components</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.cardGrid}>
            {components.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}><img className={styles.cardImage} src={card.img} alt={card.title} /></div>
                <div className={styles.cardContent}><h3>{card.title}</h3><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>MOUNTING</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>Benefits &amp; Materials of <br /><strong>Solar Mounting Structures</strong></h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>Our mounting structures combine superior materials with precision manufacturing to deliver solar support systems that are robust, corrosion-resistant, and designed to last the full lifecycle of your solar plant.</p>
            <div className={styles.bulletList} style={{ marginTop: "24px" }}>
              {benefitsList.map((item, i) => (
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
            <img src="/Images/mountmaterial.jpg" alt="Solar mounting materials" style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "cover", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Types of Solar Module <br /><span>Mounting Systems</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>We manufacture and supply mounting structures for every solar application — from residential rooftops to utility-scale solar farms.</p>
            <div className={styles.typesGrid}>
              {mountingTypes.map((mt, i) => (
                <div key={i} className={styles.typeCard}>
                  <h4>{mt.type}</h4>
                  <ul>
                    {mt.items.map((item, j) => (
                      <li key={j}><span className={styles.typeDot}>•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol} style={{ display: "flex", justifyContent: "center" }}>
            <img src="/Images/mounttypes.jpg" alt="Types of solar mounting" style={{ width: "100%", maxWidth: "500px", height: "auto", objectFit: "cover", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/whymount1.jpg" alt="Why choose L&R solar mounting" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/whymount2.jpg" alt="Solar mounting installed" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Why Choose Solar <br /><span>EPC Services</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>L&amp;R Green India Pvt Ltd brings deep engineering expertise and in-house manufacturing capabilities to deliver solar mounting structures that are precision-built, cost-effective, and backed by end-to-end service.</p>
            <p>From small rooftop systems to multi-megawatt ground-mounted farms, we design and supply structures that maximize energy yield and structural reliability across the plant's 25+ year lifespan.</p>
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
            <p className={styles.faqDesc}>Common questions about our solar module mounting structures — materials, wind rating, and installation.</p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter} style={{ width: "100%", height: "480px", overflow: "hidden", borderRadius: "12px" }}>
              <img src="/Images/faqmount.jpg" alt="FAQ solar mounting" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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

      <section className={styles.ctaBanner} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/ctamount.jpg')" }}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your Module mounting structure?</h2>
          <p>Connect with our team to design and supply precision-engineered solar module mounting structures for your project.</p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarMountingStructure;
