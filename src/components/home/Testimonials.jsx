import React from 'react';
import styles from '../../styles/Testimonials.module.css';

const testimonialsData = [
  {
    quote: "The precision L&R brought to our warehouse project was exceptional. Their adherence to the 100% success mandate meant we faced zero delays during the structural phase.",
    name: "AMIT SHARMA",
    role: "Warehouse Project - Customer",
    active: false,
  },
  {
    quote: "Building a multi-span PEB structure requires technical mastery. L&R Enterprises delivered exactly that. Their reputation for a 100% success rate is well-earned.",
    name: "RAJESH GUPTA",
    role: "PEB Structure - customer",
    active: true,
  },
  {
    quote: "Partnering with L&R has been a strategic advantage, with their industrial-grade engineering, solar fastener manufacturing expertise, and consistent on-time delivery setting them apart in the industry.",
    name: "SNEHA REDDY",
    role: "Heavy-Machinery Plant - Hyderabad",
    active: false,
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div 
        className={styles.bgOverlay} 
        style={{ backgroundImage: "url('/Images/built2.png')" }}
      />
      <div className={styles.headerContainer}>
        <span className={styles.tag}>• What Our Client Says</span>
        <h2>
          Industrial Excellence Through <br />
          <span className={styles.blueText}>the Eyes of Our Partners</span>
        </h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cardContainer}>
        {testimonialsData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${item.active ? styles.activeCard : ''}`}
          >
            <div className={styles.quoteIcon}>“</div>
            <p className={styles.quoteText}>"{item.quote}"</p>
            
            <div className={styles.authorBlock}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  <path d="m15 5 3 3" />
                </svg>
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{item.name}</h4>
                <p className={styles.authorRole}>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scrollbarContainer}>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollIndicator}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
