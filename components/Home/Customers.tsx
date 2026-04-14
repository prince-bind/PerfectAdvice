const logos = [
  { name: "Airtel", url: "./company-images/1.png" },
  { name: "GreyOrange", url: "./company-images/2.png" },
  { name: "BurdaDruck", url: "./company-images/3.png" },
  { name: "NTPC", url: "./company-images/4.png" },
  { name: "Philips", url: "./company-images/5.png" },
  { name: "IKUNI", url: "./company-images/6.png" },
  { name: "Ford", url: "./company-images/7.png" },
  { name: "Revolt", url: "./company-images/8.png" },
  { name: "MCDERMOTT", url: "./company-images/9.png" },
  { name: "Hexagon", url: "./company-images/10.png" },
];

const Customers = () => {
  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Customers Who Trust Us
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-12">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee flex items-center gap-16">
            {/* Render logos TWICE for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="shrink-0 flex items-center justify-center min-w-37.5">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling (Duplicate row for density effect like video) */}
        <div className="flex overflow-hidden group">
          <div 
            className="animate-marquee flex items-center gap-16" 
            style={{ animationDirection: 'reverse' }} // Scrolls opposite way
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="shrink-0 flex items-center justify-center min-w-37.5">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;