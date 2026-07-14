import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/HVACSolutions.module.css";

const HVACSolutions = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const systemCards = [
    {
      title: "Central AC Systems",
      desc: "High-capacity centralized air conditioning for large commercial and industrial spaces.",
      img: "/Images/whybig.jpg",
    },
    {
      title: "VRF/VRV Systems",
      desc: "Variable refrigerant flow systems for multi-zone precise temperature control.",
      img: "/Images/hvac2.jpg",
    },
    {
      title: "Ductable Split Units",
      desc: "Concealed ducted systems for offices, hotels, and malls with clean aesthetics.",
      img: "/Images/hvac3.jpg",
    },
    {
      title: "Precision Cooling",
      desc: "Server room and data center precision cooling for critical IT infrastructure.",
      img: "/Images/hvac4.jpg",
    },
  ];

  const applicationAreas = [
    {
      title: "Commercial Offices",
      desc: "Energy-efficient HVAC systems designed for productive office environments.",
    },
    {
      title: "Industrial Facilities",
      desc: "Heavy-duty ventilation and cooling for factories, warehouses, and process plants.",
    },
    {
      title: "Healthcare Facilities",
      desc: "Clean-room grade HVAC with HEPA filtration for hospitals and clinics.",
    },
    {
      title: "Hotels & Hospitality",
      desc: "Silent, zone-controlled climate systems for superior guest comfort.",
    },
    {
      title: "Data Centers",
      desc: "Precision temperature and humidity control for mission-critical server environments.",
    },
    {
      title: "Prefab Buildings",
      desc: "Integrated HVAC solutions tailored for modular and prefabricated structures.",
    },
  ];

  const coreServices = [
    {
      icon: "/Images/icons/supply-air.svg",
      title: "Supply Air Duct Installation",
      desc: "We design and install ducts that efficiently distribute conditioned air, ensuring balanced airflow and consistent temperature.",
    },
    {
      icon: "/Images/icons/fresh-air.svg",
      title: "Fresh Air Duct Installation",
      desc: "Our fresh air duct systems bring in clean outdoor air to improve ventilation and maintain healthy indoor air quality.",
    },
    {
      icon: "/Images/icons/diffuser.svg",
      title: "Supply Air Diffuser Installation",
      desc: "Supports innovative designs including curved walls, modern facades, and customized layouts.",
    },
    {
      icon: "/Images/icons/exhaust.svg",
      title: "Toilet Exhaust Duct Installation",
      desc: "Our exhaust duct systems remove moisture, odors, and stale air, ensuring proper ventilation and a hygienic environment.",
    },
  ];

  const maintenanceTips = [
    "Regular filter cleaning and replacement every 3 months",
    "Annual refrigerant pressure check and top-up if required",
    "Coil cleaning and heat exchanger inspection every 6 months",
    "Duct inspection and sanitization for healthier indoor air quality",
    "Electrical connection inspection and motor lubrication annually",
    "BMS integration check and thermostat calibration every year",
  ];

  const components = [
    {
      title: "Air Handling Units",
      desc: "Large-capacity AHUs for central HVAC systems in commercial buildings.",
    },
    {
      title: "Fan Coil Units",
      desc: "Room-level FCUs for quiet, individual zone temperature control.",
    },
    {
      title: "Chillers",
      desc: "Air and water-cooled chillers for central plant cooling applications.",
    },
    {
      title: "Cooling Towers",
      desc: "Efficient heat rejection systems for large-scale industrial cooling plants.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What types of HVAC systems do you install?",
      a: "We design, supply, and install a wide range of HVAC systems including central AC, VRF/VRV, ductable splits, cassette units, precision cooling, and industrial ventilation systems.",
    },
    {
      id: 1,
      q: "Do you provide HVAC solutions for prefab buildings?",
      a: "Yes, we specialize in integrating HVAC systems into prefabricated and modular structures, ensuring efficient and concealed installation within the building envelope.",
    },
    {
      id: 2,
      q: "Which brands do you work with?",
      a: "We work with leading HVAC brands including Daikin, Voltas, Blue Star, Carrier, LG, and Hitachi — selecting the best fit for each project's requirements and budget.",
    },
    {
      id: 3,
      q: "Do you offer Annual Maintenance Contracts (AMC)?",
      a: "Yes, we offer comprehensive AMC plans covering preventive maintenance visits, emergency breakdown support, and parts replacement at competitive annual rates.",
    },
    {
      id: 4,
      q: "What is the typical timeline for HVAC installation?",
      a: "Small to medium projects (up to 50 TR) are typically completed within 2–4 weeks. Large industrial or commercial projects may take 6–12 weeks depending on complexity.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/hvachero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            SMART &amp; ENERGY-EFFICIENT <br />
            <span>HVAC SOLUTIONS FOR EVERY SPACE</span>
          </h1>
          <p className={styles.subtitle}>
            Complete HVAC design, supply, installation, and maintenance services
            — engineered for maximum energy efficiency, indoor comfort, and
            long-term reliability.
          </p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* COMPLETE HVAC SYSTEM SOLUTIONS */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Complete HVAC <br />
              <span>System Solutions</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", color: "#334155" }}>
              HVAC (Heating, Ventilation, and Air Conditioning) systems play a
              critical role in creating comfortable, healthy, and controlled
              indoor environments across residential, commercial, and industrial
              spaces. At L&R Green Pvt Ltd, we deliver comprehensive HVAC
              solutions covering every stage—from design and engineering to
              installation and maintenance—ensuring consistent performance,
              durability, and long-term reliability.
            </p>
            <p>
              Our HVAC solutions are built using advanced, energy-efficient
              technologies that optimize airflow, maintain precise temperature
              control, and regulate humidity for enhanced indoor comfort. We
              integrate smart designs and high-quality components to improve air
              quality while reducing energy consumption and supporting
              sustainable, cost-effective environments.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>
              Get a Quote &nbsp;→
            </button>
          </div>

          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/hvacmain1.jpg"
                  alt="HVAC system installation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/hvacmain2.jpg"
                  alt="HVAC duct installation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC BY APPLICATION */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "50px",
            }}
          >
            <div>
              <h2 className={styles.secTitle}>
                HVAC Solutions <br />
                <span>by Application</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p
              style={{
                maxWidth: "440px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Tailored HVAC systems for every sector — from offices and
              hospitals to factories and prefab buildings.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {systemCards.map((card, idx) => (
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

      {/* IMPORTANCE */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.importanceImage}>
            <img src="/Images/hvacimportance.jpg" alt="HVAC Importance" />
          </div>

          <div className={styles.importanceContent}>
            <h2 className={styles.importantsecTitle}>
              Importance of <br />
              <span>HVAC Systems</span>
            </h2>
            <div className={styles.importantdivider}></div>

            <p className={styles.importanceText}>
              Solar module mounting structures provide strong support,
              stability, and proper alignment for maximum solar efficiency. At
              L&R Green Pvt Ltd, we offer durable solutions for all types of
              solar projects.
            </p>

            <ul className={styles.importanceList}>
              <li>Comfortable indoor temperature</li>
              <li>Improved air quality</li>
              <li>Humidity control</li>
              <li>Enhanced productivity</li>
              <li>Energy efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DARK BANNER — ADVANCED COMPONENTS */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&R HVAC SOLUTIONS</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Advanced HVAC Components <br />
              <strong>&amp; System Importance</strong>
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#ffffff", marginBottom: "30px" }}
            />
            <p>
              HVAC systems play a vital role in maintaining comfortable indoor
              temperatures, improving air quality, controlling humidity, and
              reducing energy consumption through efficient operation. At L&R
              Green Pvt Ltd, we integrate advanced components such as VRV/VRF
              systems for precise multi-zone temperature control and
              high-quality copper piping for durability and efficient heat
              transfer. Together, these technologies ensure reliable performance
              and long-lasting comfort across residential, commercial, and
              industrial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* OUR CORE SERVICES */}
      <div className={styles.servicesHeader}>
        <div>
          <h2 className={styles.secTitle}>
            Our Core <br />
            <span>HVAC Services</span>
          </h2>
          <div className={styles.divider}></div>
        </div>

        <p className={styles.servicesDesc}>
          Essential HVAC services focused on efficient airflow, ventilation, and
          indoor comfort using high-quality installation and system design.
        </p>
      </div>

      <div className={styles.coreServicesGrid}>
        {coreServices.map((svc, i) => (
          <div
            key={i}
            className={`${styles.coreServiceCard} ${
              i === 1 ? styles.activeCard : ""
            }`}
          >
            <img
              src={svc.icon}
              alt={svc.title}
              className={styles.serviceIcon}
            />

            <h4>{svc.title}</h4>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>

      {/* MAINTENANCE */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Keep Your HVAC System <br />
              <span>Running Efficiently</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Regular preventive maintenance is the key to maximizing the
              efficiency, lifespan, and reliability of your HVAC system. Our AMC
              plans include:
            </p>
            <div className={styles.maintenanceList}>
              {maintenanceTips.map((tip, i) => (
                <div key={i} className={styles.maintenanceItem}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" fill="#233a5e" />
                    <path
                      d="M8 12.5L10.5 15L16 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/hvacmaint1.jpg"
                  alt="HVAC maintenance"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/hvacmaint2.jpg"
                  alt="HVAC servicing"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/whyhvac1.jpg"
                  alt="Why choose HVAC solutions"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/whyhvac2.jpg"
                  alt="HVAC expert team"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose <br />
              <span>HVAC Solutions</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              L&amp;R Green India Pvt Ltd brings certified HVAC engineers,
              trusted brand partnerships, and a proven project delivery track
              record to every HVAC installation — from small offices to large
              industrial facilities.
            </p>
            <p>
              Our energy-efficient system designs typically deliver 20–35%
              savings on electricity costs compared to conventional
              installations, with superior indoor air quality and long-term
              reliability backed by our AMC support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Common questions about our HVAC services — system types,
              installation timelines, and maintenance.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/faqhvac.jpg"
                alt="FAQ HVAC"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px",
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

      {/* CTA */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url('/Images/ctahvac.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your HVAC Solutions ?</h2>
          <p>
            Connect with our team to design and deliver energy-efficient,
            reliable HVAC systems for your commercial, industrial, or prefab
            facility.
          </p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HVACSolutions;
