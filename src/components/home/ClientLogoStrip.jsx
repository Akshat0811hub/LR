const ClientLogoStrip = () => {
  const logos = ["HETERO", "Mahindra", "Walmart", "P&G", "NATCO", "Shapoorji"];

  return (
    <section className="client-strip">
      {logos.map((logo, index) => (
        <div className="client-logo" key={index}>
          {logo}
        </div>
      ))}
    </section>
  );
};

export default ClientLogoStrip;