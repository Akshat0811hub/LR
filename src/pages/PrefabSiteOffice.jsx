import { useState } from "react";
import "./PrefabSiteOfficePage.css";

// ─── HEADER ────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <div className="header-top-links">
            <span>📞 +91-XXXXXXXXXX</span>
            <span>✉ info@lrgreen.in</span>
          </div>
          <div className="header-top-social">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">t</a>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container header-main-inner">
          <div className="logo">
            <span className="logo-icon">🏗</span>
            <div className="logo-text">
              <strong>L&amp;R Enterprises</strong>
              <small>L&amp;R Green India Pvt Ltd</small>
            </div>
          </div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <a href="#" className="nav-btn">Get a Quote</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-sub">L&amp;R Green India Pvt Ltd</p>
        <h1>SMART PREFABRICATED SITE<br />OFFICE CABINS</h1>
        <p className="hero-desc">
          Durable, movable, and efficiently engineered modular cabins, the perfect
          solution as site operations for construction, civil, and industrial projects.
        </p>
        <button className="btn-primary">Contact Us ▾</button>
      </div>
    </section>
  );
}

// ─── WHAT ARE PREFAB ─────────────────────────────────────────────────────────
function WhatArePrefab() {
  return (
    <section className="section what-are">
      <div className="container two-col">
        <div className="col-text">
          <h2>What Are Prefabricated<br />Site Office Cabins?</h2>
          <p>
            Prefabricated site office cabins are modular, ready-to-use
            workspace solutions that are manufactured off-site and then
            transported to the project location. Designed to be durable,
            weatherproof, and fully functional, these cabins provide a
            professional working environment even in remote or rugged terrains.
          </p>
          <p>
            They are ideal for construction companies, infrastructure firms,
            mining operations, and large-scale project sites that require
            temporary yet effective office setups. With options for insulation,
            electrical fittings, and customized interiors, these cabins offer
            convenience without compromising quality.
          </p>
          <button className="btn-outline">Read More</button>
        </div>
        <div className="col-image">
          <div className="image-placeholder img-office-interior" />
        </div>
      </div>
    </section>
  );
}

// ─── DESIGNED FOR MOBILITY ───────────────────────────────────────────────────
function DesignedForMobility() {
  const features = [
    "Lightweight yet Sturdy Construction",
    "Quick Assembly and Dismantling",
    "Portable and Easily Relocatable",
    "Suitable for All Weather Conditions",
    "Customizable Interiors and Layouts",
  ];
  return (
    <section className="section mobility">
      <div className="container two-col reverse">
        <div className="col-image">
          <div className="image-placeholder img-corridor" />
        </div>
        <div className="col-text">
          <h2>Designed for<br />Mobility &amp; Strength</h2>
          <p>
            Our prefab site office cabins are built with high-quality steel
            frames and sandwich panel walls that ensure superior strength while
            keeping the overall structure lightweight and easy to transport.
          </p>
          <ul className="feature-list">
            {features.map((f, i) => (
              <li key={i}>
                <span className="check">✔</span> {f}
              </li>
            ))}
          </ul>
          <p>
            These cabins are engineered for rapid deployment and long-term
            performance, making them the trusted choice for leading project
            management teams across India.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
function WhyChoose() {
  return (
    <section className="section why-choose">
      <div className="container two-col">
        <div className="col-text">
          <h2>Why Choose L&amp;R<br />Green India Pvt Ltd</h2>
          <p>
            At L&amp;R Green India Pvt Ltd, we bring years of expertise in
            prefabricated construction with a commitment to delivering
            world-class quality products. Our state-of-the-art manufacturing
            facility ensures that every cabin meets stringent quality standards.
          </p>
          <p>
            We work closely with project managers, site engineers, and
            procurement teams to deliver tailored solutions that align with
            project timelines and budget requirements. From design to delivery,
            we ensure a seamless experience for our clients.
          </p>
          <p>
            Our after-sales support team ensures that your cabins remain in
            peak condition throughout the project lifecycle, giving you peace
            of mind and uninterrupted productivity.
          </p>
        </div>
        <div className="col-image">
          <div className="image-placeholder img-building-exterior" />
        </div>
      </div>
    </section>
  );
}

// ─── BUILT FOR GROWING PROJECT DEMANDS ──────────────────────────────────────
function BuiltForGrowing() {
  return (
    <section className="section built-for dark-section">
      <div className="container two-col">
        <div className="col-text">
          <h2>Built for Growing<br />Project Demands</h2>
          <p>
            As your project scales, our modular cabin systems can scale with
            you. Connect multiple units to create larger office complexes,
            conference rooms, or multi-functional spaces without any permanent
            construction.
          </p>
          <p>
            Our cabins are available in a range of sizes and configurations to
            accommodate growing teams. Whether you need a single-room office or
            a multi-unit complex, L&amp;R Green India Pvt Ltd has the right
            solution for you.
          </p>
        </div>
        <div className="col-image">
          <div className="image-placeholder img-site-render" />
        </div>
      </div>
      <div className="watermark">SITE OFFICE</div>
    </section>
  );
}

// ─── ADVANTAGES ─────────────────────────────────────────────────────────────
function Advantages() {
  const items = [
    {
      icon: "⏱",
      title: "Time Efficiency",
      desc: "Fast delivery and installation reduce project downtime significantly.",
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      desc: "Affordable pricing with minimal maintenance costs over the project span.",
    },
    {
      icon: "♻",
      title: "Eco-Friendly",
      desc: "Sustainable materials and reusable structure reduce environmental impact.",
    },
  ];
  const badges = [
    { icon: "🔧", label: "Custom Built" },
    { icon: "🌿", label: "Sustainable Build" },
    { icon: "🌦", label: "Weather & Fire Resistant" },
  ];
  return (
    <section className="section advantages">
      <div className="container">
        <h2>Advantages Of Prefabricated<br />&amp; Modular Construction</h2>
        <div className="adv-grid">
          {items.map((item, i) => (
            <div className="adv-card" key={i}>
              <div className="adv-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="adv-badges">
          {badges.map((b, i) => (
            <div className="adv-badge" key={i}>
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APPLICATIONS ────────────────────────────────────────────────────────────
function Applications() {
  const apps = [
    "Construction Site Offices",
    "Mining Site Cabins",
    "Industrial Site Offices",
    "Security Cabins",
    "Labour Accommodation",
    "Temporary Classrooms",
    "Storage Units",
    "Portable Toilets / Washrooms",
    "Guard Rooms",
    "Solar Office Cabins",
  ];
  return (
    <section className="section applications">
      <div className="container two-col">
        <div className="col-text">
          <h2>Prefab Site Office<br />Applications</h2>
          <p>
            Our prefabricated cabins serve a wide range of industries and
            sectors. Here are the most common applications where our solutions
            deliver real value on the ground.
          </p>
        </div>
        <div className="col-image">
          <div className="image-placeholder img-app-interior" />
        </div>
      </div>
      <div className="container">
        <div className="apps-list-grid">
          {apps.map((a, i) => (
            <div className="app-item" key={i}>
              <span className="dot">●</span> {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "What is a prefab site office cabin?",
      a: "A prefab site office cabin is a modular, ready-to-use workspace manufactured off-site and delivered to your project location for quick setup.",
    },
    {
      q: "How quickly can a prefab site office be delivered and installed?",
      a: "Depending on size and customization, most cabins can be delivered and installed within 7–15 working days from order confirmation.",
    },
    {
      q: "Are mobile site offices available?",
      a: "Yes, we offer fully mobile site office cabins that can be transported and reinstalled at different locations as your project moves.",
    },
    {
      q: "Can You Depend On Our Clients?",
      a: "Absolutely. L&R Green India has served hundreds of satisfied clients across India in construction, mining, and industrial sectors.",
    },
    {
      q: "Where can L&R Green commonly be used?",
      a: "Our cabins are commonly used at construction sites, industrial facilities, mining operations, border areas, and remote infrastructure projects.",
    },
  ];

  const [open, setOpen] = useState(null);
  return (
    <section className="section faq">
      <div className="container two-col faq-layout">
        <div className="col-text">
          <h2>Frequently Asked<br />Questions</h2>
        </div>
        <div className="col-text faq-desc">
          <p>
            Find quick answers to common queries about our prefab cabins,
            services, delivery, customization, and more. We're here to help
            you make the right choice for your project.
          </p>
        </div>
      </div>
      <div className="container">
        {faqs.map((faq, i) => (
          <div
            className={`faq-item${open === i ? " open" : ""}`}
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              <span>{faq.q}</span>
              <span className="faq-toggle">{open === i ? "−" : "+"}</span>
            </div>
            {open === i && <div className="faq-answer">{faq.a}</div>}
          </div>
        ))}
      </div>
      <div className="container faq-image-row">
        <div className="image-placeholder img-faq-hallway" />
      </div>
    </section>
  );
}

// ─── CTA BANNER ─────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <h2>Ready for Your Prefab Site Office ?</h2>
        <p>
          Get in touch with our team today and receive a detailed, site-specific
          quote. Fast turnaround, competitive pricing, and unmatched quality.
        </p>
        <button className="btn-primary">Contact Us</button>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="logo-icon">🏗</span>
              <div>
                <strong>L&amp;R Enterprises</strong>
                <small>L&amp;R Green India Pvt Ltd</small>
              </div>
            </div>
            <p>
              123, Industrial Area, Phase II,<br />
              New Delhi – 110020, India
            </p>
            <div className="footer-socials">
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">t</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Home</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Links</h5>
            <ul>
              <li><a href="#">L&amp;R Enterprises</a></li>
              <li><a href="#">L&amp;R Infracon</a></li>
              <li><a href="#">L&amp;R Civil</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Help</h5>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2024 L&amp;R Green India Pvt Ltd. All Rights Reserved.</p>
          <p>Designed &amp; Developed by L&amp;R Digital Team</p>
        </div>
      </div>
    </footer>
  );
}

// ─── LETS CONNECT BANNER ─────────────────────────────────────────────────────
function LetsConnectBanner() {
  return (
    <div className="lets-connect-banner">
      <div className="container">
        <h2>LET'S CONNECT L&amp;R GREEN INDIA</h2>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function PrefabSiteOfficePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <WhatArePrefab />
      <DesignedForMobility />
      <WhyChoose />
      <BuiltForGrowing />
      <Advantages />
      <Applications />
      <FAQ />
      <CTABanner />
      <LetsConnectBanner />
      <Footer />
    </div>
  );
}