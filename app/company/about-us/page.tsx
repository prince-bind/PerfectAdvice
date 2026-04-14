import { CheckCircle, Target, Rocket, Cpu } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white font-sans text-slate-800">

      {/* 1. Quote Section (image_6f20d5) */}
      <section className="relative bg-[#2582E5] text-white overflow-hidden py-16 md:py-24">
        {/* Background Waves - Left */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.15]">
          <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-full preserve-3d" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,160L40,165.3C80,171,160,181,240,208C320,235,400,277,480,277.3C560,277,640,235,720,213.3C800,192,880,192,960,192C1040,192,1120,192,1200,202.7C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
        </div>

        {/* Background Waves - Right */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.1]">
          <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-full" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,32L80,64C160,96,320,160,480,186.7C640,213,800,203,960,186.7C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10 px-4 md:px-8 flex flex-col items-center">

          <div className="flex gap-4 items-start mb-10 w-full justify-center">
            {/* Quote Marks SVG */}
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white shrink-0 mt-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2
              className="text-[26px] md:text-[32px] font-bold leading-relaxed text-white text-center max-w-[650px]"
              style={{ fontFamily: "'Nunito', 'Varela Round', 'Comic Sans MS', sans-serif", letterSpacing: "1px" }}
            >
              If you want to grow you have to do something different from the majority of people.”
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[68px] h-[68px] md:w-[76px] md:h-[76px] rounded-full overflow-hidden mb-3 bg-[#e8cdba] shadow-lg">
              {/* Replace with actual image later, using a solid placeholder or generic for now */}
              <img src="/owner-photo.png" alt="Narendra Kumar" className="object-cover w-full h-full object-top" />
            </div>
            <p className="font-bold text-[17px] tracking-wide text-white mb-0.5">CA NIKUNJ ANAND</p>
            <p className="text-white/80 text-[13px]">Chartered Accountant | Founder</p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are (image_6f207c) */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:flex items-start gap-16">
        <div className="lg:w-1/2">
          <p className="text-cyan-500 font-bold text-xs uppercase tracking-widest mb-2">About Us – Perfect Advice</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>Perfect Advice is a Legaltech company that redefines how businesses access legal, tax, and consulting services.</p>
            <p>We operate as a technology-driven platform where client leads are intelligently assigned to independent professionals based on zip code, jurisdiction, and domain expertise.</p>
            <p>Unlike traditional consulting firms, Perfect Advice is not just a service provider. Instead, we connect businesses with the right professionals worldwide—lawyers, Chartered Accountants, CPAs, and consultants—while ensuring global quality standards and regulatory compliance.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-6 text-slate-900">How It Works</h3>
          <ul className="space-y-4">
            {[
              "Clients submit requirements on our platform.",
              "AI-powered matching assigns leads to independent professionals in their zip code or jurisdiction.",
              "Local professionals deliver services, ensuring compliance with regional laws.",
              "Perfect Advice provides oversight, technology, and quality assurance.",
              "In-house professionals intervene only in specialized or high-complexity cases."
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-slate-600">
                <span className="font-bold text-slate-900">{i + 1}.</span> {step}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-slate-700">This unique model ensures businesses get localized expertise with global quality standards.</p>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" alt="Success" className="rounded-xl shadow-lg w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* 3. Global Reach (image_6f2078) */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100">
        <h2 className="text-3xl font-extrabold text-indigo-950 mb-10">Global Reach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
          {[
            "25+ countries covered with exclusive partner alliances.",
            "5000+ zip codes serviced worldwide.",
            "2000+ independent professionals in our network.",
            "50+ in-house experts (Lawyers, CAs, CS).",
            "2500+ entrepreneurs served globally."
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0" />
              <span className="text-lg text-slate-700">{stat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Services (image_6f205e) */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-indigo-950 mb-4">Our Services</h2>
          <p className="text-slate-600 mb-8">Our platform enables access to:</p>
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Regulatory Approvals & Licensing (BFSI, Fintech, PayTech, NBFC, InsurTech, PropTech).",
              "Tax Advisory, Audit & Assurance.",
              "Fractional CFO & Family Office Services.",
              "Wealth Advisory & Legal Structuring.",
              "Global Expansion & Cross-Border Compliance.",
              "Digital Compliance Automation (AI-enabled dashboards)."
            ].map((service, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-700">{service}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-600 italic">We simplify the complexity of 100+ laws and 500+ regulatory notifications—all through a single login platform.</p>
        </div>
      </section>

      {/* 5. Vision, Mission, Goal (image_6f205a) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-pink-50 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
            <Target className="text-pink-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
          <p className="text-slate-600 leading-relaxed">To be the world's most trusted Legaltech platform, providing domestic and international business solutions with technology at the core.</p>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
            <Cpu className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
          <p className="text-slate-600 leading-relaxed">To use AI, machine learning, and data-driven software to make business compliance and consulting seamless, scalable, and globally accessible.</p>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-pink-50 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
            <Rocket className="text-pink-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Goal</h3>
          <p className="text-slate-600 leading-relaxed">To establish Perfect Advice as a global Legaltech leader, trusted by entrepreneurs, enterprises, and investors worldwide.</p>
        </div>
      </section>

      {/* 6. Why Choose Perfect Advice (image_6f2057) */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:flex items-center gap-16">
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-extrabold text-indigo-950 mb-10">Why Choose Perfect Advice</h2>
          <div className="space-y-6">
            {[
              { title: "Technology-first approach", desc: "AI-driven lead allocation based on location & expertise." },
              { title: "500+ Independent Professionals", desc: "worldwide." },
              { title: "100+ Industry Experts", desc: "(Ex-Regulators, Ex-CEOs, Ex-CFOs, Ex-CTOs)." },
              { title: "Global yet local", desc: "compliance with jurisdiction-specific laws in every market." },
              { title: "Trusted by 2500+ entrepreneurs", desc: "across multiple industries." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-lg text-slate-700">
                  <span className="font-bold text-slate-900">{item.title}—</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 mt-12 lg:mt-0">
          <img src="/choose-us-img.webp" alt="Team" className="w-full" />
        </div>
      </section>

      {/* 7. Our Business Model (image_6f1d54) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <h2 className="text-3xl font-extrabold text-indigo-950 mb-6">Our Business Model</h2>
        <p className="text-lg text-slate-600 mb-8">Perfect Advice is not a traditional consulting firm—it's a platform.</p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-lg text-slate-700 font-medium">Clients → Perfect Advice Platform → AI Matching → Independent Professionals.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-lg text-slate-700">Perfect Advice ensures technology, compliance, and quality control.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-lg text-slate-700">Services are executed by independent professionals, with Perfect Advice in-house experts stepping in only when necessary.</p>
          </div>
        </div>
        <p className="mt-10 text-xl font-semibold text-slate-800">
          This makes Perfect Advice a true Legaltech ecosystem: global reach, AI-enabled technology, and localized expertise.
        </p>
      </section>

      {/* 9. Meet Our Decision Makers */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Header Content - Left Aligned */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[34px] md:text-[38px] font-bold text-[#1a1147] leading-tight mb-6">
              Meet Our Decision Makers
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              Network of 10,000+ Professionals with 10+ years of experience from 50+ countries to empower millions of entrepreneurs like you.
            </p>
            <button className="bg-[#1a3a8a] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#152e6e] transition-colors shadow-lg w-fit">
              View All
            </button>
          </div>

          {[
            { name: "CA NIKUNJ ANAND", role: "Chartered Accountant | Founder", image: "/team/owner-photo.png" },
            { name: "CA NITIN GOEL", role: "Chartered Accountant", image: "/team/CA_NitinGoel.jpeg" },
          ].map((member, i) => (
            <div key={i} className="w-full">
              <TeamCard {...member} />
            </div>
          ))}
        </div>

        {/* Bottom Row: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "CA PIYUSH JAIN", role: "Chartered Accountant", image: "/team/CA_PiyushJain.png" },
            { name: "CA RAVI PANDEY", role: "Chartered Accountant", image: "/team/Ravi.jpeg" },
            { name: "ADV. ANSHUL BANSAL", role: "Advocate", image: "/team/AnshulBansal.png" },
            { name: "ADV. RAZESH KUMAR SHARMA", role: "Advocate", image: "/team/Advocate_Razesh_Kumar_Sharma.jpeg" },
          ].map((member, i) => (
            <div key={i}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const TeamCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-gray-100 rounded-none overflow-hidden flex flex-col items-center group transition-all duration-300">
    <div className="w-full aspect-[4/5] overflow-hidden p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover grayscale0"
      />
    </div>
    <div className="p-6 pt-5 w-full flex flex-col items-center text-center">
      <h3 className="text-[17px] font-bold text-[#1a1147] mb-1">{name}</h3>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      <p className="text-[#6b7280] text-xs font-medium mb-4">{role}</p>
    </div>
  </div>
);

export default AboutUs;