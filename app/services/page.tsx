import { Search, HandHeart, Award, Settings, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const AllServices = () => {
  const featuresData = [
    {
      title: "Value to All",
      description: "We constantly challenge each other to make sure we're giving you the best service we can. Does it work for you? Does it work for us? Are you getting more than you expected? Only when the answer is yes, are we happy.",
      iconBg: "bg-[#0f2863]",
      accentColor: "bg-[#0f2863]",
      Icon: HandHeart,
    },
    {
      title: "Best Practice",
      description: "We can't give value to all unless we have confidence in our systems and processes. We need to be sure that everything we do, including our advice to you, takes into account recent legislation and practice. We achieve this through regular professional training for our people and independent 'best practice' reviews.",
      iconBg: "bg-[#00c853]",
      accentColor: "bg-[#00c853]",
      Icon: Award,
    },
    {
      title: "Consistency",
      description: "Quality crucial to a successful working relationship. We have put measures in place to ensure that our teams use the same processes, materials and technical data and are in regular communication. It means that no matter who you speak to, which office you call or what day of the week it is, you can be confident you'll always get the same experience.",
      iconBg: "bg-[#1e88e5]",
      accentColor: "bg-[#1e88e5]",
      Icon: Settings,
    },
    {
      title: "Continuous Improvement",
      description: "Through best practice and consistency, we strive for perfection. But there's always room for improvement. That's why we'll always ask for your feedback and use it to make next year's work even better. We're not in the habit of standing still.",
      iconBg: "bg-[#333333]",
      accentColor: "bg-[#333333]",
      Icon: TrendingUp,
    }
  ];

  return (
    <div className="font-sans w-full bg-white">
      
      {/* --- HEADER SECTION --- */}
      <section className="relative bg-[#112a6a] overflow-hidden py-16 md:py-24">
        
        {/* Decorative Background Graphic (Simulated with SVGs) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
           <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Approximating the gears and leaves with paths */}
              <circle cx="450" cy="200" r="120" stroke="#ffffff" strokeWidth="15" strokeDasharray="40 20"/>
              <circle cx="450" cy="200" r="60" stroke="#ffffff" strokeWidth="15"/>
              <circle cx="250" cy="250" r="80" stroke="#ffffff" strokeWidth="10" strokeDasharray="30 15"/>
              <circle cx="250" cy="250" r="30" stroke="#ffffff" strokeWidth="10"/>
              <path d="M400 350 Q 450 250 550 200 Q 500 350 400 350" stroke="#ffffff" strokeWidth="15" fill="none" />
              <path d="M150 350 Q 200 280 280 250 Q 250 350 150 350" stroke="#ffffff" strokeWidth="10" fill="none" />
           </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">ALL </span>
            <span className="text-[#00e676]">SERVICES</span>
          </h1>

          {/* Divider Line with 4 squares */}
          <div className="flex items-center gap-4 mb-8">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-[#00e676] rounded-sm"></div>
              <div className="bg-[#00e676] rounded-sm"></div>
            </div>
            <div className="h-0.5 bg-white w-full max-w-lg"></div>
          </div>

          {/* Subtitle */}
          <p className="text-white font-semibold tracking-wider text-sm mb-4 uppercase">
            Everything at a glance
          </p>

          {/* Search Bar */}
          <div className="bg-white flex items-center w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="Search through all our services ..." 
              className="w-full py-4 px-6 text-gray-700 outline-none text-[15px]"
            />
            <button className="p-4 mr-2 text-[#112a6a] hover:text-blue-800 transition-colors">
              <Search size={28} strokeWidth={3} />
            </button>
          </div>

        </div>
      </section>

      {/* --- CARDS SECTION --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="flex bg-white border border-gray-200 shadow-sm relative h-full min-h-55"
              >
                {/* Left Icon Area Wrapper */}
                <div className="flex flex-col shrink-0">
                  <div className={`w-28 h-28 md:w-[120px] md:h-[120px] ${feature.iconBg} flex items-center justify-center shrink-0`}>
                    <feature.Icon size={48} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="p-6 md:p-8 flex flex-col justify-start">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#112a6a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[14.5px] md:text-[15px] leading-relaxed pb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Right Colored Bar Indicator */}
                <div className={`absolute bottom-0 right-0 h-[6px] md:h-[8px] w-20 md:w-24 ${feature.accentColor}`}></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICE CARD GROUP HELPER */}

      {/* ── BUSINESS REGISTRATIONS ──────────────────────────────── */}
      <section className="py-12 px-6 md:px-14 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
              {[0,1,2,3].map(i => <div key={i} className={`rounded-[2px] ${i%2===0?'bg-[#1a73e8]':'bg-[#93c5fd]'}`}></div>)}
            </div>
            <h2 className="text-[22px] font-bold text-[#111827]"><span className="text-[#1a73e8]">Business</span> Registrations</h2>
          </div>
          <p className="text-[13px] text-gray-400 mb-7 ml-10">List of Perfect Advice Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Public Limited Company Registration', items: ['Process of Public Limited Company Registration', 'Three Digital Signature Certificates along with three Director Identification Numbers', 'Name finding and reservation process for your company.', 'Drafting MOA and AOA.', 'Obtaining the Corporate Identification Number for your Public Company.'] },
              { title: 'Limited Liability Partnership Registration', items: [] },
              { title: 'One Person Company Registration', items: [] },
              { title: 'Partnership Firm Registration', items: [] },
              { title: 'Sole Proprietorship Registration', items: [] },
              { title: 'Indian Subsidiary Registration', items: ['Filing of all regulatory Forms', 'Registering your business in India', 'Market Entry Strategy for India', 'Advisory related to business operations', 'Assistance with all the regulatory forms and Compliance', 'Liasioning with Authorities for speedy registration'] },
              { title: 'Nidhi Company Registration', items: ['Business Plan and Structure for the Nidhi Company', 'Compliance under RBI and NBFC', 'Compliance under the Companies Act, 2013', 'Assistance with the procedure to establish a Nidhi Company', 'Easy Access to Public Financing'] },
              { title: 'Shop & Establishment Registration', items: ['Procedure for Shop and Establishment Registration', 'State Wise Assistance for Shop and Establishment License', 'Liaising with the Government Department for Registration Process', 'End-to-end follow up', 'Filing the application with the respective authority'] },
              { title: 'Producer Company Registration', items: [] },
            ].map((card, i) => (
              <div key={i} className="flex flex-col justify-between border border-gray-200 rounded-[12px] bg-white shadow-sm hover:shadow-md transition p-6 min-h-[260px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-bold text-[15px] text-[#111827] leading-tight">{card.title}</h3>
                  </div>
                  {card.items.length > 0 && (
                    <ul className="space-y-2.5 max-h-[155px] overflow-y-auto pr-1">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.8"/><path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="text-[13.5px] text-[#4b5563] leading-[1.55]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link href={`/services/${card.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className="mt-6 bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[6px] self-start transition shadow-sm text-center inline-flex items-center justify-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NGO REGISTRATIONS ───────────────────────────────────── */}
      <section className="py-12 px-6 md:px-14 lg:px-24 bg-[#f9fafb]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
              {[0,1,2,3].map(i => <div key={i} className={`rounded-[2px] ${i%2===0?'bg-[#1a73e8]':'bg-[#93c5fd]'}`}></div>)}
            </div>
            <h2 className="text-[22px] font-bold text-[#111827]"><span className="text-[#1a73e8]">NGO</span> Registrations</h2>
          </div>
          <p className="text-[13px] text-gray-400 mb-7 ml-10">List of Perfect Advice Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'NGO Registration', items: [] },
              { title: 'Section 8 Company Registration', items: [] },
              { title: '12A and 80G Registration', items: ['Application drafting for Section 12A license', 'Application drafting for 80 G exemption certificate', 'Approval from Income tax commissioner', 'End to end follow-up with tax authorities', 'All india Service over 500+ CA/CS/CMA'] },
              { title: 'FCRA Registration', items: [] },
              { title: 'Society Registration', items: ['Draft Memorandum of Society.', 'Documents Submission with Registrar Of Society.', 'End to end coordination with the registrar.', 'Submission of additional Documents (if required).'] },
              { title: 'Trust Registration', items: ['Advice on the trust registration procedure.', 'Advice on securing 12A and 80G registration under the Income Tax Act, 1961.', 'Compliance with the registration of trusts.', 'Assistance in drafting the trust deed.', 'Advice on the different forms of trust that can be formed.', 'Post compliance for the trust registration.'] },
            ].map((card, i) => (
              <div key={i} className="flex flex-col justify-between border border-gray-200 rounded-[12px] bg-white shadow-sm hover:shadow-md transition p-6 min-h-[260px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-bold text-[15px] text-[#111827] leading-tight">{card.title}</h3>
                  </div>
                  {card.items.length > 0 && (
                    <ul className="space-y-2.5 max-h-[155px] overflow-y-auto pr-1">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.8"/><path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="text-[13.5px] text-[#4b5563] leading-[1.55]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link href={`/services/${card.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className="mt-6 bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[6px] self-start transition shadow-sm text-center inline-flex items-center justify-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT REGISTRATIONS & LICENSES ─────────────────── */}
      <section className="py-12 px-6 md:px-14 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
              {[0,1,2,3].map(i => <div key={i} className={`rounded-[2px] ${i%2===0?'bg-[#1a73e8]':'bg-[#93c5fd]'}`}></div>)}
            </div>
            <h2 className="text-[22px] font-bold text-[#111827]"><span className="text-[#1a73e8]">Government</span> Registrations &amp; Licenses</h2>
          </div>
          <p className="text-[13px] text-gray-400 mb-7 ml-10">List of Perfect Advice Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'ESI Registration', items: ['Process of ESIC registration.', 'Applicability criteria for ESIC registration.', 'Employer and Employee Registration under this process.', 'End-to-End Paper works.'] },
              { title: 'EPF Registration', items: ['Process of Registering with Employee Provident Fund (EPF).', 'Liaising with regulatory authorities such as the Employee Provident Fund Organisation (EPFO).', 'Filing Employee Details with the respective authority.', 'End-to-End Paper works.'] },
              { title: 'IEC Registration', items: ['Process of applying for the Import Export Code Certification.', 'Liaising with the Director General of Foreign Trade (DGFT) for IEC certification.', 'Securing the DGFT IEC certification.', 'End-to-End paper works.'] },
              { title: 'GST Registration', items: ['Advice on GST Registration', 'Filing GST Returns', 'GST Compliance Services', 'GST Audit Services'] },
              { title: 'FSSAI Registration', items: ['Advice on FSSAI Registration', 'Filing FSSAI applications', 'FSSAI License Renewal', 'End-to-End Paper works'] },
              { title: 'MSME Registration', items: ['Advice on MSME Registration', 'Filing MSME applications', 'MSME Compliance Services', 'End-to-End Paper works'] },
            ].map((card, i) => (
              <div key={i} className="flex flex-col justify-between border border-gray-200 rounded-[12px] bg-white shadow-sm hover:shadow-md transition p-6 min-h-[260px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-bold text-[15px] text-[#111827] leading-tight">{card.title}</h3>
                  </div>
                  {card.items.length > 0 && (
                    <ul className="space-y-2.5 max-h-[155px] overflow-y-auto pr-1">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.8"/><path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="text-[13.5px] text-[#4b5563] leading-[1.55]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link href={`/services/${card.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className="mt-6 bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[6px] self-start transition shadow-sm text-center inline-flex items-center justify-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADEMARK & PATENTS ──────────────────────────────────── */}
      <section className="py-12 px-6 md:px-14 lg:px-24 bg-[#f9fafb]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="grid grid-cols-2 gap-[3px] w-7 h-7 shrink-0">
              {[0,1,2,3].map(i => <div key={i} className={`rounded-[2px] ${i%2===0?'bg-[#1a73e8]':'bg-[#93c5fd]'}`}></div>)}
            </div>
            <h2 className="text-[22px] font-bold text-[#111827]"><span className="text-[#1a73e8]">Trademark</span> &amp; Patents</h2>
          </div>
          <p className="text-[13px] text-gray-400 mb-7 ml-10">List of Perfect Advice Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Trademark Registration', items: [] },
              { title: 'Patent Registration', items: ['Search Patentability of an innovation', 'Drafting of a Patent Registration Application', 'Filing of a Patent Registration Application', 'Government Fee is inclusive'] },
              { title: 'Patent Search', items: ['Patent Search grants ownership of 20 years.', 'Patent Application drafting.', 'Analysis of Existing inventions.', 'Government fees.', 'Follow-up with the controller of the patent.'] },
            ].map((card, i) => (
              <div key={i} className="flex flex-col justify-between border border-gray-200 rounded-[12px] bg-white shadow-sm hover:shadow-md transition p-6 min-h-[260px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-bold text-[15px] text-[#111827] leading-tight">{card.title}</h3>
                  </div>
                  {card.items.length > 0 && (
                    <ul className="space-y-2.5 max-h-[155px] overflow-y-auto pr-1">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.8"/><path d="M8 12l3 3 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="text-[13.5px] text-[#4b5563] leading-[1.55]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link href={`/services/${card.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className="mt-6 bg-[#1a73e8] hover:bg-[#155fc4] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[6px] self-start transition shadow-sm text-center inline-flex items-center justify-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllServices;