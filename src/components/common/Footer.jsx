import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg-text">L&R GREEN INDIA</div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">LR</div>
          <h2>L & R Enterprises</h2>
          <p>
            Manufacturer of prefabricated structures, mild steel containers,
            modular offices and solar support systems.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Products</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <p>PEB Buildings</p>
          <p>MS Containers</p>
          <p>Prefab Cabins</p>
          <p>Solar Structures</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>New Delhi, India</p>
          <p>+91-8595351363</p>
          <p>Info.Lr1995@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 L&R Green India Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;