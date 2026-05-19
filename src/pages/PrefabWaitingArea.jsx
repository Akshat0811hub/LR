import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabWaitingArea.module.css";

const PrefabWaitingArea = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const advantages = [
    { title: "Quick Installation", desc: "Factory-built units installed on-site in days — no long construction wait times." },
    { title: "Comfortable & Spacious", desc: "Ergonomic design ensuring visitor comfort with proper ventilation and seating." },
    { title: "Weatherproof Structure", desc: "Insulated panels protect occupants from heat, rain, and harsh outdoor conditions." },
    { title: "Branded Aesthetics", desc: "Custom colors, logos, and finishes make a strong brand impression on visitors." },
  ];

  const applications = [
    { title: "Hospital & Clinic Waiting Areas", desc: "Clean, comfortable, hygienic prefab waiting spaces for healthcare facilities.", img: "/Images/wait1.jpg" },
    { title: "Railway Station Shelters", desc: "Durable and weatherproof waiting areas for commuters at railway and bus stations.", img: "/Images/wait2.jpg" },
    { title: "Industrial Facility Lobbies", desc: "Professional visitor waiting lounges for factories and industrial parks.", img: "/Images/wait3.jpg" },
    { title: "Construction Site Rest Areas", desc: "On-site rest and waiting shelters for contractors and security personnel.", img: "/Images/wait4.jpg" },
  ];

  const faqs = [
    { id: 0, q: "What is an LGSF Prefabricated Waiting Area?", a: "It is a factory-built, modular waiting space constructed using Light Gauge Steel Framing and insulated sandwich panels, designed for rapid deployment at any facility." },
    { id: 1, q: "Can waiting areas be customized with AC and lighting?", a: "Yes, we provide fully customized waiting areas with air conditioning, LED lighting, seating fixtures, branded interiors, and all required electrical fittings." },
    { id: 2, q: "How long does installation take?", a: "Standard prefab waiting areas are installed within 5 to 10 working days depending on size and site conditions." },
    { id: 3, q: "Are these waiting areas relocatable?", a: "Yes, our prefab waiting areas are fully relocatable. They can be dismantled and re-installed at a new location without significant material loss." },
    { id: 4, q: "What size waiting area is available?", a: "We offer a range of sizes from compact 50 sq ft waiting booths to large 500+ sq ft passenger or visitor waiting halls depending on requirements." },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/waitingarea.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>LGSF PREFABRICATED <br /><span>WAITING AREAS</span></h1>
          <p className={styles.subtitle}>Smartly engineered, weatherproof, and beautifully finished prefab waiting areas — ideal for hospitals, railway stations, and industrial facilities.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/waitarea1.jpg" alt="LGSF Prefab Waiting Area" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/waitarea2.jpg" alt="Interior of prefab waiting area" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Next-Generation <br /><span>Prefabricated Waiting Spaces</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>L&amp;R Green India Pvt Ltd designs and delivers modular waiting areas that combine structural strength with guest comfort — deployable anywhere in days.</p>
            <p>Our LGSF prefabricated waiting areas are engineered with thermal insulation, natural ventilation, and customizable interiors to serve hospitals, transport hubs, and industrial campuses.</p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>Read more &nbsp;→</button>
          </div>
        </div>
      </section>

      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Advantages of LGSF <br /><span>Prefabricated Waiting Areas</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.advantageCardsGrid}>
            {advantages.map((adv, i) => (
              <div key={i} className={styles.advantageCard}>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>WAITING AREA</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>Smart Prefab <br /><strong>Solutions</strong></h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <p>We integrate intelligent design features into every waiting area unit — from passive cooling strategies to modular expansion capabilities — ensuring your prefab space is always future-ready and energy-efficient.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src="/Images/smartwait.jpg" alt="Smart Prefab Waiting Area" style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "cover", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      <section className={styles.splitSec} style={{ padding: "100px 8% 120px 8%" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Applications of <br /><span>Prefab Waiting Areas</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.cardGrid}>
            {applications.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}><img className={styles.cardImage} src={card.img} alt={card.title} /></div>
                <div className={styles.cardContent}><h3>{card.title}</h3><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Why Choose Prefab <br /><span>Waiting Areas</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>L&amp;R Green India Pvt Ltd combines structural expertise with aesthetic design to deliver prefab waiting areas that leave a lasting positive impression on visitors, patients, and passengers.</p>
            <p>With our end-to-end manufacturing and service model, every prefab waiting area is delivered on time, within budget, and built to last for decades with minimal maintenance.</p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/whywait1.jpg" alt="Why choose prefab waiting area" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/whywait2.jpg" alt="Premium waiting area interior" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
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
            <p className={styles.faqDesc}>Common queries about our LGSF prefab waiting areas — customization, timelines, and more.</p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter} style={{ width: "100%", height: "480px", overflow: "hidden", borderRadius: "12px" }}>
              <img src="/Images/faqwait.jpg" alt="FAQ" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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

      <section className={styles.ctaBanner} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/ctawait.jpg')" }}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Prefab Waiting Area Solutions?</h2>
          <p>Connect with our team to design and deliver durable, efficient, and fully customized prefab waiting area solutions tailored to your site needs.</p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrefabWaitingArea;
