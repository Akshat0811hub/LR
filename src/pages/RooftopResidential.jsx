import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopResidential.module.css";

const RooftopResidential = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "Will a rooftop prefab room damage my existing building?",
      a: "No, our structures are engineered to be ultra-lightweight using structural steel and insulated panels, exerting minimal load on existing pillars and foundations.",
    },
    {
      id: 1,
      q: "Are these rooms safe during storms and heavy rain?",
      a: "Yes, they are structurally designed to withstand high wind velocities and feature multi-layered water flashing for 100% leak protection.",
    },
    {
      id: 2,
      q: "How long does it take to install a rooftop room?",
      a: "A standard 10x12 ft or 12x15 ft room is completely assembled and finished on-site in as little as 5 to 7 days.",
    },
    {
      id: 3,
      q: "Do I need a concrete base on my roof?",
      a: "No, we build a heavy-duty steel base grid that sits on rubber pads directly on your roof, preserving your waterproofing and tiling.",
    },
    {
      id: 4,
      q: "Are these rooms warm in summer and cold in winter?",
      a: "On the contrary, the walls and roof are made of high-performance insulated sandwich panels (PUF/EPS) which prevent heat transfer, ensuring excellent climate control.",
    },
  ];

  const categories = [
    {
      title: "Home Office",
      desc: "Quiet, custom workspaces built with glass window views, electric fittings, and absolute soundproofing.",
    },
    {
      title: "Guest Room",
      desc: "Complete premium guest room layouts with attached washrooms, insulated wall panels, and high-quality doors.",
    },
    {
      title: "Terrace Lounge",
      desc: "Open-view glass partitions, sleek wood finish panels, and modern roofs for a premium terrace look.",
    },
    {
      title: "Multi-Purpose Room",
      desc: "Flexible designs that can change from a gym, play room, or storage cabinet as your needs evolve.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            ROOFTOP PREFABRICATED <br />
            ROOMS FOR RESIDENTIAL FLATS
          </h1>
          <p className={styles.subtitle}>
            Transform unused rooftop spaces into modern, functional rooms with lightweight, insulated,
            and fully customized prefabricated rooms designed for ultimate comfort and durability.
          </p>
          <button
            className={styles.btnPrimary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact us &nbsp;
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

      {/* ── SECTION 1: MAXIMIZE YOUR BUILDING POTENTIAL ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Maximize Your <br />
              <span>Building Potential</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Rooftop prefabricated rooms (also known as roof rooms or penthouse cabins) are modular
              living spaces designed to be built directly on top of existing residential flats or commercial
              roofs. Engineered with lightweight structural steel frames and high-insulation PUF/EPS walls,
              these rooms expand your usable space without putting excessive structural load on your building.
            </p>
            <p>
              Ideal for creating home offices, guest bedrooms, gyms, lounges, or terrace canteens, rooftop
              prefab structures offer a clean, rapid-installation alternative to brick construction. They are
              weatherproof, completely leak-proof, and designed to look premium while keeping the interior
              cool in summers and warm in winters.
            </p>
            <button className={styles.btnSecondary} style={{ marginTop: "16px" }}>
              Contact Us &nbsp;→
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHERE ROOFTOP RESIDENTIAL UNITS CAN BE USED ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Where Rooftop Residential <br />
              <span>Units Can Be Used</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.numList}>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>1</div>
                <div>
                  <strong>Home Offices &amp; Study Rooms:</strong> Create a quiet, private work space
                  away from household noise and distractions.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>2</div>
                <div>
                  <strong>Guest Bedrooms:</strong> Expand your home layout to comfortably accommodate
                  guests with modern amenities.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>3</div>
                <div>
                  <strong>Terrace Lounges &amp; Cafes:</strong> Enjoy panoramic terrace views from a
                  beautiful, weatherproof lounge room.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>4</div>
                <div>
                  <strong>Rooftop Gyms &amp; Yoga Studios:</strong> Design a dedicated fitness space
                  surrounded by natural light.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>5</div>
                <div>
                  <strong>Staff &amp; Security Accommodations:</strong> Provide clean, comfortable living
                  quarters for security and helper staff.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>6</div>
                <div>
                  <strong>Terrace Canteens &amp; Pantries:</strong> Set up a lightweight food service
                  pantry for terrace get-togethers.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DESIGNED AROUND YOUR LIFESTYLE ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle}>
                Designed Around <br />
                <span>Your Lifestyle</span>
              </h2>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.thicknessGrid}>
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`${styles.thicknessCard} ${i === 1 ? styles.thicknessCardActive : ""}`}
              >
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENGINEERED FOR SAFE URBAN LIVING ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Engineered for <br />
              Safe Urban Living
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#fff", width: "50px", height: "4px" }}
            />
            <p>
              L&amp;R Green Pvt Ltd rooftop room cabins are built using high-strength structural steel
              frames and premium weatherproof insulation panels that resist high wind speeds, heavy rain,
              and harsh sunlight, ensuring absolute safety for your home.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div
                className={styles.placeholderImgTransparent}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ADVANTAGES OF PREFAB RESIDENTIAL FLATS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Advantages of Prefab <br />
              <span>Residential Flats</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <div className={styles.numList}>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>1</div>
                <div>
                  <strong>Ultra-Lightweight Frame:</strong> Uses high-tensile steel frames that reduce total load on existing building foundations.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>2</div>
                <div>
                  <strong>Rapid Construction (5-7 Days):</strong> Prefabricated components are assembled directly on-site, with zero brick dust or mess.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>3</div>
                <div>
                  <strong>Perfect Thermal Comfort:</strong> PUF/EPS sandwich panel walls keep the interior cool in summer and warm in winter, cutting AC bills.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>4</div>
                <div>
                  <strong>100% Leak &amp; Weatherproof:</strong> Profiled roofing sheets and heavy-duty flashing ensure zero water leakage or dampness.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>5</div>
                <div>
                  <strong>Reusable &amp; Relocatable:</strong> Structure can be dismantled, modified, or relocated without any damage to the building roof.
                </div>
              </div>
              <div className={styles.numItem}>
                <div className={styles.numBadge}>6</div>
                <div>
                  <strong>Modern &amp; Premium Aesthetics:</strong> Available in multiple color profiles, wood finishes, and glass panel configurations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP PREFAB ROOMS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose Roof <br />
              <span>Top Residential Flat</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Choosing L&amp;R Green Pvt Ltd for your rooftop prefab room means choosing safety, luxury,
              and unmatched engineering precision.
            </p>
            <p>
              Our modular designs are engineered to match your existing home architecture while providing
              premium insulation, sturdy floor frames, weatherproof roofing, and beautiful wall finishes. We
              provide complete end-to-end services, from structural layout designing to final on-site
              installation, delivering a hassle-free and long-lasting home extension.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Answers to structural load questions, rainwater leak protections, assembly times, and regulatory guides.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div className={styles.faqHeader} onClick={() => setOpenFaq(faq.id)}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "▼" : "▶"}</span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqBody}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.faqImgOuter}>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Residential Flat Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully customized rooftop prefab
            room solutions tailored to your site needs.
          </p>
          <button
            className={styles.btnSecondary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
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

export default RooftopResidential;
