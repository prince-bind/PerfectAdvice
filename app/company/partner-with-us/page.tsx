import { Check } from 'lucide-react';

const benefits = [
  "We give 10-20 confirmed orders to each local partner on daily basis.",
  "You can increase your income by 50% every month and gain more loyal customers every day.",
  "We have approximate 500 Partners in India (CA, CS, CMA & Lawyers).",
  "You can even outsource any work to us which you feel beyond your practice area.",
  "Gain a team of 100+ CA, CS, & Legal professionals.",
  "Management approval"
];

const PartnerWithUs = () => {
  return (
    <div className="font-sans">
      
      {/* ==============================
          1. HERO BANNER
      ============================== */}
      <section className="relative bg-[#1034a6] py-10 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-3 tracking-wide">
            PARTNER WITH US
          </h1>
          <p className="text-xl text-blue-100 font-medium">
            Partner With Perfect Advice
          </p>
        </div>
      </section>

      {/* ==============================
          2. CONTENT & FORM SECTION
      ============================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* --- Left Column: Benefits List --- */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Why to do partnership with Perfect Advice?
              </h2>

              <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Check Icon */}
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-blue-600" strokeWidth={3} />
                    </div>
                    {/* Text */}
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Column: Request Form --- */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#0f1d40] rounded-lg p-6 md:p-8 shadow-xl">
                <h3 className="text-white text-center font-bold text-xl uppercase mb-6">
                  Request Information
                </h3>

                <form className="flex flex-col gap-4">
                  
                  {/* Row 1: Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name*" 
                      className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <div className="flex bg-white rounded overflow-hidden">
                      <div className="flex items-center justify-center px-2 bg-gray-100 border-r border-gray-200 text-xs text-slate-600 gap-1 min-w-17.5">
                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-auto" />
                        +91
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number*" 
                        className="w-full px-3 py-3 text-slate-800 placeholder:text-slate-500 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <input 
                    type="text" 
                    placeholder="Company Name*" 
                    className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Email */}
                  <input 
                    type="email" 
                    placeholder="Email Id*" 
                    className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Row 2: Occupation & State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="w-full px-4 py-3 rounded bg-white text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                      <option>Select Occupation*</option>
                      <option>Chartered Accountant</option>
                      <option>Lawyer</option>
                      <option>Company Secretary</option>
                    </select>
                    
                    <select className="w-full px-4 py-3 rounded bg-white text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                      <option>Select State*</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>

                  {/* Captcha */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-2">
                    <label className="text-white text-sm font-semibold">
                      Are you Human? : (6) + (9) =
                    </label>
                    <input 
                      type="text" 
                      placeholder="Answer" 
                      className="w-full px-4 py-3 rounded bg-white text-slate-800 placeholder:text-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="button" // Change to "submit" for real forms
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3.5 rounded mt-4 transition-colors text-base"
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          3. LOGO CAROUSEL
      ============================== */}
      <section className="py-16 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl font-bold text-[#1a1147] text-center lg:text-left">
            We Partner With More Than 100+ Companies
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <div key={idx} className="mx-8 w-40 flex items-center justify-center transition-all duration-300">
                <img 
                  src={`/company-images/${num}.png`} 
                  alt={`Partner ${num}`} 
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <div key={idx} className="mx-8 w-40 flex items-center justify-center transition-all duration-300">
                <img 
                  src={`/company-images/${num}.png`} 
                  alt={`Partner ${num}`} 
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerWithUs;