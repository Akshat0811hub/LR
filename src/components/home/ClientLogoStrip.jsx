const ClientLogoStrip = () => {
  const logos = [
    "HETERO",
    "Mahindra",
    "Walmart",
    "P&G",
    "NATCO",
    "Shapoorji",
  ];

  return (
    <section className="client-strip">
      <div className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="client-logo" key={index}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogoStrip;