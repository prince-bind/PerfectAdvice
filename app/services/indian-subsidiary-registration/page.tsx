"use client";

import { useState } from 'react';
import { Handshake, Building2, Star, CheckCircle2, ChevronDown, Globe } from 'lucide-react';

const IndianSubsidiaryRegistration = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', mobile: '' });
  const [sidebarForm, setSidebarForm] = useState({ name: '', email: '', mobile: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toc = [
    "Overview", "Why Indian Subsidiary?", "Eligibility Criteria", "Registration Process", "Documents Required", "Perfect Advice Advantage", "How to reach Perfect Advice?", "Frequently Asked Questions"
  ];

  const benefits = [
    {
      title: "100% Foreign Ownership",
      desc: "In most sectors, foreign entities can own 100% of the equity in an Indian subsidiary under the automatic route, without requiring prior government approval."
    },
    {
      title: "Limited Liability Protection",
      desc: "The liability of the parent company is limited to the extent of its shareholding in the Indian subsidiary, protecting the global assets from Indian operational risks."
    },
    {
      title: "Strategic Market Entry",
      desc: "Establishing a subsidiary allows global brands to have a permanent presence in one of the world's fastest-growing economies with a dedicated local management team."
    },
    {
      title: "Double Taxation Benefits",
      desc: "India has signed the Double Taxation Avoidance Agreement (DTAA) with over 80 countries, providing significant tax relief on dividends and repatriated profits."
    }
  ];

  const eligibilityCriteria = [
    { num: "01", title: "Minimum Two Directors" },
    { num: "02", title: "One Resident Indian Director" },
    { num: "03", title: "Minimum Two Shareholders" },
    { num: "04", title: "Valid Registered Office in India" },
    { num: "05", title: "FC-GPR Filing Compliance" },
    { num: "06", title: "MOA & AOA Attestation" },
  ];

  const documents = [
    "Apostilled / Legalized ID and Address proof of Foreign Directors",
    "Certificate of Incorporation of the Parent Company",
    "Board Resolution from Parent Company authorizing investment",
    "Passport-size photographs of all proposed Directors",
    "Proof of Indian Registered Office (Rent Agreement/Utility Bill)",
    "NOC from the landlord of the premises",
    "Digital Signature Certificates (DSC) of all Directors"
  ];

  // const advantage = [
  //   "End-to-end liaison with the Reserve Bank of India (RBI) for FDI compliance.",
  //   "Expert legal assistance in documents attestation and legalization from foreign embassies.",
  //   "Specialized tax planning for cross-border transactions and transfer pricing.",
  //   "Dedicated relationship manager for seamless global coordination."
  // ];

  // const timelineSteps = [
  //   "Fill The Form",
  //   "Get a Callback",
  //   "Submit Document",
  //   "Track Progress",
  //   "Get Deliverables"
  // ];

  const faqs = [
    {
      q: "Can a foreign individual be a director in an Indian subsidiary?",
      a: "Yes, a foreign individual can be a director. However, at least one director on the board must be an Indian citizen and a resident of India."
    },
    {
      q: "What is the minimum capital required for an Indian subsidiary?",
      a: "There is no minimum paid-up capital requirement for a Private Limited Company (which is the most common form for a subsidiary) under the Companies Act, 2013."
    },
    {
      q: "How long does it take to register an Indian subsidiary?",
      a: "Typically, it takes 15 to 25 working days, depending on the speed of document legalization in the parent company's home country and ROC approval."
    },
    {
      q: "Is prior RBI approval needed for foreign investment?",
      a: "For most sectors, no prior approval is needed under the 'Automatic Route'. However, the company must file an online report (FC-GPR) within 30 days of issuing shares."
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#075985] py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 11px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#075985] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 max-w-[750px]">
            <h1 className="text-[38px] md:text-[46px] leading-[1.2] font-bold text-white mb-5 tracking-tight">
              Indian Subsidiary Registration
            </h1>
            
            <p className="text-[16px] text-sky-100 mb-10 leading-[1.7] pr-4 max-w-[95%]">
              Expand your global business into India seamlessly. Our experts handle everything from company incorporation to RBI filings and embassy legalization, ensuring a smooth entry into the Indian market.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 border border-sky-700 bg-white/5 rounded-[8px] p-5 backdrop-blur-sm max-w-max">
              <div className="flex items-center gap-4">
                <Globe size={32} strokeWidth={1.5} className="text-[#38bdf8]"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">50 +</div>
                  <div className="text-[13px] text-sky-200 font-medium tracking-wide">Countries Served</div>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-sky-700 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <Building2 size={32} strokeWidth={1.5} className="text-[#38bdf8]"/>
                <div>
                  <div className="font-bold text-[18px] text-white tracking-wide mb-0.5">1000 +</div>
                  <div className="text-[13px] text-sky-200 font-medium tracking-wide">Subsidiaries Incorporated</div>
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center gap-4">
               <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
                  <Handshake size={24} className="text-[#075985]" />
               </div>
               <div>
                 <div className="text-white font-bold text-[15px] mb-0.5">Global Presence</div>
                 <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="flex text-[#fbbf24] gap-0.5">
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                      <Star size={14} className="fill-[#fbbf24]" strokeWidth={0} />
                    </div>
                    <span className="text-[13.5px] text-sky-100 font-medium ml-1">
                      Trusted by <strong className="font-bold text-white">500+ Global Multinational Corporations</strong>
                    </span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Content - Hero Form */}
          <div className="w-full lg:w-[440px] shrink-0">
             <div className="bg-white rounded-[6px] shadow-2xl p-9 relative overflow-hidden ring-1 ring-gray-100">
                <h3 className="text-[17px] font-bold text-center text-[#111827] mb-7 tracking-wide relative z-10 w-full flex justify-center uppercase">
                  EXPERT ADVISORY
                </h3>

                <form className="space-y-[18px] relative z-10 pb-2" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#075985] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.name}
                      onChange={e => setHeroForm({...heroForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Corporate Email" 
                      className="w-full h-[50px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#075985] text-[14.5px] placeholder:text-gray-400 bg-white transition"
                      value={heroForm.email}
                      onChange={e => setHeroForm({...heroForm, email: e.target.value})}
                    />
                  </div>
                  <div className="flex h-[50px] border border-gray-200 rounded-[4px] bg-white focus-within:border-[#075985] transition overflow-hidden">
                    <div className="bg-[#f8fafc] px-3 flex items-center justify-center gap-2 border-r border-gray-200 shrink-0 text-[14px] text-gray-700 cursor-pointer w-[90px]">
                      <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-[18px] h-[12px] object-cover rounded-sm shadow-sm" />
                      <span className="font-medium">+91</span>
                      <ChevronDown size={14} className="text-gray-500" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-full px-4 focus:outline-none text-[14.5px] placeholder:text-gray-400 bg-transparent"
                      value={heroForm.mobile}
                      onChange={e => setHeroForm({...heroForm, mobile: e.target.value})}
                    />
                  </div>

                  <button className="w-full bg-[#075985] hover:bg-[#0c4a6e] text-white font-bold py-[14px] rounded-[4px] mt-4 transition text-[14.5px] tracking-wide shadow-sm uppercase">
                    Get Free Strategy call
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT + SIDEBAR */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
         <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-start relative">
            
            {/* Left Main Content */}
            <div className="flex-1 w-full lg:w-[calc(100%-380px)] space-y-12">
               
               {/* Overview */}
               <div>
                  <h2 className="text-[24px] md:text-[26px] font-bold text-[#1f2937] mb-5 tracking-tight">What is an Indian Subsidiary?</h2>
                  <div className="text-[15.5px] text-[#4b5563] space-y-5 leading-[1.7] font-medium">
                     <p>
                        An Indian Subsidiary is an entity whose interests are controlled by another company, known as the parent or holding company, which is incorporated outside India. Under the Companies Act, 2013, an Indian Subsidiary is treated as a separate legal entity from its foreign parent company.
                     </p>
                     <p>
                        It is one of the most preferred entry strategies for foreign investors because it allows for full management control and participation in the Indian market while enjoying the same privileges as any other Indian company. The process involves coordinating between the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI).
                     </p>
                  </div>
               </div>

               {/* Table of Contents */}
               <div>
                 <h2 className="text-[15.5px] font-bold text-[#1f2937] mb-4">Table of Contents</h2>
                 <div className="flex flex-wrap gap-2.5">
                   {toc.map((item, idx) => (
                     <button key={idx} className="bg-[#075985] hover:bg-[#0c4a6e] text-white px-4 py-2 text-[13px] font-medium rounded transition">
                       {item}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Benefits */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Advantages of Setting Up a Subsidiary</h2>
                  <ul className="space-y-6">
                    {benefits.map((benefit, i) => (
                       <li key={i}>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#075985] shrink-0"></div>
                             <h4 className="font-bold text-[#1f2937] text-[16px]">{benefit.title}</h4>
                          </div>
                          <p className="text-[15px] text-[#4b5563] ml-3.5 leading-[1.7] font-medium pb-2 border-b border-gray-100 last:border-0">
                            {benefit.desc}
                          </p>
                       </li>
                    ))}
                  </ul>
               </div>

               {/* Eligibility Diagram */}
               <div>
                 <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-4 tracking-tight">Eligibility Criteria</h2>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-14 bg-[#f8fafc] p-8 rounded-xl border border-blue-50">
                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(0, 3).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-l-4 border-[#075985] shadow-sm flex items-center gap-4">
                            <span className="text-[22px] font-black text-[#075985]/20">{item.num}</span>
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                         </div>
                       ))}
                    </div>

                    <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#0c4a6e] to-[#0ea5e9] rounded-full flex items-center justify-center text-center p-6 shadow-xl border-4 border-white z-10 shrink-0">
                       <h3 className="text-white font-bold text-[18px] leading-tight text-center">
                         Subsidiary Requirements
                       </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                       {eligibilityCriteria.slice(3, 6).map((item, idx) => (
                         <div key={idx} className="bg-white px-5 py-4 min-w-[220px] rounded-[8px] border-r-4 border-[#075985] shadow-sm flex items-center gap-4 justify-end text-right">
                            <span className="text-[14px] font-bold text-[#1f2937] leading-snug">{item.title}</span>
                            <span className="text-[22px] font-black text-[#075985]/20">{item.num}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* Documents */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-5 tracking-tight">Documents Required</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-[15px] text-[#4b5563] font-medium leading-[1.5]">{doc}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               {/* FAQs */}
               <div>
                  <h2 className="text-[22px] md:text-[24px] font-bold text-[#1f2937] mb-6 tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-[6px] bg-white overflow-hidden transition-all duration-200">
                        <button 
                          className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-gray-50 transition"
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-[#075985] font-bold mt-0.5">Q.</span>
                            <span className="font-bold text-[#1f2937] text-[15.5px] pr-4">{faq.q}</span>
                          </div>
                          <ChevronDown size={18} className={`text-gray-500 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`px-5 pl-12 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-[300px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="text-[15px] text-[#4b5563] font-medium leading-[1.7]">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Sidebar Form */}
            <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24">
               <div className="bg-white rounded-[10px] shadow-lg p-6 md:p-8 border border-gray-100">
                  <h3 className="text-[18px] font-bold text-center text-[#1f2937] mb-6 uppercase">
                    Connect With Us
                  </h3>

                  <form className="space-y-[15px]" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#075985] text-[14px]"
                      value={sidebarForm.name}
                      onChange={e => setSidebarForm({...sidebarForm, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#075985] text-[14px]"
                      value={sidebarForm.email}
                      onChange={e => setSidebarForm({...sidebarForm, email: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full h-[46px] px-4 border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#075985] text-[14px]"
                      value={sidebarForm.mobile}
                      onChange={e => setSidebarForm({...sidebarForm, mobile: e.target.value})}
                    />
                    <button className="w-full bg-[#075985] hover:bg-[#0c4a6e] text-white font-bold py-[12px] rounded-[4px] transition text-[15px] uppercase">
                      Confirm Appointment
                    </button>
                  </form>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default IndianSubsidiaryRegistration;
