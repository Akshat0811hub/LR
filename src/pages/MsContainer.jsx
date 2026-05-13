import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MsContainer.module.css";

const containerTypes = [
  {
    title: "Premium Series Containers",
    desc: "High-end modular MS containers built for durability, portability, and multi-application use for luxury offices, accommodation, control rooms, site service centres, with strong steel frames, insulation, and premium finishes.",
    img: "https://images.unsplash.com/photo-1494587416117-f102a4f6f7b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Executive Series Containers",
    desc: "Efficient prefabricated containers designed for offices, cabins, and site operations. Built with durable MS structures, they offer strength, weather resistance, and a practical cost-effective workspace solution.",
    img: "https://images.unsplash.com/photo-1565636291267-b08e9c81e4ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "L&R Value Series Containers",
    desc: "Economical container solutions at sites, built for strength and flexibility—ideal for budget-friendly, durable, and quick-deployment projects across various industries and site conditions.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
];

const industryProjects = [
  {
    title: "Oil & Gas Projects",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Energy Sector Solutions",
    desc: "Reliable container units for renewable and power projects, supporting temporary settlements and operational facilities.",
    img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Site Buildings",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portable Modular Systems",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
  },
];

const deliveryFeatures = [
  {
    icon: "⚙️",
    title: "End-to-End Execution",
    desc: "Complete project handling from design and engineering to manufacturing and final installation, ensuring a smooth and coordinated workflow.",
  },
  {
    icon: "🏭",
    title: "In-House Manufacturing",
    desc: "All container units are produced within dedicated facilities, maintaining strict quality control and faster production timelines.",
  },
  {
    icon: "🏠",
    title: "Plug-and-Play Units",
    desc: "Pre-fabricated and mounted containers delivered ready-for-use, reducing on-site work and enabling quick setup.",
  },
  {
    icon: "🚀",
    title: "Rapid Project Completion",
    desc: "Efficient processes and minimal on-site labour ensure faster commissioning and timely project delivery.",
  },
];

const faqs = [
  {
    q: "What industries can MS modular containers be used in?",
    a: "MS modular containers are widely used across Oil & Gas, Construction, Renewable Energy, Railways, Highways, Food Processing, Cement, and Infrastructure industries for offices, accommodation, storage, and site operations.",
  },
  {
    q: "What is a skid-mounted container system?",
    a: "A skid-mounted container system allows units to be installed without a permanent foundation, making them easy to transport, relocate, and set up quickly along oilfields or remote sites.",
  },
  {
    q: "How fast can MS container projects be delivered?",
    a: "Depending on specifications and quantity, most standard MS container units are delivered within 2–4 weeks from order confirmation, with express timelines available for urgent requirements.",
  },
  {
    q: "Are MS containers suitable for harsh environments?",
    a: "Yes. Our MS containers are engineered with high-tensile steel, corrosion-resistant coatings, and heavy-duty insulation to withstand extreme weather, humidity, dust, and industrial site conditions.",
  },
  {
    q: "Can MS containers be customized for different uses?",
    a: "Absolutely. Size, layout, doors, windows, insulation, electrical fittings, plumbing, HVAC, and finishes can all be fully customized to match your project's operational and functional requirements.",
  },
];

const MsContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className={styles.breadcrumb}>
        L&amp;R Green India Pvt Ltd &rsaquo; <span>MS Container</span>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>MS CONTAINERS</h1>
        <p>
          Portable Modular Steel Containers engineering for the Oil &amp; Gas, Renewable,
          Construction, Railways, Refineries, Highways, Food and Cement industries — delivered
          Pan-India under a Design &amp; Build model.
        </p>
        <button className={styles.btnWhite}>Contact us &nbsp;→</button>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introTop}>
          <h2>MS <span>Container</span></h2>
          <div className={styles.introThumb} />
        </div>
        <div className={styles.introBody}>
          <div className={styles.introImg} />
          <div className={styles.introText}>
            <p>
              MS Containers (Mild Steel Containers) are portable and modular structures designed
              for durable and flexible space solutions. Built with strong steel, they are widely
              used in industrial, oil &amp; gas, construction, renewable energy, and infrastructure
              projects where quick setup and versatility are important.
            </p>
            <p>
              These containers feature a skid-mounted design, allowing easy installation without
              foundations and simple relocation using cranes or forklifts. Suitable for offices,
              accommodation, and storage, MS Containers provide a cost-effective, low-maintenance,
              and practical solution for modern project needs.
            </p>
            <p>
              With strong build quality and smart design, MS Containers ensure stability,
              efficiency, and long-lasting use.
            </p>
            <button className={styles.btnOutline}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className={styles.typesSec}>
        <div className={styles.typesHeader}>
          <div>
            <h2>Types of Modular<br /><span>MS Containers</span></h2>
          </div>
          <p>
            Discover a versatile range of modular MS containers built for industrial and commercial
            use offering durable, mobile, and flexible solutions for offices, accommodation,
            storage, and site operations.
          </p>
        </div>
        <div className={styles.typesGrid}>
          {containerTypes.map((c) => (
            <div key={c.title} className={styles.typeCard}>
              <div
                className={styles.typeImg}
                style={{ backgroundImage: `url('${c.img}')` }}
              />
              <div className={styles.typeBody}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                {c.title === "Premium Series Containers" ? (
                  <button className={styles.btnKnow} onClick={() => navigate("/puf-containers")}>Know More</button>
                ) : c.title === "Executive Series Containers" ? (
                  <button className={styles.btnKnow} onClick={() => navigate("/executive-containers")}>Know More</button>
                ) : c.title === "L&R Value Series Containers" ? (
                  <button className={styles.btnKnow} onClick={() => navigate("/lr-value-containers")}>Know More</button>
                ) : (
                  <button className={styles.btnKnow}>Know More</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGH MOBILITY */}
      <section className={styles.mobility}>
        <div className={styles.mobilityText}>
          <h2>High Mobility &amp; Flexible<br /><span>Modular Container Solutions</span></h2>
          <p>
            Wall-mounted MS containers are designed for quick and safe placement without the need
            for foundations. Their strong steel structure allows easy transportation and relocation
            using cranes or forklifts.
          </p>
          <p>
            These containers are ideal for remote and challenging environments such as oil &amp;
            gas sites, energy projects, and temporary settlements where conventional construction
            is impractical.
          </p>
          <p>
            Built for both accommodation and office use, the units offer efficient layouts, user
            comfort, and durable, low-maintenance construction for long-term performance.
          </p>
        </div>
        <div className={styles.mobilityImgs}>
          <div className={styles.mobImg1} />
          <div className={styles.mobImg2} />
        </div>
      </section>

      {/* STRUCTURAL STRENGTH BAND */}
      <section className={styles.structural}>
        <div className={styles.structuralWatermark}>CONTAINER</div>
        <div className={styles.structuralContent}>
          <div className={styles.structuralText}>
            <h2>Structural Strength for Harsh<br />Environmental &amp; Climatic Conditions</h2>
            <p>
              The skid-mounted containers produced within this project were designed to withstand
              harsh climatic conditions, industrial environments, and intensive usage scenarios.
              The steel structural system provides high structural strength while the modular
              construction approach allows customised solutions in line with project requirements.
            </p>
          </div>
          <div className={styles.structuralImg} />
        </div>
      </section>

      {/* EXPERTISE / INDUSTRY */}
      <section className={styles.expertise}>
        <div className={styles.expertiseHeader}>
          <h2>Expertise Across Energy<br /><span>&amp; Industrial Projects</span></h2>
          <p>
            L&amp;R delivers advanced modular container solutions for oil &amp; gas, energy, and
            construction sectors, combining strong engineering, flexible design, and fast project
            execution for demanding environments.
          </p>
        </div>
        <div className={styles.expertiseGrid}>
          {industryProjects.map((item) => (
            <div key={item.title} className={styles.expCard}>
              <div
                className={styles.expImg}
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className={styles.expLabel}>
                <h4>{item.title}</h4>
                {item.desc && <p>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAST DELIVERY */}
      <section className={styles.delivery}>
        <div className={styles.deliveryHeader}>
          <h2>Fast &amp; Integrated<br /><span>Project Delivery</span></h2>
          <p>
            Seamless execution from design to installation, ensuring quick deployment and timely
            completion.
          </p>
        </div>
        <div className={styles.deliveryGrid}>
          {deliveryFeatures.map((f) => (
            <div key={f.title} className={styles.delivCard}>
              <div className={styles.delivIcon}>{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>FAQ</span>
        <div className={styles.faqHeader}>
          <h2>Frequently Asked<br /><span>Questions</span></h2>
          <p>
            Find answers to common questions about our container solutions, design process, and
            performance benefits.
          </p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className={styles.faqImg} />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Ms Containers?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customised
          ms containers tailored to your storage needs.
        </p>
        <button className={styles.btnBlue}>Contact US &nbsp;→</button>
      </section>

      <Footer />
    </>
  );
};

export default MsContainer;