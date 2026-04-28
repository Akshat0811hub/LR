import styles from "../styles/AboutPage.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const About = () => {
  const journey = [
    {
      year: "2015",
      title: "Foundation",
      text: "L & R Enterprises established in New Delhi with a vision to redefine modular construction through technical precision and high-grade materials.",
      side: "right",
    },
    {
      year: "2018",
      title: "Industrial Scale",
      text: "Expanded manufacturing capacities to include large-scale MS Container fabrication and industrial warehouse assets for the booming logistics sector.",
      side: "left",
    },
    {
      year: "2021",
      title: "Specialized Solutions",
      text: "Added solar structures, prefab rooms, and pharma buildings to cater to specialized industry requirements.",
      side: "right",
    },
    {
      year: "2025",
      title: "Innovation & Growth",
      text: "Pioneering LGSF technology and insulated panel solutions for next-generation prefab construction.",
      side: "left",
    },
  ];

  const process = [
    {
      step: "STEP 01",
      title: "Requirement Analysis",
      text: "We begin by understanding your project needs, space requirements, and specifications to provide the most suitable prefabricated solution.",
      icon: "▤",
    },
    {
      step: "STEP 02",
      title: "Design & Planning",
      text: "Our team creates detailed designs and structural plans using modern techniques to ensure accuracy, efficiency, and durability.",
      icon: "⬡",
      active: true,
    },
    {
      step: "STEP 03",
      title: "Manufacturing",
      text: "Using high-quality materials and advanced fabrication methods, we manufacture structures and containers with precision and strict quality control.",
      icon: "⌁",
    },
    {
      step: "STEP 04",
      title: "Delivery & Installation",
      text: "We ensure timely delivery and provide smooth on-site installation, making the entire process quick, hassle-free, and reliable.",
      icon: "⌂",
    },
  ];

  const products = [
    {
      title: "Prefab Building",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Canteen",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Insulated Puf Panels",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Industrial shed",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const faqs = [
    "What products does L & R Enterprises manufacture?",
    "Are your prefabricated structures customizable?",
    "How durable are your mild steel containers?",
    "Do you provide installation services?",
    "What industries do you serve?",
  ];

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p>About Our Company</p>
            <h1>
              BUILDING THE FUTURE WITH <br />
              L&R GREEN INDIA PVT LTD
            </h1>
            <h4>
              Leading Manufacturer Of Prefabricated Structures, Mild Steel
              Containers & Prefabricated Cabins From New Delhi, India.
            </h4>
            <button>Contact us <span>→</span></button>
          </div>

          <div className={styles.heroMiniCard}>
            <div>
              <p>Modular Office</p>
              <span>→</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80"
              alt="Modular Office"
            />
          </div>
        </section>

        <section className={styles.aboutIntro}>
          <div className={styles.introImages}>
            <img
              className={styles.imgBack}
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
              alt="Factory"
            />
            <img
              className={styles.imgFront}
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
              alt="Prefab"
            />
          </div>

          <div className={styles.introText}>
            <span className={styles.badge}>• About us</span>
            <h2>10 Years of <span>Structural</span></h2>
            <p>
              L&R Green India Pvt Ltd is a New Delhi-based manufacturer
              specializing in prefabricated structures, mild steel containers,
              and prefabricated cabins. Established in 2015, we have built a
              strong reputation for delivering high-quality, cost-effective
              building solutions across India.
            </p>
            <p>
              Our extensive product range includes Prefab Site Office Structures,
              Pre Engineered Building Structures, Poultry Farm Sheds,
              Prefabricated Warehouse Sheds, Prefabricated Farm Houses, and
              Prefabricated Control Rooms.
            </p>
            <button>Get Contact <span>↗</span></button>
          </div>
        </section>

        <section className={styles.journey}>
          <h2>Our <span>Journey</span></h2>

          <div className={styles.timeline}>
            {journey.map((item, index) => (
              <div
                className={`${styles.timelineItem} ${
                  item.side === "left" ? styles.left : styles.right
                }`}
                key={item.year}
              >
                <div className={styles.yearBox}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.year}</h3>
                </div>

                <div className={styles.journeyCard}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <button>↗</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.blueBanner}>
          <div>
            <h2>
              Delivering Reliable <br />
              Prefabricated Structures
            </h2>
            <p>
              L&R Green India Pvt Ltd specializes in manufacturing high-quality
              prefabricated structures and mild steel containers in New Delhi.
              From site offices to warehouse sheds and portable containers, our
              solutions are built for durability, flexibility, and modern
              industrial use.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
            alt="Prefab Building"
          />

          <h1>ENTERPRISES</h1>
        </section>

        <section className={styles.process}>
          <h2>Our <span>Process</span></h2>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <div
                className={`${styles.processCard} ${
                  item.active ? styles.activeProcess : ""
                }`}
                key={item.step}
              >
                <div className={styles.processTop}>
                  <span className={styles.processIcon}>{item.icon}</span>
                  <small>{item.step}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.smart}>
          <div className={styles.smartHead}>
            <h2>
              Building Smarter Spaces <br />
              <span>with Precision and Trust</span>
            </h2>
            <p>
              L & R Enterprises delivers durable prefabricated structures and
              steel containers designed for modern industrial and commercial
              needs.
            </p>
          </div>

          <div className={styles.smartBody}>
            <div className={styles.smartList}>
              <div>
                <h4>▤ Diverse Prefabricated Solutions</h4>
                <p>
                  Our mild steel containers are engineered to provide adaptable
                  workspace and storage solutions for various applications.
                </p>
              </div>

              <div>
                <h4>⌁ Advanced Manufacturing Approach</h4>
                <p>
                  We combine modern fabrication techniques with high-quality
                  materials to deliver superior structural performance.
                </p>
              </div>

              <div>
                <h4>◇ Commitment to Client Success</h4>
                <p>
                  We believe strong relationships are built on trust,
                  consistency, and dependable service.
                </p>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&w=900&q=80"
              alt="Work"
            />
          </div>
        </section>

        <section className={styles.commitment}>
          <div>
            <h2>
              Strength, Quality <br />
              & Commitment
            </h2>
            <p>
              At L & R Enterprises, we are committed to delivering high-quality
              prefabricated structures and steel containers built with precision
              and care.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
            alt="Structure"
          />

          <h1>ENTERPRISES</h1>
        </section>

        <section className={styles.products}>
          <div className={styles.productHead}>
            <div>
              <span className={styles.badge}>• our Product</span>
              <h2>
                Quality Products <br />
                We Offer
              </h2>
            </div>
            <button>View All <span>↗</span></button>
          </div>

          <div className={styles.productGrid}>
            {products.map((item) => (
              <div className={styles.productCard} key={item.title}>
                <img src={item.img} alt={item.title} />
                <button>↗</button>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqTop}>
            <div>
              <span className={styles.badge}>• FAQS</span>
              <h2>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
            </div>
            <p>
              Find answers to common questions about our prefabricated
              structures, containers, and services.
            </p>
          </div>

          <div className={styles.faqBody}>
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80"
              alt="Factory"
            />

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  className={`${styles.faqItem} ${
                    index === 1 ? styles.activeFaq : ""
                  }`}
                  key={faq}
                >
                  <h4>{faq}</h4>
                  <span>{index === 1 ? "↓" : "↑"}</span>
                  {index === 1 && (
                    <p>
                      Yes, all our structures and containers can be customized
                      based on your requirements, including size, design, layout,
                      and functionality.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;