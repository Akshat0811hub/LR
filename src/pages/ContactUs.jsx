import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    projectName: "",
    phone: "",
    email: "",
    productName: "",
    cityName: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const whyCards = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
      title: "High-Quality Solutions",
      desc: "We deliver durable and precision-engineered structures using premium materials and advanced manufacturing standards.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      title: "Pan-India Presence",
      desc: "With strong execution capability across India, we ensure seamless delivery and installation even in remote locations.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "Timely Project Delivery",
      desc: "Our streamlined processes and expert team ensure projects are completed on schedule without compromising quality.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/contacthero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            CONTACT L&amp;R <br />
            <span>GREEN INDIA</span>
          </h1>
          <p className={styles.subtitle}>
            Get in touch with L&amp;R Green India Pvt Ltd for reliable
            prefabrication and modular building solutions tailored to your
            project needs.
          </p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className={styles.touchSec}>
        <div className={styles.touchContainer}>
          <div className={styles.touchHeader}>
            <div>
              <h2 className={styles.secTitle}>
                Get in <span>Touch</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.touchDesc}>
              Get in touch with our team for expert guidance,
              <br /> customized solutions, and complete support for your
              <br /> project needs.
            </p>
          </div>

          <div className={styles.touchGrid}>
            {/* LEFT — Contact Info (dark navy card) */}
            {/* LEFT — Contact Info (dark navy card) */}
            <div className={styles.contactInfoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoBlock}>
                  <span className={styles.infoLabel}>Name</span>
                  <div className={styles.infoRow}>
                    <div className={styles.infoIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <strong className={styles.infoValue}>
                      Mr. Lalit Gautam
                    </strong>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <span className={styles.infoLabel}>Phone no</span>
                  <div className={styles.infoRow}>
                    <div className={styles.infoIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <strong className={styles.infoValue}>
                      +91 8595351363 ; 9758813668
                    </strong>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <span className={styles.infoLabel}>Technical Support</span>
                  <div className={styles.infoRow}>
                    <div className={styles.infoIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <strong className={styles.infoValue}>
                      Info.Lr1995@gmail.Com
                    </strong>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <span className={styles.infoLabel}>Office Address</span>
                  <div
                    className={styles.infoRow}
                    style={{ alignItems: "flex-start" }}
                  >
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "2px" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <strong className={styles.infoValue}>
                      216/2, Gautam Nagar,
                      <br />
                      Gulmohar Enclave,
                      <br />
                      New Delhi-110049
                    </strong>
                  </div>
                </div>
              </div>

              {/* Stats row — light bottom strip */}
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>100+</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Years Expertise</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Technical Inquiry Form */}
            <div className={styles.formCol}>
              <h3 className={styles.formTitle}>Technical Inquiry</h3>
              <div className={styles.formTitleUnderline} />
              {submitted && (
                <div className={styles.successBanner}>
                  ✓ Your enquiry has been submitted. We'll be in touch shortly!
                </div>
              )}
              <form className={styles.inquiryForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John Doe"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Select Project</label>
                    <input
                      type="text"
                      name="projectName"
                      placeholder="Select Projects"
                      value={formData.projectName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Dragon@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      value={formData.productName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>City Name</label>
                    <input
                      type="text"
                      name="cityName"
                      placeholder="City Name"
                      value={formData.cityName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formGroupFull}>
                  <label>Detailed Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe you project scope, location, and demenions"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fileRow}>
                  <label>Upload File</label>
                  <label style={{ display: "block", cursor: "pointer" }}>
                    <input
                      type="file"
                      name="file"
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    <div className={styles.fileInputWrapper}>
                      <span className={styles.fileBtn}>Choose File</span>
                      <span className={styles.fileHint}>
                        {formData.file ? formData.file.name : "No File Chosen"}
                      </span>
                    </div>
                  </label>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Submit Proposal &nbsp;→
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <div className={styles.whyHeader}>
            <div>
              <h2 className={styles.secTitle}>
                Why Choose L&amp;R <br />
                <span>Green India</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.whyDesc}>
              Delivering reliable, high-quality modular solutions with
              efficiency and nationwide reach.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((card, i) => (
              <div
                key={i}
                className={`${styles.whyCard} ${card.isDark ? styles.whyCardDark : ""}`}
              >
                <div className={styles.whyIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className={styles.mapSec}>
        <iframe
          title="L&R Green India Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.2090!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s21%2F02%20Gautam%20Nagar%20Gulmohar%20Enclave%20New%20Delhi!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
